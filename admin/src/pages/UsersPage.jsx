import { PageHeader } from "../components/layout/PageHeader";

export function UsersPage() {
  return (
    <div>
      <PageHeader
        title="Users"
        description="View and manage registered users and admin accounts."
      />
      <div className="rounded-xl border border-slate-100 bg-white shadow-sm">
        <div className="flex flex-wrap gap-2 border-b border-slate-100 px-5 py-4">
          {["All Users", "Admins", "Agents", "Customers"].map((tab) => (
            <button
              key={tab}
              type="button"
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50"
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Email</th>
                <th className="px-5 py-3 font-medium">Role</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="px-5 py-12 text-center text-slate-400">
                  User records will appear here
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
