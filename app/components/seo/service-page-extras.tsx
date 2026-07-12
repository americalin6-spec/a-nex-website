import type { ServiceSlug } from "@/app/data/relations";
import { getRelatedProjectsForService } from "@/app/data/relations";
import { getServiceFaqs } from "@/app/data/service-faqs";
import { ContactCtaSection } from "./contact-cta-section";
import { RelatedProjectsSection } from "./related-sections";
import { ServiceFaqSection } from "./service-faq-section";

export function ServicePageExtras({ serviceSlug }: { serviceSlug: ServiceSlug }) {
  const relatedProjects = getRelatedProjectsForService(serviceSlug, 3);
  const faqs = getServiceFaqs(serviceSlug);

  return (
    <>
      <RelatedProjectsSection projects={relatedProjects} />
      <ServiceFaqSection faqs={faqs} />
      <ContactCtaSection />
    </>
  );
}
