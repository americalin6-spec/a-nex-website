import { EN_META, enPageMetadata } from "@/lib/seo/en-metadata";
import Page from "@/app/downloads/page";

export const metadata = enPageMetadata({ zhPath: "/downloads", ...EN_META["/downloads"] });

export default Page;
