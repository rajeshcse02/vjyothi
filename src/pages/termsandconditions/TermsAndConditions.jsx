import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const TermsAndConditionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const context = useContext(myContext);
  const { mode } = context;

  return (
    <Layout>
      <div className="container mx-auto py-10 px-5">
        <h1
          className="text-3xl md:text-4xl font-semibold mb-8 text-center"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Terms and Conditions
        </h1>
        <div
          className="text-lg space-y-6"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          <p>
            Welcome to V Jyothi, an e-commerce platform offering exquisite
            handloom crafted sarees. By accessing or using our website, you agree
            to comply with and be bound by the following terms and conditions.
            Please read these carefully before making a purchase.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">1. Authenticity of Handloom Crafted Sarees</h2>
          <p>
            We take pride in offering handloom crafted sarees sourced directly
            from skilled weavers. Each saree is a unique piece of art, woven with
            traditional techniques. We guarantee the authenticity and quality of
            our products, ensuring a genuine handloom experience for our customers.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">2. Sustainable Practices and Fair Trade</h2>
          <p>
            At V Jyothi, we are committed to promoting sustainable practices and
            supporting fair trade. We work closely with our weavers to ensure
            fair wages and ethical working conditions. By purchasing from us, you
            contribute to the livelihood of artisans and the preservation of
            traditional crafts.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">3. Returns and Exchanges</h2>
          <p>
            We want you to be completely satisfied with your purchase. If, for
            any reason, you are not happy with your saree, you may return it for
            a full refund or exchange within 10 days of delivery. Please refer
            to our Cancellation and refund Policy for detailed instructions on returns and
            exchanges.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">4. Privacy and Security</h2>
          <p>
            Protecting your privacy and ensuring the security of your personal
            information is our top priority. We use industry-standard encryption
            technology to safeguard your data and adhere to strict privacy
            policies. Your information will never be shared with third parties
            without your consent.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">5. Governing Law</h2>
          <p>
            These terms and conditions are governed by the laws of India. Any
            disputes arising from the use of our website shall be subject to the
            exclusive jurisdiction of the courts in that jurisdiction.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p>
            If you have any questions or concerns about our terms and conditions,
            please don't hesitate to contact us at{" "}
            <a
              href="mailto:vjyothi4989@gmail.com"
              className="text-blue-600 hover:underline"
            >
              vjyothi4989@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditionsPage;
