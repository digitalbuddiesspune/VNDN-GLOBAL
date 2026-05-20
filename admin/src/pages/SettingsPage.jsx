import { PageHeader } from "../components/layout/PageHeader";

export function SettingsPage() {
  return (
    <div>
      <PageHeader
        title="Settings"
        description="Configure site preferences and admin options."
      />
      <div className="max-w-2xl space-y-6">
        <section className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900">General</h3>
          <div className="mt-4 space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Site Name</span>
              <input
                type="text"
                defaultValue="VNDN Global"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Support Email</span>
              <input
                type="email"
                defaultValue="support@vndn.com"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
              />
            </label>
          </div>
        </section>

        <section className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900">Notifications</h3>
          <div className="mt-4 space-y-3">
            {["Email alerts for new inquiries", "Weekly summary reports", "Property status updates"].map(
              (label) => (
                <label key={label} className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-indigo-600" />
                  <span className="text-sm text-slate-700">{label}</span>
                </label>
              )
            )}
          </div>
        </section>

        <button
          type="button"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
