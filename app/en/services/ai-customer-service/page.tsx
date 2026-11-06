import { EN_META, enPageMetadata } from "@/lib/seo/en-metadata";
import Page from "@/app/services/ai-customer-service/page";

export const metadata = enPageMetadata({ zhPath: "/services/ai-customer-service", ...EN_META["/services/ai-customer-service"] });

export default Page;
