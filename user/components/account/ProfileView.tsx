import { PageHeader } from "@vndn/shared/components/dashboard/PageHeader";
import { PlaceholderPanel } from "@/components/ui/PlaceholderPanel";

export function ProfileView() {
  return (
    <div>
      <PageHeader
        title="Profile"
        description="Manage your contact details and preferences."
      />
      <PlaceholderPanel message="Profile settings form — connect to PUT /api/users/me when available." />
    </div>
  );
}
