
import { Hero } from "./components/hero";
import About from "./about/page";
import Services from "./components/services";
import Ministries from "./components/ministries";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="bg-[#FAFAFA] px-2 sm:px-0">
      <Hero />
      <About/>
      <Services/>
      <Ministries/>
      <Contact/>
    </main>
  );
}
