import { EN_META, enPageMetadata } from "@/lib/seo/en-metadata";
import Page from "@/app/services/ai-crm/page";

export const metadata = enPageMetadata({ zhPath: "/services/ai-crm", ...EN_META["/services/ai-crm"] });

export default Page;
