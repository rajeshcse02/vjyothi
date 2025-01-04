import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const ContactUsPage = () => {
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
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center mb-12">
          {/* <div className="md:w-1/2 md:mr-8 mb-6 md:mb-0">
            <img
              src="https://www.example.com/contact-image.jpg" // Insert your image URL here
              alt="Contact Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div> */}
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              We'd love to hear from you! Whether you have a question about an
              order, a product inquiry, or just want to say hello, feel free to
              get in touch with us using the contact information below.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Contact Information
            </h2>
            <p className="text-lg mb-2">
              <span className="text-pink-500 font-bold">Email:</span>{" "}
              <a
                href="mailto:vjyothi4989@gmail.com"
                className="text-blue-600 hover:underline"
              >
                vjyothi4989@gmail.com
              </a>
            </p>
            <p className="text-lg mb-2">
              <span className="text-pink-500 font-bold">Phone:</span>{" "}
              <a
                href="tel:+917358879434"
                className="text-blue-600 hover:underline"
              >
                7358879434
              </a>
              <span> / </span>
              <a
                href="tel:+919894520688"
                className="text-blue-600 hover:underline"
              >
                9894520688
              </a>
              <span> / </span>
              <a
                href="tel:+919677979434"
                className="text-blue-600 hover:underline"
              >
                9677979434
              </a>
            </p>
            <p className="text-lg mb-6">
              Our customer service team is available to assist you Monday
              through Friday, from 9:00 AM to 5:00 PM.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Office</h2>
            <p className="text-lg">
              Feel free to drop by our physical store during our business hours
              for an in-person shopping experience! Our store address is:
            </p>
            <p className="text-lg mb-6">
              <span className="text-rose-800 font-bold">
                V.JYOTHI 100% HANDLOOM KANCHI COTTON SAREES
              </span>
              ,
              <br />
              No: 116, Pillayar Koil Street,
              <br />
              Kosavanpettai-601101
              <br />
              Ponneri, Thiruvallur
            </p>
            <p className="text-lg">
              We look forward to hearing from you and assisting you with your
              needs!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUsPage;
