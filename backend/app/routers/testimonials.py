from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

class Testimonial(BaseModel):
    name: str
    message: str

# In-memory testimonials
testimonials: List[Testimonial] = [
    Testimonial(name="Abdul Nazar", message="Expertly managed all my mutual funds from day one. Highly recommend Veehul Finserve LLP!"),
    Testimonial(name="Pradeep Jenvi", message="Amazing and trustworthy investment experience. Valuable advice and support.")
]

@router.get("/", response_model=List[Testimonial])
def list_testimonials():
    return testimonials

@router.post("/", response_model=Testimonial)
def add_testimonial(testimonial: Testimonial):
    testimonials.append(testimonial)
    return testimonial 