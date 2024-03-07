import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const ShippingAndRefundPage = () => {
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
          Shipping and Refund Policy
        </h1>
        <div
          className="text-lg space-y-4"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Shipping Policy</h2>
          <p>
            We offer free shipping on all orders within the country. Your order
            will be processed within 1-2 business days and shipped via
            standard shipping, which typically takes 5-7 business days for
            delivery. Once your order has been shipped, you will receive a
            shipping confirmation email with tracking information.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">Refund Policy</h2>
          <p>
            We want you to be completely satisfied with your purchase. If, for
            any reason, you are not happy with your order, you may return it
            for a full refund within 10 days of receipt. To initiate a return,
            please contact our customer service team with your order details.
            Please note that returned items must be in their original condition
            and packaging to be eligible for a refund.
          </p>
          <p>
            Once your return is received and inspected, we will notify you of
            the approval or rejection of your refund. If approved, your refund
            will be processed, and a credit will automatically be applied to
            your original method of payment within 7-10 business days.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about our Shipping and Refund Policy, please
            contact us at{" "}
            <a
              href="mailto:vjyothi4989@gmail.com"
              className="text-blue-600 hover:underline"
            >
              vjyothi4989@gmail.com
            </a>
            .
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
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingAndRefundPage;
