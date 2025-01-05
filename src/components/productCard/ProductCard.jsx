import React, { useContext, useEffect } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function ProductCard({ item, mode }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Added to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const calculateDiscountedPrice = (price, discountPercentage) => {
    const discountAmount = (price * discountPercentage) / 100;
    return price - discountAmount;
  };

  // Check if item is defined before accessing its properties
  if (!item) {
    return null; // or handle the case where item is undefined
  }

  const { title, price, imageUrl, discountedPrice } = item;
  const discountPrice = calculateDiscountedPrice(price, discountedPrice);

  return (
    <div className="p-4 md:w-1/4 w-1/2 drop-shadow-lg">
      <div
        className="h-full border hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
        style={{
          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        {/* Overlay for "10% Offer" */}
        {/* <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-md shadow-lg z-10">
          10% Offer
        </div> */}

        {/* Product Image */}
        <div className="flex justify-center cursor-pointer">
          <Link to={`/productinfo/${item.id}`}>
            <img
              className="rounded-2xl object-cover object-top w-80 h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out max-h-48 md:max-h-80"
              src={imageUrl}
              alt="product"
            />
          </Link>
        </div>

        {/* Product Details */}
        <div className="p-5 border-t">
          <h2
            className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"
            style={{ color: mode === "dark" ? "gray" : "" }}
          >
            V Jyothi
          </h2>
          <h1
            className="title-font text-s sm:text-xl font-medium text-gray-900 mb-3"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            {title}
          </h1>
          <p
            className="leading-relaxed mb-3 font-bold text-s sm:text-xl text-pink-500"
            style={{ color: mode === "dark" ? "rose" : "" }}
          >
            ₹{discountPrice}{" "}
            <span
              className="line-through text-gray-500 text-s sm:text-lg ml-1 font-normal"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              ₹{price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Product() {
  const context = useContext(myContext);
  const { mode, product } = context;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Our Latest Collection
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        {/* Render Product Cards */}
        <div className="flex flex-wrap -m-4">
          {product
            .filter((obj) => obj.title.toLowerCase())
            .reverse()
            .slice(0, 4)
            .map((item, index) => (
              <ProductCard key={index} item={item} mode={mode} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
