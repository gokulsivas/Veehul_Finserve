from fastapi import FastAPI
from .routers import blog, calculators, contact, auth, testimonials

app = FastAPI(title="Veehul Finserve LLP API")

app.include_router(blog.router, prefix="/blog", tags=["Blog"])
app.include_router(calculators.router, prefix="/calculators", tags=["Calculators"])
app.include_router(contact.router, prefix="/contact", tags=["Contact"])
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(testimonials.router, prefix="/testimonials", tags=["Testimonials"])

@app.get("/")
def read_root():
    return {"company": "Veehul Finserve LLP", "message": "Welcome to the API!"} 