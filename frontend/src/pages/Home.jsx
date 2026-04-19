import HeroSection from "../components/home/HeroSection";
import ImpactCard from "../components/home/ImpactCard";
import VideoSection from "../components/home/VideoSection";
import YouthAmbassador from "../components/home/YouthAmbassador";
import SponsorSection from "../components/home/SponsorSection";
import StoriesSection from "../components/home/StoriesSection";
import AboutSection from "../components/home/AboutSection";
import SocialSection from "../components/home/SocialSection";
import FoundationSection from "../components/home/FoundationSection";

export default function Home() {
  return (
<>
  <HeroSection />
  <ImpactCard />
  <AboutSection />
  <StoriesSection />
  <VideoSection />
  <YouthAmbassador />
  <SponsorSection />
  <SocialSection />
  <FoundationSection />
</>
  );
}