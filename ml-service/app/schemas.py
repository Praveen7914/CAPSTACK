from pydantic import BaseModel

class RiskRequest(BaseModel):
    income: float
    expenses: float

class ScoreRequest(BaseModel):
    savings: float
    debt: float