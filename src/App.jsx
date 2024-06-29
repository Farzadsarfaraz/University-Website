import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Programs from "./Component/Programms/Programms";
import Title from "./Component/title/Title";
import About from "./Component/About/About";
import Campus from "./Component/Campus/Campus";
import Testimonial from "./Component/Testimonial/Testimonial";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our program" title="What we offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonial" title="What Student says" />
        <Testimonial />
        <Title subTitle="Contact us" title="Get in touch" />
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
