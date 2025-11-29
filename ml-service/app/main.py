from fastapi import FastAPI
from app.core import risk_scoring, survival_algorithm, score_calculator

app = FastAPI(title="CAPSTACK ML Service")

@app.get("/")
def read_root():
    return {"message": "CAPSTACK ML Service"}

@app.post("/risk-score")
def get_risk_score(data: dict):
    return risk_scoring.calculate_risk(data)

@app.post("/survival")
def get_survival(data: dict):
    return survival_algorithm.calculate_survival(data)

@app.post("/score")
def get_score(data: dict):
    return score_calculator.calculate_score(data)