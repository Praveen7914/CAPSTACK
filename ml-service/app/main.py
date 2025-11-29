from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="CAPSTACK ML Service", version="1.0.0")

class RiskScoreRequest(BaseModel):
    income: float
    expenses: float
    savings: float
    debt: float

@app.get("/")
def read_root():
    return {"message": "CAPSTACK ML Service"}

@app.post("/risk-score")
def calculate_risk_score(request: RiskScoreRequest):
    # TODO: Use trained ML model to calculate risk score
    # For now, return dummy score
    score = (request.expenses / request.income) * 100 if request.income > 0 else 100
    return {"risk_score": min(score, 100), "level": "high" if score > 50 else "low"}