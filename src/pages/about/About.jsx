import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <Layout>
      <div
        className="container mx-auto py-10 px-5"
        style={{ color: mode === "dark" ? "white" : "" }}
      >
        <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
          About Us
        </h1>
        <div
          className="flex flex-col md:flex-row items-center justify-center mb-12"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          {/* <div className="md:w-1/2 md:mr-8 mb-6 md:mb-0">
            <img
              src="https://www.example.com/about-image1.jpg" // Insert your image URL here
              alt="About Us"
              className="rounded-lg shadow-lg mb-4"
            />
            <img
              src="https://www.example.com/about-image2.jpg" // Insert your image URL here
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div> */}
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              Welcome to{" "}
              <span className="font-bold text-pink-500">V Jyothi</span>! We have
              been in the sarees business for many years, specializing in 100%
              cotton silk sarees crafted using traditional handloom techniques.
              Our commitment to preserving the authenticity of silk sarees has
              made us stand out in the industry.
            </p>
            <p className="text-lg mb-6">
              At <span className="font-bold text-pink-500">V Jyothi</span>, we
              take pride in offering sarees that are made with utmost care and
              dedication. Each saree is meticulously woven by skilled artisans,
              ensuring the highest quality and authenticity.
            </p>
            <p className="text-lg mb-6">
              What sets our sarees apart is the use of original handloom methods
              to produce pure silk fabric. Unlike other methods, handloom
              weaving results in sarees that are luxurious, durable, and have a
              unique texture that cannot be replicated.
            </p>
            <p className="text-lg mb-6">
              Whether you are looking for a timeless traditional saree or a
              modern design with a touch of elegance, we have a wide range of
              options to suit every taste and occasion.
            </p>
            <p className="text-lg">
              Thank you for choosing{" "}
              <span className="font-bold text-pink-500">V Jyothi </span>
              for your saree needs. We are dedicated to providing you with the
              finest quality sarees and excellent customer service.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
