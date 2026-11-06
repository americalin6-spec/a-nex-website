import { EN_META, enPageMetadata } from "@/lib/seo/en-metadata";
import Page from "@/app/services/seo/page";

export const metadata = enPageMetadata({ zhPath: "/services/seo", ...EN_META["/services/seo"] });

export default Page;
