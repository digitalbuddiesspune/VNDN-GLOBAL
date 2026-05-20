import { PageHeader } from "../components/layout/PageHeader";

const statusStyles = {
  New: "bg-blue-100 text-blue-700",
  Contacted: "bg-orange-100 text-orange-700",
  Closed: "bg-emerald-100 text-emerald-700",
};

export function InquiriesPage() {
  const sampleInquiries = [
    { id: "INQ-001", name: "Sarah Mitchell", property: "Palm Jumeirah Villa", status: "New" },
    { id: "INQ-002", name: "James Wilson", property: "Downtown Penthouse", status: "Contacted" },
    { id: "INQ-003", name: "Emma Davis", property: "Dubai Marina Apt", status: "Closed" },
  ];

  return (
    <div>
      <PageHeader
        title="Inquiries"
        description="Track leads and property inquiry requests."
      />
      <div className="rounded-xl border border-slate-100 bg-white shadow-sm">
        <ul className="divide-y divide-slate-100">
          {sampleInquiries.map((inquiry) => (
            <li key={inquiry.id} className="flex flex-wrap items-center gap-4 px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                {inquiry.name.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-slate-900">{inquiry.name}</p>
                <p className="text-sm text-slate-500">
                  {inquiry.id} · {inquiry.property}
                </p>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[inquiry.status]}`}
              >
                {inquiry.status}
              </span>
              <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                View
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
