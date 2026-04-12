import About from "@/components/web/About";
import Footer from "@/components/web/Footer";
import GetInTouch from "@/components/web/GetInTouch";
import Hero from "@/components/web/Hero";
import Navbar from "@/components/web/Navbar";
import Projects from "@/components/web/Projects";
import Qualification from "@/components/web/Qualification";
import Skills from "@/components/web/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="w-full bg-white dark:bg-black sm:items-start">
          <Hero />
          <About />
          <Skills />
          <Qualification />
          <Projects />
          <GetInTouch />
          <Footer />
        </main>
      </div>
    </>
  );
}
