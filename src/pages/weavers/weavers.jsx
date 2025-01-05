import React, { useEffect,useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import "../weavers/weavers.css";
const Weaver = () => {
    const context = useContext(myContext);
    const {mode} = context;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen" style={{ color: mode === "dark" ? "white" : "" }}>
        <main className="container mx-auto py-8">
          {/* Handlooms Section */}
          <section className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 order-2 md:order-1 animate-fadeInRight">
              <h2 className="text-2xl font-bold mb-4 ml-4 mr-4">
                What are Handlooms?
              </h2>
              <p className="text-lg ml-4 mr-4">
                Handlooms are traditional weaving devices used to make fabrics
                without the use of electricity. They play a significant role in
                the cultural heritage of India and Tamil Nadu, producing a wide
                variety of textiles, including sarees, dhotis, and scarves.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 p-10 animate-fadeInLeft">
              <img
                src="https://i.postimg.cc/MGQWdh9J/fig1.jpg"
                alt="Handlooms"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </section>

          {/* Weavers Section */}
          <section className="mt-8 flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 animate-fadeInLeft p-10 animate-fadeInLeft">
              <img
                src="https://i.postimg.cc/d3SpM00H/fig4.jpg"
                alt="Weavers"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 animate-fadeInRight">
              <h2 className="text-2xl font-bold mb-4 ml-4 mr-4 ">Weavers</h2>
              <p className="text-lg ml-4 mr-4">
                Weavers are skilled artisans who create beautiful textiles using
                handlooms. They often inherit their weaving skills from previous
                generations and play a crucial role in preserving traditional
                craftsmanship. However, many weavers face challenges such as
                lack of access to resources, low wages, and competition from
                mechanized industries.
              </p>
            </div>
          </section>

          {/* Difficulties Section */}
          <section className="mt-8 flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 order-2 md:order-1 animate-fadeInLeft">
              <h2 className="text-2xl font-bold mb-4 ml-4 mr-4">
                Challenges Faced by Weavers
              </h2>
              <p className="text-lg ml-4 mr-4">
                Despite their cultural significance, many weavers face numerous
                challenges in today's world. These include competition from
                mass-produced textiles, lack of access to credit and markets,
                and exploitation by middlemen. Additionally, natural disasters
                and fluctuations in raw material prices further exacerbate their
                struggles.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2  p-10">
              <img
                src="https://i.postimg.cc/CL3rbXnq/fig6.jpg"
                alt="Difficulties"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </section>

          {/* History Section */}
          <section className="mt-8 flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 animate-fadeInLeft p-10">
              <img
                src="https://i.postimg.cc/BbdpcPb0/fig7.jpg"
                alt="History"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 ">
              <h2 className="text-2xl font-bold mb-4 ml-4 mr-4">
                History of Handlooms
              </h2>
              <p className="text-lg ml-4 mr-4">
                The history of weaving in India dates back thousands of years,
                with evidence of cotton cultivation and fabric weaving found in
                ancient archaeological sites. Tamil Nadu has a rich weaving
                tradition, with regions like Kanchipuram and Madurai renowned
                for their silk sarees and cotton textiles.
              </p>
            </div>
          </section>

          {/* Current Status Section */}
          <section className="mt-8 flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 order-2 md:order-1 animate-fadeInLeft">
              <h2 className="text-2xl font-bold mb-4 ml-4 mr-4">
                Current Status
              </h2>
              <p className="text-lg ml-4 mr-4">
                The current status of weavers in India, including Tamil Nadu,
                varies widely. While some have been able to adapt to changing
                market demands and technology, many others continue to face
                economic hardship. Efforts are being made by governments, NGOs,
                and the private sector to provide support through initiatives
                such as skill development programs, access to microfinance, and
                marketing assistance.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2  p-10">
              <img
                src="https://i.postimg.cc/SQ5gp3rv/photo1.jpg"
                alt="Current Status"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default Weaver;
