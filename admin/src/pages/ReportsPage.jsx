import { PageHeader } from "../components/layout/PageHeader";

const reports = [
  { name: "Monthly Sales Report", date: "May 2026", type: "PDF" },
  { name: "User Activity Summary", date: "Apr 2026", type: "CSV" },
  { name: "Property Performance", date: "Q1 2026", type: "PDF" },
  { name: "Inquiry Conversion", date: "Mar 2026", type: "XLSX" },
];

export function ReportsPage() {
  return (
    <div>
      <PageHeader
        title="Reports"
        description="Download and generate business reports."
        action={
          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Generate Report
          </button>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {reports.map((report) => (
          <div
            key={report.name}
            className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            <div>
              <p className="font-medium text-slate-900">{report.name}</p>
              <p className="text-sm text-slate-500">{report.date}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                {report.type}
              </span>
              <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
