
from fastapi import FastAPI
from orchestrator.router import route_task

app = FastAPI()

@app.get("/")
def home():
    return {"status":"running"}

@app.post("/ai")
def ai(payload: dict):
    query = payload.get("query","")
    return route_task(query)
