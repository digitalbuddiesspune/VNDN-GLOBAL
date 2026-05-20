import { PageHeader } from "../components/layout/PageHeader";

export function PropertiesPage() {
  return (
    <div>
      <PageHeader
        title="Properties"
        description="Manage luxury listings across Dubai and Ahmedabad."
        action={
          <button
            type="button"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            + Add Property
          </button>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["All", "Dubai", "Ahmedabad", "For Sale", "For Rent"].map((filter) => (
          <button
            key={filter}
            type="button"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 shadow-sm hover:border-indigo-200 hover:bg-indigo-50"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center">
        <p className="text-slate-500">Property listings will be managed from this page.</p>
      </div>
    </div>
  );
}
