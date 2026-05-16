import Hero from "@/sections/hero/Hero";
import HowICanHelp from "@/sections/howicanhelp/Howicanhelp";
import NaMidia from "@/sections/namidia/NaMidia";

export default async function HomePage() {
  return (
    <div>
      <Hero />
      <HowICanHelp />
      <NaMidia />
    </div>
  );
}
