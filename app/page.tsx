import Hero from "@/components/layout/home/Hero";
import AboutMeSection from "@/components/layout/home/AboutSection";
import MyExpertise from "@/components/layout/home/MyExpertise";
import CodingArsenal from "@/components/layout/home/CodingArsenal";

export default function Home() {
  return (
    <main className="min-w-[20rem]">
      <Hero />
      <AboutMeSection />
      <MyExpertise />
      <CodingArsenal />
    </main>
  );
}
