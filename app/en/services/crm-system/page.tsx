import { EN_META, enPageMetadata } from "@/lib/seo/en-metadata";
import Page from "@/app/services/crm-system/page";

export const metadata = enPageMetadata({ zhPath: "/services/crm-system", ...EN_META["/services/crm-system"] });

export default Page;
