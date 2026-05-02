from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.exc import SQLAlchemyError

from app.database import Base, engine
from app.models.tenant import Tenant
from app.models.case import Case
from app.models.deceased import DeceasedProfile
from app.models.next_of_kin import NextOfKin
from app.models.plot import Plot
from app.routes import cases

app = FastAPI(title="SanctumAI API")
app.include_router(cases.router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def create_database_tables():
    try:
        Base.metadata.create_all(bind=engine)
    except SQLAlchemyError as error:
        print(f"Database startup warning: {error}")


@app.get("/")
def root():
    return {"message": "SanctumAI backend is running"}
