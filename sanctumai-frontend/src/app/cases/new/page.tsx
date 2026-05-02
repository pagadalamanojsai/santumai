"use client";

import { useState } from "react";
import { createCase } from "@/services/api";
import { useRouter } from "next/navigation";

export default function NewCasePage() {
  const router = useRouter();

  const [form, setForm] = useState({
    tenant_id: 1,
    case_number: "",
    case_type: "Burial",
    status: "Intake",
    assigned_user: "",
    notes: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await createCase({
      ...form,
      tenant_id: Number(form.tenant_id),
    });

    router.push("/cases");
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Create New Case</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow max-w-2xl space-y-4">
        <div>
          <label className="block mb-1 font-medium">Case Number</label>
          <input
            name="case_number"
            value={form.case_number}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="CASE-1002"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Case Type</label>
          <select
            name="case_type"
            value={form.case_type}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option>Burial</option>
            <option>Cremation</option>
            <option>Memorial</option>
            <option>Pre-Need</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option>Intake</option>
            <option>Arrangement</option>
            <option>Scheduled</option>
            <option>Service Completed</option>
            <option>Closed</option>
            <option>Cancelled</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Assigned User</label>
          <input
            name="assigned_user"
            value={form.assigned_user}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Funeral Director Name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter case notes"
          />
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Save Case
        </button>
      </form>
    </main>
  );
}