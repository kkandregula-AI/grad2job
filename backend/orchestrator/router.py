
from agents.resume_agent import resume_agent
from agents.coding_agent import coding_agent
from agents.career_agent import career_agent

def route_task(query: str):
    q = query.lower()

    if "resume" in q:
        return resume_agent()

    elif "coding" in q:
        return coding_agent()

    return career_agent()
