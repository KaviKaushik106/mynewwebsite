import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CounselingServices from "../components/CounselingServices";
import About from "../components/About";
import Support from "../components/Support";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CounselingServices />
      <About />
      <Support />
      <Footer />
    </div>
  );
};

export default Index;
