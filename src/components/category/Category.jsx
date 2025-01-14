import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';

function Category() {
  const context = useContext(myContext);
  const { mode, product } = context;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch unique categories from Firebase
    const fetchCategories = async () => {
      try {
        const uniqueCategories = new Set();
        product.forEach((doc) => {
          if (doc.category) {
            uniqueCategories.add(doc.category.toLowerCase());
          }
        });
        setCategories(Array.from(uniqueCategories));
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [product]);

  const toSentenceCase = (str) => {
    return str.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
  };

  const formatCategory = (str) => {
    return str
      .split('_') // Split the string by underscores
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  // Render component JSX
  return (
    <div>
      <section className="text-gray-600 body-font fade-down">
        <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Categories
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {categories.map((category, index) => {
              const categoryProduct = product.find((prod) => prod.category.toLowerCase() === category.toLowerCase());

              return (
                <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full transition-opacity duration-300 ease-in-out hover:opacity-90">
                  <Link to={`category/${category}`}>
                    <div
                      className=" bg-gray-100 rounded-lg overflow-hidden relative"
                      style={{
                        backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                        color: mode === 'dark' ? 'white' : '',
                      }}
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={categoryProduct.imageUrl}
                          alt="Category"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-black opacity-50">
                        <h2
                          className="text-3xl font-bold text-gray-900 text-center"
                          style={{ color: mode === 'dark' ? 'white' : 'white' }}
                        >
                          {formatCategory(category)}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Category;
