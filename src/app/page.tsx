import Hero from "@/sections/hero/Hero";
import HowICanHelp from "@/sections/howicanhelp/Howicanhelp";
import Blog from "@/sections/blog/Blog";
import Depoimentos from "@/sections/depoimentos/Depoimentos";
import NaMidia from "@/sections/namidia/NaMidia";

export default async function HomePage() {
  return (
    <div>
      <Hero />
      <HowICanHelp />
      <NaMidia />
      <Blog />
      <Depoimentos />
    </div>
  );
}
