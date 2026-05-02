from pydantic import BaseModel
from typing import Optional

class CaseCreate(BaseModel):
    tenant_id: int
    case_number: str
    case_type: str
    status: Optional[str] = "Intake"
    assigned_user: Optional[str] = None
    notes: Optional[str] = None

class CaseResponse(CaseCreate):
    id: int

    class Config:
        from_attributes = True