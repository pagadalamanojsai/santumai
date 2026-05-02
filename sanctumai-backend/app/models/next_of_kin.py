from sqlalchemy import Column, Integer, String, ForeignKey
from app.database import Base

class NextOfKin(Base):
    __tablename__ = "next_of_kin"

    id = Column(Integer, primary_key=True, index=True)
    case_id = Column(Integer, ForeignKey("cases.id"), nullable=False)
    full_name = Column(String, nullable=False)
    relationship = Column(String)
    phone = Column(String)
    email = Column(String)
    address = Column(String)
    preferred_contact_method = Column(String)