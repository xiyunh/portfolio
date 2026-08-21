import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import ProjectsMarquee from "@/components/ProjectsMarquee";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <ProjectsMarquee />
      <Contact />
    </>
  );
}
