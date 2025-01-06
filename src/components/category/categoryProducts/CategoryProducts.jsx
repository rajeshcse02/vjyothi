import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from '../../layout/Layout'
import myContext from "../../../context/data/myContext";
import "../categoryProducts/categoryProducts.css";
import { Link } from "react-router-dom";

function CategoryProducts() {
  const context = useContext(myContext);
  const { mode, product, searchkey, filterPrice } = context;
  const { loading, setLoading } = context;
  const location = useLocation();
  const category = location.pathname.split("/")[2]; 
  // console.log(category)
  

  // Effect to scroll to the top of the window when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to calculate discounted price based on the original price and discount percentage
  const calculateDiscountedPrice = (price, discountPercentage) => {
    const discountAmount = (price * discountPercentage) / 100;
    return price - discountAmount;
  };

  const formatCategory = (str) => {
    return str
      .split('_') // Split the string by underscores
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  // Render component JSX
  return (
    <Layout>
      {/* Display the filter component with fade-down animation */}
      <div className="fade-down">
        {/* <Filter /> */}
      </div>

      {/* Main section for displaying products with fade-down animation */}
      {loading ? (
        <div className="spinner">
          <div className="inner-spin"></div>
        </div>
      ) : (
        <section className="text-gray-600 body-font fade-down">
          <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            {formatCategory(category)}
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>
            <div className="flex flex-wrap -m-4 justify-center">
              {product
                .filter(
                  (obj) =>
                    !category ||
                    obj.category
                      .toLowerCase()
                      .includes(category.toLowerCase())
                )
                .filter((obj) =>
                  obj.title.toLowerCase().includes(searchkey.toLowerCase())
                )
                .filter((obj) => !filterPrice || obj.price.includes(filterPrice))
                .reverse()
                .map((item, index) => {
                  const { title, price, imageUrl, id, discountedPrice } = item;
                  const discountPrice = calculateDiscountedPrice(
                    price,
                    discountedPrice
                  );
                  return (
                    
                    <div
                      key={index}
                      className="p-4 md:w-1/4 w-1/2 drop-shadow-lg"
                    >
                      <div
                        className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                        style={{
                          backgroundColor:
                            mode === "dark" ? "rgb(46 49 55)" : "",
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-md shadow-lg z-10">
          10% Offer
        </div>
                        <div className="flex justify-center cursor-pointer">
                        <Link to={`/productinfo/${item.id}`}>

                          <img
                            className="rounded-2xl object-cover object-top p-2 h-80 w-80 hover:scale-110 transition-scale-110 duration-300 ease-in-out  max-h-48 md:max-h-80"
                            src={imageUrl}
                            alt="product"
                          /></Link>
                        </div>
                        <div className="p-5 border-t-2">
                          <h2
                            className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"
                            style={{ color: mode === "dark" ? "gray" : "" }}
                          >
                            V Jyothi
                          </h2>
                          <h1
                            className="title-font text-base lg:text-xl font-medium text-gray-900 mb-3"
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {title}
                          </h1>
                          <p
                            className="leading-relaxed mb-3 font-bold text-xl text-pink-500"
                            style={{ color: mode === "dark" ? "rose" : "" }}
                          >
                            ₹{discountPrice}{" "}
                            <span
                              className="line-through text-gray-500 text-lg ml-1 font-normal"
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              ₹{price}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

// Export the component as the default export
export default CategoryProducts;
