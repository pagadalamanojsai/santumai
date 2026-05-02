export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">SanctumAI Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-sm text-gray-500">Active Cases</h2>
          <p className="text-3xl font-bold">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-sm text-gray-500">Today’s Services</h2>
          <p className="text-3xl font-bold">4</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-sm text-gray-500">Available Plots</h2>
          <p className="text-3xl font-bold">86</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-sm text-gray-500">Pending Invoices</h2>
          <p className="text-3xl font-bold">7</p>
        </div>
      </div>
    </main>
  );
}