import { EN_META, enPageMetadata } from "@/lib/seo/en-metadata";
import Page from "@/app/services/app-development/page";

export const metadata = enPageMetadata({ zhPath: "/services/app-development", ...EN_META["/services/app-development"] });

export default Page;
