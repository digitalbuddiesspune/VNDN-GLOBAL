import { PageHeader } from "@vndn/shared/components/dashboard/PageHeader";


export default function Page() {
  return (
    <div>
      <PageHeader
        title="Leads & CRM"
        description="Module scaffold — connect to shared backend API at /api."
      />
      <div className="rounded-xl border border-dashed border-vndn-border p-10 text-center text-vndn-muted">
        <p>Leads & CRM module ready for API integration.</p>
      </div>
    </div>
  );
}
