import { EN_META, enPageMetadata } from "@/lib/seo/en-metadata";
import Page from "@/app/line-ai/page";

export const metadata = enPageMetadata({ zhPath: "/line-ai", ...EN_META["/line-ai"] });

export default Page;
