import React, { useContext, useState, useEffect, Fragment } from "react";
import myContext from "../../context/data/myContext";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { getDocs, query, where, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
import { fireDB } from "../../fireabase/FirebaseConfig";
import Logo from "../../assets/images/vjyothipng3.png";


function Navbar() {
  const context = useContext(myContext);
  const { mode, toggleMode, product } = context;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  // console.log(user.user.id)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Retrieve email from localStorage
        const userEmail = user?.user?.email;
        if (!userEmail) {
          setError("Email not found in localStorage.");
          return;
        }

        // Query Firestore to find the user document with the matching email
        const q = query(
          collection(fireDB, "users"),
          where("email", "==", userEmail)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          setError("User not found with the provided email.");
          return;
        }

        // Retrieve the user's name from the first document in the query result
        querySnapshot.forEach((doc) => {
          setName(doc.data().name);
          setEmail(userEmail);
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Error fetching user data.");
      }
    };

    fetchUserData();
  }, []);

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
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [product]);

  const toSentenceCase = (str) => {
    return str.replace(
      /\w\S*/g,
      (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    );
  };

  const formatCategory = (str) => {
    return str
      .split('_') // Split the string by underscores
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  // State to manage dropdown visibility
  const [showCategories, setShowCategories] = useState(false);

  const handleMouseLeave = () => {
    setShowCategories(false);
  };

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/";
  };
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-40 sticky top-0">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-50 pb-5 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only ">Close menu</span>
                    <RxCross2
                      color="black"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    />
                  </button>
                </div>

                <div className="mt-10 ml-4 text-lg mb-5 ">Hi, {name}</div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root mb-5">
                    <Link
                      to={"/weavers"}
                      className="text-lg font-bold text-pink-700 "
                      style={{ color: mode === "dark" ? "rose" : "" }}
                    >
                      Our Weavers
                    </Link>
                  </div>
                  <div className="flow-root mb-5">
                    <Link
                      to={"/allproducts"}
                      className=" font-medium text-gray-900 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      All Products
                    </Link>
                  </div>
                  <div className="flow-root mb-5">
                    <button
                      onClick={() => setShowCategories(!showCategories)}
                      className="font-medium text-gray-900 focus:outline-none"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Categories
                    </button>
                    {showCategories && (
                      <div className="transition-all duration-300 ease-in-out overflow-hidden">
                        {categories.map((category, index) => (
                          <Link
                            key={index}
                            to={`/category/${category.toLowerCase()}`}
                            className="block font-medium text-gray-900 mt-3 ml-6"
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            - {formatCategory(category)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flow-root mb-5">
                    <Link
                      to={"/about"}
                      className=" font-medium text-gray-900 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      About Us
                    </Link>
                  </div>
                  <div className="flow-root mb-5">
                    <Link
                      to={"/contact"}
                      className=" font-medium text-gray-900 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Contact
                    </Link>
                  </div>

                  {user ? (
                    <div className="flow-root">
                      <Link
                        to={"/favorites"}
                        style={{ color: mode === "dark" ? "white" : "" }}
                        className="-m-2 block p-2 font-medium text-gray-900 mb-3"
                      >
                        Favourites
                      </Link>
                      <Link
                        to={"/order"}
                        style={{ color: mode === "dark" ? "white" : "" }}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Order
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  {user?.user?.email === "vjyothi4989@gmail.com" ? (
                    <div className="flow-root">
                      <Link
                        to={"/dashboard"}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Admin
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <div className="flow-root">
                      <a
                        href="/profile"
                        className="-m-2 block p-2 font-bold text-lg pb-4 text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Profile
                      </a>
                      <a
                        onClick={logout}
                        className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <Link
                        to={"/signup"}
                        className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Signup
                      </Link>
                    </div>
                  )}
                  {/* <div className="flow-root">
                    <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                        alt="Dan_Abromov" />                                        </Link>
                  </div> */}
                </div>

                {/* <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                    <span className="sr-only">change currency</span>
                  </a>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        {/* <p className="flex h-10 items-center justify-center bg-pink-500 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" 
        style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over ₹300
        </p> */}

        <nav
          aria-label="Top"
          className="ng-white px-4 sm:px-6 lg:px-8 shadow-xl "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md p-2 text-black lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex">
                    {/* <h1
                      className=" text-2xl font-bold text-rose-700 md:px-2 rounded md:tracking-[.2em]"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      V JYOTHI
                    </h1> */}
                    <img
                      className="md:w-1/4 w-1/2 md:ml-10"
                      src={Logo}
                      alt=""
                    />
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/weavers"}
                    className="text-lg font-bold text-pink-700 hover:text-pink-500"
                    style={{ color: mode === "dark" ? "rose" : "" }}
                  >
                    Our Weavers
                  </Link>
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  <div className="relative ">
                    <div
                      className="text-sm font-medium text-gray-700 cursor-pointer"
                      onMouseEnter={() => setShowCategories(!showCategories)}
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Categories
                    </div>
                    {/* Dropdown content */}
                    {showCategories && (
                      <div
                        className="absolute top-full left-0 mt-1 bg-white bg-opacity-80 backdrop-blur-2xl rounded-md shadow-lg min-w-48"
                        onMouseLeave={handleMouseLeave}
                      >
                        {categories.map((category, index) => (
                          <Link
                            key={index}
                            to={`/category/${category.toLowerCase()}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {formatCategory(category)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {user ? (
                    <>
                      {" "}
                      <Link
                        to={"/order"}
                        className="text-sm font-medium text-gray-700 "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Order
                      </Link>
                      <Link
                        to="/favorites"
                        className="text-sm font-medium text-gray-700 ml-4"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Favourites
                      </Link>{" "}
                    </>
                  ) : (
                    <Link
                      to={"/signup"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Signup
                    </Link>
                  )}

                  {user?.user?.email === "vjyothi4989@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </Link>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <>
                      <a
                        onClick={logout}
                        className="text-sm font-medium text-gray-700 cursor-pointer  "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Logout
                      </a>
                      <a href="/profile">
                        <img
                          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                          alt=""
                          className="block h-auto w-8 flex-shrink-0 rounded-full"
                        />
                      </a>
                    </>
                  ) : (
                    ""
                  )}
                </div>

                {/* <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-sm font-medium"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                  </a>
                </div> */}
                {/* <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYGiXMNjodwNxXP6HpmgiKrxktEHf_QqpXUQ&usqp=CAU"
                      alt="Dan_Abromov"
                    />
                  </a>
                </div> */}

                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
