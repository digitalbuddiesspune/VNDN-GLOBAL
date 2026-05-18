import { PageHeader } from "@vndn/shared/components/dashboard/PageHeader";

export default function InquiriesPage() {
  return (
    <div>
      <PageHeader
        title="Inquiries"
        description="Track your property inquiries and agent responses."
      />
      <div className="rounded-xl border border-dashed border-vndn-border p-10 text-center text-vndn-muted">
        Inquiry history will appear here once connected to the API.
      </div>
    </div>
  );
}
