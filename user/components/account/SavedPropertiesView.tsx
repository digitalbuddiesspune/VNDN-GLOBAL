import { PageHeader } from "@vndn/shared/components/dashboard/PageHeader";
import { PlaceholderPanel } from "@/components/ui/PlaceholderPanel";

export function SavedPropertiesView() {
  return (
    <div>
      <PageHeader
        title="Saved properties"
        description="Your shortlisted luxury listings."
      />
      <PlaceholderPanel message="Connect property APIs to load saved listings." />
    </div>
  );
}
