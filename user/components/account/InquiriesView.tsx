import { PageHeader } from "@vndn/shared/components/dashboard/PageHeader";
import { PlaceholderPanel } from "@/components/ui/PlaceholderPanel";

export function InquiriesView() {
  return (
    <div>
      <PageHeader
        title="Inquiries"
        description="Track your property inquiries and agent responses."
      />
      <PlaceholderPanel message="Inquiry history will appear here once connected to the API." />
    </div>
  );
}
