import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const PrivacyPolicyPage = () => {
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
          Privacy Policy
        </h1>
        <div
          className="text-lg space-y-4"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          <p>
            At V Jyothi, we respect your privacy and are committed to protecting
            your personal information. We want you to feel confident when using
            our website, and we assure you that we do not collect any confidential
            information about you without your consent.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">1. Collection of Information</h2>
          <p>
            When you visit our website, we automatically collect certain
            information about your device, such as your IP address and browser
            type, for analytical purposes. This information helps us understand
            how our website is used and how we can improve the user experience.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">2. Payment Information</h2>
          <p>
            All payment information, including credit or debit card details, are
            processed securely through a third-party payment gateway. We do not
            store any payment information on our servers, ensuring that your
            financial data remains safe and protected.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">3. Use of Information</h2>
          <p>
            Any personal information you provide to us is used solely for the
            purpose of fulfilling your orders and providing you with the best
            possible shopping experience. We do not share your private information
            with any third parties, and we take all necessary precautions to
            ensure that your data is secure.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">4. Security Measures</h2>
          <p>
            We employ industry-standard security measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction. Your privacy and security are of utmost importance to us,
            and we continuously review and update our security practices to ensure
            that your data remains safe.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">5. Updates to Privacy Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy from time to time
            to reflect changes in our practices or legal requirements. We encourage
            you to review this Privacy Policy periodically for any updates.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy or our
            privacy practices, please feel free to contact us at{" "}
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

export default PrivacyPolicyPage;
