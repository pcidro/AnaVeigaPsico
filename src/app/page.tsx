import Hero from "@/sections/hero/Hero";
import HowICanHelp from "@/sections/howicanhelp/Howicanhelp";
import SobreMim from "@/sections/sobremim/SobreMim";
import Blog from "@/sections/blog/Blog";
import Depoimentos from "@/sections/depoimentos/Depoimentos";
import NaMidia from "@/sections/namidia/NaMidia";
import FAQ from "@/sections/faq/FAQ";
import Footer from "@/sections/footer/Footer";
import { getDataHome } from "@/actions/getdata";
import { PostsResponse } from "@/types/postType";

export default async function HomePage() {
  const { objects }: PostsResponse = await getDataHome();

  return (
    <div>
      <Hero />
      <HowICanHelp />
      <SobreMim />
      <Depoimentos />
      <NaMidia />
      <Blog posts={objects} />
      <FAQ />
      <Footer />
    </div>
  );
}
