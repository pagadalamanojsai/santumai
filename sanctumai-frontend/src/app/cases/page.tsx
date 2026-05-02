"use client";

import { useEffect, useState } from "react";
import { getCases } from "@/services/api";
import Link from "next/link";

type Case = {
  id: number;
  case_number: string;
  case_type: string;
  status: string;
  assigned_user?: string | null;
  notes?: string | null;
};

export default function CasesPage() {
  const [cases, setCases] = useState<Case[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getCases()
      .then((data) => setCases(data))
      .catch(() => setError("Could not load cases. Make sure the backend is running."));
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cases</h1>
        <Link
          href="/cases/new"
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Create New Case
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        {error ? (
          <div className="p-4 text-sm text-red-600">{error}</div>
        ) : null}
        <table className="w-full">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="p-4">Case Number</th>
              <th className="p-4">Type</th>
              <th className="p-4">Status</th>
              <th className="p-4">Assigned User</th>
              <th className="p-4">Notes</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">{item.case_number}</td>
                <td className="p-4">{item.case_type}</td>
                <td className="p-4">{item.status}</td>
                <td className="p-4">{item.assigned_user}</td>
                <td className="p-4">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
