from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from app.database import Base

class Tenant(Base):
    __tablename__ = "tenants"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String)
    phone = Column(String)
    address = Column(String)
    logo_url = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())