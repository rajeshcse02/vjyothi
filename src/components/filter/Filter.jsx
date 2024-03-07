import React, { useContext, useState, useEffect, useRef } from "react";
import myContext from "../../context/data/myContext";

function Filter() {
  const context = useContext(myContext);
  const {
    mode,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
    product,
  } = context;

  const filtersRef = useRef(null); // Ref to hold the reference of filters container

  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Function to handle clicks outside filters
    function handleClickOutside(event) {
      if (filtersRef.current && !filtersRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    }

    // Adding event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Removing event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const resetFilters = () => {
    setSearchkey("");
    setFilterType("");
    setFilterPrice("");
  };

  return (
    <div className="">
      <div className="container mx-auto px-4 mt-5">
        <div
          className="p-4 rounded-lg shadow border"
          style={{
            backgroundColor: mode === "dark" ? "#1f2937" : "",
            color: mode === "dark" ? "white" : "black",
          }}
        >
          <div className="relative">
            <input
              type="text"
              name="searchkey"
              id="searchkey"
              value={searchkey}
              onChange={(e) => setSearchkey(e.target.value)}
              placeholder="Search here"
              className="px-8 py-4 w-full rounded-2xl border  outline-none text-sm text-red-900"
              style={{
                backgroundColor: mode === "dark" ? "#374151" : "",
                color: mode === "dark" ? "white" : "",
              }}
              onClick={toggleFilters}
            />
          </div>
          <div
            ref={filtersRef} // Assigning ref to filters container
            className={`${
              showFilters ? "block" : "hidden"
            } transition-all duration-500`}
          >
            <div className="flex items-center justify-between mt-4">
              <p className="font-medium">Filters</p>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
              >
                Reset Filter
              </button>
            </div>
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-2 w-full rounded-md bg-gray-100 border border-gray-200 outline-none focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  style={{
                    backgroundColor: mode === "dark" ? "#374151" : "",
                    color: mode === "dark" ? "white" : "black",
                  }}
                >
                  <option value="">All Categories</option>
                  {[...new Set(product.map((item) => item.category))].map(
                    (category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    )
                  )}
                </select>
                <select
                  value={filterPrice}
                  onChange={(e) => setFilterPrice(e.target.value)}
                  className="px-4 py-2 w-full rounded-md bg-gray-100 border border-gray-200 outline-none focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                  style={{
                    backgroundColor: mode === "dark" ? "#374151" : "",
                    color: mode === "dark" ? "white" : "black",
                  }}
                >
                  <option value="">All Prices</option>
                  {[...new Set(product.map((item) => item.price))].map(
                    (price, index) => (
                      <option key={index} value={price}>
                        {price}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
