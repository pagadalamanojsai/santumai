from sqlalchemy import Column, Integer, String, Float, ForeignKey
from app.database import Base

class Plot(Base):
    __tablename__ = "plots"

    id = Column(Integer, primary_key=True, index=True)
    tenant_id = Column(Integer, ForeignKey("tenants.id"), nullable=False)
    plot_number = Column(String, nullable=False)
    section = Column(String)
    row = Column(String)
    status = Column(String, default="Available")
    size = Column(String)
    price = Column(Float)
    linked_case_id = Column(Integer, ForeignKey("cases.id"), nullable=True)
    notes = Column(String)