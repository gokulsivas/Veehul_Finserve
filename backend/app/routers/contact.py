from fastapi import APIRouter
from pydantic import BaseModel, EmailStr
from typing import List

router = APIRouter()

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

messages: List[ContactForm] = []

@router.post("/")
def submit_contact(form: ContactForm):
    messages.append(form)
    return {"ok": True, "message": "Thank you for contacting Veehul Finserve LLP!"} 