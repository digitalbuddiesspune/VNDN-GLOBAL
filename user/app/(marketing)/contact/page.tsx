import { ContactSection } from "@/components/home/ContactSection";
import { PageHero } from "@/components/home/PageHero";

export const metadata = {
  title: "Contact | Vane & Victors",
  description: "Contact Vane & Victor Partners offices in Dubai and Ahmedabad.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Get in <em>Touch</em>
          </>
        }
        description="Reach our Dubai and India teams for viewings, portfolio reviews, and partnership enquiries."
      />
      <ContactSection />
    </>
  );
}
