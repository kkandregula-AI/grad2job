
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class CareerRequest(BaseModel):
    query: str

career_data = {
    "ai": "Python -> ML -> Deep Learning -> GenAI",
    "cloud": "AWS -> Docker -> Kubernetes",
    "data": "SQL -> Power BI -> Python"
}

def token_optimizer(text: str):
    return text.lower().strip()[:40]

@app.get("/")
def root():
    return {"status":"AI CareerOS Backend Running"}

@app.post("/career")
def analyze(request: CareerRequest):
    optimized = token_optimizer(request.query)
    result = career_data.get(optimized, "Explore modern career paths.")
    return {
        "optimized_query": optimized,
        "recommendation": result,
        "token_optimization": True
    }
