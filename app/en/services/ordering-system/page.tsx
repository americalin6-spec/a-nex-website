import { EN_META, enPageMetadata } from "@/lib/seo/en-metadata";
import Page from "@/app/services/ordering-system/page";

export const metadata = enPageMetadata({ zhPath: "/services/ordering-system", ...EN_META["/services/ordering-system"] });

export default Page;
