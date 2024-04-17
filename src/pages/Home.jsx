import React from "react";
import Main from "../components/home_components/Main";
import Hero from "../components/home_components/Hero";
import Services from "../components/home_components/Services";
import HowItWorks from "../components/home_components/HowItWorks";
import Testimonials from "../components/home_components/Testimonials";
import FAQ from "../components/home_components/FAQ";
import Contact from "../components/home_components/Contact";
const Home = () => {
  return (
    <div>
      <Hero />
      <Main />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
