import { EN_META, enPageMetadata } from "@/lib/seo/en-metadata";
import Page from "@/app/services/page";

export const metadata = enPageMetadata({ zhPath: "/services", ...EN_META["/services"] });

export default Page;
