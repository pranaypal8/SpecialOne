import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const images = [
  "https://theformalclub.in/cdn/shop/files/Fulkl-SLEVVEESSS_74f73ad8-8779-4f5c-9d89-c70fb07ff625.jpg?v=1721209695",
  "https://theformalclub.in/cdn/shop/files/Stripe-SHIERTSSS.jpg?v=1721206235",
  "https://theformalclub.in/cdn/shop/files/Timeless-Essentialsdesk.jpg?v=1740816976&width=3600",
  "https://klemens.in/cdn/shop/files/FabrIQ_Shirts.jpg?v=1734765108&width=1500",
  "https://theformalclub.in/cdn/shop/files/NEW-COLLECTION-BANNER-23_2.jpg?v=1721304243&width=3600",
];

const products = [
  {
    id: 1,
    title: "Peter England Men's",
    desc: "Solid Formal Shirt",
    price: 245,
    brand: "Peter England",
    image:
      "https://imagescdn.louisphilippe.com/img/app/product/9/916657-16341724.jpg?auto=format&w=390",
    colors: ["#000", "#d9e5e2", "#97c7d1", "#d5d8d2"],
    tag: "New",
  },
  {
    id: 2,
    title: "Westside",
    desc: "WES Formals",
    price: 199,
    brand: "Westside",
    image:
      "https://imagescdn.louisphilippe.com/img/app/product/9/928912-13792844.jpg?auto=format&w=390",
    colors: ["#a1a946"],
  },
  {
    id: 3,
    title: "The Bear House",
    desc: "Men's Formal Shirt",
    price: 199,
    brand: "The Bear House",
    image:
      "https://imagescdn.louisphilippe.com/img/app/product/3/39735448-16770773.jpg?auto=format&w=390",
    colors: ["#d77766", "#ba9c58", "#a75f33"],
  },
  {
    id: 4,
    title: "Peter England Men's",
    desc: "Solid Formal Shirt",
    price: 245,
    brand: "Peter England",
    image:
      "https://imagescdn.louisphilippe.com/img/app/product/3/39638286-13258646.jpg?auto=format&w=390",
    colors: ["#000", "#d9e5e2", "#97c7d1", "#d5d8d2"],
    tag: "New",
  },
  {
    id: 5,
    title: "Louis Philippe",
    desc: "Slim Fit Shirt",
    price: 299,
    brand: "Louis Philippe",
    image:
      "https://imagescdn.louisphilippe.com/img/app/product/3/39706141-14532241.jpg?auto=format&w=390",
    colors: ["#fff", "#d3d3d3"],
  },
  {
    id: 6,
    title: "The Bear House",
    desc: "Men's Formal Shirt",
    price: 199,
    brand: "The Bear House",
    image:
      "https://imagescdn.louisphilippe.com/img/app/product/3/39903446-18971126.jpg?auto=format&w=390",
    colors: ["#e1cfc5", "#444", "#000"],
    tag: "New",
  },
  {
    id: 7,
    title: "Westside",
    desc: "Slim Fit Cotton Shirt",
    price: 225,
    brand: "Westside",
    image:
      "https://imagescdn.louisphilippe.com/img/app/product/3/39703548-19213778.jpg?auto=format&w=390",
    colors: ["#d0dbec", "#b0c4de"],
  },
  {
    id: 8,
    title: "Peter England Men's",
    desc: "Checked Formal Shirt",
    price: 249,
    brand: "Peter England",
    image:
      "https://imagescdn.louisphilippe.com/img/app/product/9/920274-13793708.jpg?auto=format&w=390",
    colors: ["#777", "#fff", "#003366"],
    tag: "New",
  },
  {
    id: 9,
    title: "Louis Philippe",
    desc: "Pure Cotton Shirt",
    price: 285,
    brand: "Louis Philippe",
    image:
      "https://imagescdn.louisphilippe.com/img/app/product/9/930000-13792772.jpg?auto=format&w=390",
    colors: ["#f2f2f2", "#a0a0a0"],
  },
  {
    id: 10,
    title: "The Bear House",
    desc: "Textured Formal Shirt",
    price: 210,
    brand: "The Bear House",
    image:
      "https://imagescdn.louisphilippe.com/img/app/product/9/933967-13792484.jpg?auto=format&w=390",
    colors: ["#f5d1c4", "#c1a18a"],
    tag: "New",
  },
  {
    id: 11,
    title: "Peter England Men's",
    desc: "Striped Formal Shirt",
    price: 230,
    brand: "Peter England",
    image:
      "https://imagescdn.louisphilippe.com/img/app/product/3/39835341-16702709.jpg?auto=format&w=390",
    colors: ["#efefef", "#444", "#222"],
  },
  {
    id: 12,
    title: "Westside",
    desc: "WES Formals",
    price: 199,
    brand: "Westside",
    image:
      "https://imagescdn.louisphilippe.com/img/app/product/8/859007-13787504.jpg?auto=format&w=390",
    colors: ["#bdd4d1", "#b0ccbb"],
    tag: "New",
  },
];

const collection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className="w-full h-[4rem] bg-black text-white px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold font-anurati ml-6 text-2xl tracking-widest">
          SPECIALONE
        </div>
        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 mx-auto text-base font-medium">
          <li className="hover:text-gray-300 cursor-pointer">Shop</li>
          <li className="hover:text-gray-300 cursor-pointer">On Sale</li>
          <li className="hover:text-gray-300 cursor-pointer">New Arrivals</li>
          <li className="hover:text-gray-300 cursor-pointer">Brands</li>
        </ul>
        {/* Search & Login */}
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full w-80 px-4 py-1.5 text-black focus:outline-none"
          />
          <div className="flex items-center space-x-6 font-medium text-white text-lg ml-5">
            <i className="ri-shopping-cart-line hover:text-gray-400 cursor-pointer"></i>
            <i className="ri-heart-line hover:text-gray-400 cursor-pointer"></i>
            <i className="ri-user-line hover:text-gray-400 cursor-pointer"></i>
          </div>
        </div>
      </nav>

      <section className="relative w-full h-[30rem] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${images[current]})` }}
        ></div>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </section>
      <div className="min-h-screen bg-gray-50">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 tracking-wide mb-6 font-Playfair mt-6 after:content-[''] after:block after:w-16 after:h-1 after:bg-black after:mx-auto after:mt-1.5">
        Collection
      </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow w-80 ml-5 "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-fill items-center"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm">{product.title}</h3>
                  {product.tag && (
                    <span className="text-xs text-white bg-black px-2 py-0.5 rounded">
                      {product.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2">{product.desc}</p>
                <p className="font-semibold text-md">${product.price}</p>
                <div className="flex gap-2 mt-2">
                  {product.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default collection;
