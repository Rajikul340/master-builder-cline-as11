import React, { useRef } from "react";
import Banner from "../Banner/Banner";
import Success from "../Success/Success";
import TeamSection from "../TeamSection/TeamSection";
import WhyChose from "../WhyChose/WhyChose";
import Showecase from "../Showecase/Showecase";
import ReviewSlider from "../ClientReview/ClientReview";
import FaqSection from "../Faqsection/Faqsection";
import QualifiedEngineer from "../QualifiedEngineer/QualifiedEngineer";
import ServiceSection from "../ServiceSection/ServiceSection";
import { useInView } from "framer-motion";
import ContactSection from "../Cantact/ContactSection";
import ContactForm from "../Cantact/ContactForm";

const Home = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (

    <section>
      <Banner></Banner>
      <ServiceSection/>
      <WhyChose />
      <TeamSection></TeamSection>
      <Showecase />
      <Success></Success>
      <QualifiedEngineer />
       <ContactSection/>
      <ReviewSlider />
      <FaqSection />
      <ContactForm/>
    </section>
  );
};

export default Home;
