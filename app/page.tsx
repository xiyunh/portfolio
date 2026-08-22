import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Toolbox from "@/components/Toolbox";
import ProjectsMarquee from "@/components/ProjectsMarquee";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Toolbox />
      <ProjectsMarquee />
      <Contact />
    </>
  );
}
