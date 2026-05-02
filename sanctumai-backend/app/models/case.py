from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.sql import func
from app.database import Base

class Case(Base):
    __tablename__ = "cases"

    id = Column(Integer, primary_key=True, index=True)
    tenant_id = Column(Integer, ForeignKey("tenants.id"), nullable=False)
    case_number = Column(String, unique=True, nullable=False)
    case_type = Column(String, nullable=False)
    status = Column(String, default="Intake")
    assigned_user = Column(String)
    notes = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())