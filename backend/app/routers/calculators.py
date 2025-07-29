from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class SIPInput(BaseModel):
    monthly_investment: float
    years: int
    annual_return: float

@router.post("/sip")
def sip_calculator(data: SIPInput):
    n = data.years * 12
    r = data.annual_return / 12 / 100
    future_value = data.monthly_investment * (((1 + r) ** n - 1) / r) * (1 + r)
    return {"future_value": round(future_value, 2)}

class LumpsumInput(BaseModel):
    principal: float
    years: int
    annual_return: float

@router.post("/lumpsum")
def lumpsum_calculator(data: LumpsumInput):
    future_value = data.principal * ((1 + data.annual_return / 100) ** data.years)
    return {"future_value": round(future_value, 2)}

class RetirementInput(BaseModel):
    current_age: int
    retirement_age: int
    monthly_expense: float
    inflation_rate: float

@router.post("/retirement")
def retirement_calculator(data: RetirementInput):
    years = data.retirement_age - data.current_age
    future_expense = data.monthly_expense * ((1 + data.inflation_rate / 100) ** years)
    return {"required_monthly_expense": round(future_expense, 2)} 