from sqlalchemy import Column, Integer, String, Date, ForeignKey
from app.database import Base

class DeceasedProfile(Base):
    __tablename__ = "deceased_profiles"

    id = Column(Integer, primary_key=True, index=True)
    case_id = Column(Integer, ForeignKey("cases.id"), nullable=False)
    full_name = Column(String, nullable=False)
    date_of_birth = Column(Date)
    date_of_death = Column(Date)
    gender = Column(String)
    place_of_death = Column(String)
    religion = Column(String)
    special_instructions = Column(String)