import Hero from "@/sections/hero/Hero";
import HowICanHelp from "@/sections/howicanhelp/Howicanhelp";
import SobreMim from "@/sections/sobremim/SobreMim";
import Blog from "@/sections/blog/Blog";
import Depoimentos from "@/sections/depoimentos/Depoimentos";
import NaMidia from "@/sections/namidia/NaMidia";
import FAQ from "@/sections/faq/FAQ";
import Footer from "@/sections/footer/Footer";

export default async function HomePage() {
  return (
    <div>
      <Hero />
      <HowICanHelp />
      <SobreMim />
      <Depoimentos />
      <NaMidia />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
}
