import { InquirySection } from "@/components/home/InquirySection";
import { PageHero } from "@/components/home/PageHero";

export const metadata = {
  title: "Inquire | Vane & Victors",
  description: "Request a private consultation with Vane & Victor Partners.",
};

export default function InquirePage() {
  return (
    <>
      <PageHero
        eyebrow="Private Inquiry"
        title={
          <>
            Request a <em>Consultation</em>
          </>
        }
        description="Share your requirements — a senior advisor will respond within 24 hours."
      />
      <InquirySection />
    </>
  );
}
