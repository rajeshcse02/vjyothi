import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";

function AddProduct() {
  const context = useContext(myContext);
  const { products, setProducts, addProduct } = context;
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Add Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              value={products.title}
              onChange={(e) =>
                setProducts({ ...products, title: e.target.value })
              }
              name="title"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.price}
              onChange={(e) =>
                setProducts({ ...products, price: e.target.value })
              }
              name="price"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.discountedPrice}
              onChange={(e) =>
                setProducts({ ...products, discountedPrice: e.target.value })
              }
              name="discountPercentage"
              className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Discount Percentage"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.imageUrl}
              onChange={(e) =>
                setProducts({ ...products, imageUrl: e.target.value })
              }
              name="imageurl"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl 1"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.imageUrl1}
              onChange={(e) =>
                setProducts({ ...products, imageUrl1: e.target.value })
              }
              name="imageurl1"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl 2"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.imageUrl2}
              onChange={(e) =>
                setProducts({ ...products, imageUrl2: e.target.value })
              }
              name="imageurl2"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl 3"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.imageUrl3}
              onChange={(e) =>
                setProducts({ ...products, imageUrl3: e.target.value })
              }
              name="imageurl3"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl 4"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.category}
              onChange={(e) =>
                setProducts({ ...products, category: e.target.value })
              }
              name="category"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <input
              type="number"
              value={products.stocks}
              onChange={(e) =>
                setProducts({ ...products, stocks: e.target.value })
              }
              name="stocks"
              className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Number of Stocks"
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              name="title"
              value={products.description}
              onChange={(e) =>
                setProducts({ ...products, description: e.target.value })
              }
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product desc"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={addProduct}
              className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
