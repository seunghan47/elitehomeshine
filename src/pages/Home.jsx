import React from "react";
import AboutUs from "../components/home_components/AboutUs";
import Hero from "../components/home_components/Hero";
import Services from "../components/home_components/Services";
import OurTeam from "../components/home_components/OurTeam";
import Testimonials from "../components/home_components/Testimonials";
import FAQ from "../components/home_components/FAQ";
import Contact from "../components/home_components/Contact";
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <OurTeam />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
