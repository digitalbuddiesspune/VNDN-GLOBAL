import { PageHeader } from "@vndn/shared/components/dashboard/PageHeader";

export default function ProfilePage() {
  return (
    <div>
      <PageHeader title="Profile" description="Manage your contact details and preferences." />
      <div className="rounded-xl border border-dashed border-vndn-border p-10 text-center text-vndn-muted">
        Profile settings form — connect to PUT /api/users/me when available.
      </div>
    </div>
  );
}
