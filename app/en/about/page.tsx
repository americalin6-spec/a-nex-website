import { EN_META, enPageMetadata } from "@/lib/seo/en-metadata";
import Page from "@/app/about/page";

export const metadata = enPageMetadata({ zhPath: "/about", ...EN_META["/about"] });

export default Page;
