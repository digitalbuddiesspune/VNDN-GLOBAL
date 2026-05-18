import { PageHeader } from "@vndn/shared/components/dashboard/PageHeader";


export default function Page() {
  return (
    <div>
      <PageHeader
        title="Media Library"
        description="Module scaffold — connect to shared backend API at /api."
      />
      <div className="rounded-xl border border-dashed border-vndn-border p-10 text-center text-vndn-muted">
        <p>Media Library module ready for API integration.</p>
      </div>
    </div>
  );
}
