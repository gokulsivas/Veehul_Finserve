from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from typing import List

router = APIRouter()

class User(BaseModel):
    email: EmailStr
    password: str

users: List[User] = []

@router.post("/register")
def register(user: User):
    if any(u.email == user.email for u in users):
        raise HTTPException(status_code=400, detail="Email already registered")
    users.append(user)
    return {"ok": True, "message": "Registration successful"}

@router.post("/login")
def login(user: User):
    if any(u.email == user.email and u.password == user.password for u in users):
        return {"ok": True, "message": "Login successful"}
    raise HTTPException(status_code=401, detail="Invalid credentials") 