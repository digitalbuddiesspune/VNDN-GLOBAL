import { PageHeader } from "@vndn/shared/components/dashboard/PageHeader";

export default function SavedPropertiesPage() {
  return (
    <div>
      <PageHeader title="Saved properties" description="Your shortlisted luxury listings." />
      <div className="rounded-xl border border-dashed border-vndn-border p-10 text-center text-vndn-muted">
        Connect property APIs to load saved listings.
      </div>
    </div>
  );
}
