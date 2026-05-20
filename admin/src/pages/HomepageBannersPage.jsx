import { PageHeader } from "../components/layout/PageHeader";

export function HomepageBannersPage() {
  return (
    <div>
      <PageHeader
        title="Homepage Banners"
        description="Manage hero banners shown on the marketing homepage."
        action={
          <button
            type="button"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            + Add Banner
          </button>
        }
      />
      <div className="rounded-xl border border-slate-100 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-5 py-4">
          <p className="text-sm text-slate-500">No banners loaded yet. Connect to the API to list and edit banners.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3 font-medium">Headline</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Updated</th>
                <th className="px-5 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="px-5 py-12 text-center text-slate-400">
                  Banner data will appear here
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
