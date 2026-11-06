import { EN_META, enPageMetadata } from "@/lib/seo/en-metadata";
import Page from "@/app/services/line-oa/page";

export const metadata = enPageMetadata({ zhPath: "/services/line-oa", ...EN_META["/services/line-oa"] });

export default Page;
