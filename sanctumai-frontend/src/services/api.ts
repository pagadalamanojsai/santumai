const API_BASE_URL = "http://localhost:8000";

type CasePayload = {
  tenant_id: number;
  case_number: string;
  case_type: string;
  status?: string;
  assigned_user?: string | null;
  notes?: string | null;
};

export async function getCases() {
  const response = await fetch(`${API_BASE_URL}/cases/`);
  if (!response.ok) {
    throw new Error("Failed to fetch cases");
  }
  return response.json();
}

export async function createCase(data: CasePayload) {
  const response = await fetch(`${API_BASE_URL}/cases/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create case");
  }

  return response.json();
}
