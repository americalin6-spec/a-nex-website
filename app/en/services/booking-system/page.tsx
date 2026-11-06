import { EN_META, enPageMetadata } from "@/lib/seo/en-metadata";
import Page from "@/app/services/booking-system/page";

export const metadata = enPageMetadata({ zhPath: "/services/booking-system", ...EN_META["/services/booking-system"] });

export default Page;
