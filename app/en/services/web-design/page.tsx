import { EN_META, enPageMetadata } from "@/lib/seo/en-metadata";
import Page from "@/app/services/web-design/page";

export const metadata = enPageMetadata({ zhPath: "/services/web-design", ...EN_META["/services/web-design"] });

export default Page;
