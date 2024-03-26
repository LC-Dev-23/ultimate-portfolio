import AboutMeSection from "@/components/layout/home/AboutSection";
import HeroSection from "@/components/layout/home/HeroSection";
import MyExpertise from "@/components/layout/home/MyExpertise";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <MyExpertise/>
    </main>
  );
}
