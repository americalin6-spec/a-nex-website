import { EN_META, enPageMetadata } from "@/lib/seo/en-metadata";
import Page from "@/app/projects/page";

export const metadata = enPageMetadata({ zhPath: "/projects", ...EN_META["/projects"] });

export default Page;
