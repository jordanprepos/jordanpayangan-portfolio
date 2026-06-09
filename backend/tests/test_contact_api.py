# Contact API tests: POST /api/contact, GET /api/contact (Christopher Jordan portfolio backend)
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://profile-hub-434.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health check / root
def test_root_reachable(client):
    r = client.get(f"{API}/", timeout=15)
    assert r.status_code == 200, r.text
    assert r.json().get("message") == "Hello World"


# Valid contact submission persists
def test_post_contact_valid_creates_and_persists(client):
    unique = f"TEST_{uuid.uuid4().hex[:8]}"
    payload = {
        "name": f"Tester {unique}",
        "email": f"{unique}@example.com",
        "message": f"Hello from automated test {unique}",
    }
    r = client.post(f"{API}/contact", json=payload, timeout=15)
    assert r.status_code == 200, r.text
    data = r.json()
    assert isinstance(data.get("id"), str) and len(data["id"]) > 0
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["message"] == payload["message"]
    assert "created_at" in data and data["created_at"]

    # GET to verify persistence
    r2 = client.get(f"{API}/contact", timeout=15)
    assert r2.status_code == 200, r2.text
    msgs = r2.json()
    assert isinstance(msgs, list)
    matched = [m for m in msgs if m["id"] == data["id"]]
    assert len(matched) == 1
    assert matched[0]["email"] == payload["email"]


# Recent-first ordering
def test_get_contact_returns_most_recent_first(client):
    u1 = f"TEST_{uuid.uuid4().hex[:8]}"
    u2 = f"TEST_{uuid.uuid4().hex[:8]}"
    r1 = client.post(f"{API}/contact", json={"name": u1, "email": f"{u1}@e.com", "message": "first"}, timeout=15)
    r2 = client.post(f"{API}/contact", json={"name": u2, "email": f"{u2}@e.com", "message": "second"}, timeout=15)
    assert r1.status_code == 200 and r2.status_code == 200
    id1, id2 = r1.json()["id"], r2.json()["id"]

    msgs = client.get(f"{API}/contact", timeout=15).json()
    ids = [m["id"] for m in msgs]
    assert id2 in ids and id1 in ids
    assert ids.index(id2) < ids.index(id1), "Most recent should come first"


# Validation: invalid email -> 422
def test_post_contact_invalid_email_422(client):
    r = client.post(
        f"{API}/contact",
        json={"name": "Bad Email", "email": "not-an-email", "message": "hi"},
        timeout=15,
    )
    assert r.status_code == 422, r.text


# Validation: missing fields -> 422
@pytest.mark.parametrize(
    "payload",
    [
        {"email": "a@b.com", "message": "no name"},
        {"name": "x", "message": "no email"},
        {"name": "x", "email": "a@b.com"},
        {"name": "", "email": "a@b.com", "message": "empty name"},
        {"name": "x", "email": "a@b.com", "message": ""},
    ],
)
def test_post_contact_missing_or_empty_fields_422(client, payload):
    r = client.post(f"{API}/contact", json=payload, timeout=15)
    assert r.status_code == 422, r.text
