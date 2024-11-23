import Acheivements from "./components/Acheivements/Acheivements";
import Courses from "./components/Courses/Courses";
import CourseTabs from "./components/CourseTabs/CourseTabs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import SponsorSection from "./components/SponsorSection/SponsorSection";
import Team from "./components/Team/Team";
import TestimonialCard from "./components/TestimonialSection/TestimonialSection";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <SponsorSection/> 
    <Courses/>
    <Acheivements/>
    <CourseTabs/>
    <Team/>
    <TestimonialCard/>
    <Footer/>
     </>
  );
}
