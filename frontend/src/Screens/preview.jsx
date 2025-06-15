import React, { useState , useRef } from "react";
import Product from "../../components/product";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "../../components/Footer";

const productImages = [
  "https://imagescdn.louisphilippe.com/img/app/product/3/39625126-13792961.jpg?auto=format&w=390",
  "https://imagescdn.louisphilippe.com/img/app/product/3/39625126-13792962.jpg?auto=format&w=390",
  "https://imagescdn.louisphilippe.com/img/app/product/3/39625126-13792963.jpg?auto=format&w=390",
  "https://imagescdn.louisphilippe.com/img/app/product/3/39625126-13792965.jpg?auto=format&w=390",
  "https://imagescdn.louisphilippe.com/img/app/product/3/39831881-16594509.jpg?auto=format&w=390",
  "https://imagescdn.louisphilippe.com/img/app/product/3/39625126-13792964.jpg?auto=format&w=390",
];

const products = [
    {
      id: 1,
      name: "Men White Classic Fit Solid Full Sleeve Shirt",
      price: "₹1,499",
      originalPrice: "₹2,299",
      color: "White",
      sizes: ["38", "39", "40", "42"],
      img1: "https://imagescdn.louisphilippe.com/img/app/product/9/916657-16341724.jpg?auto=format&w=390",
      img2: "https://imagescdn.louisphilippe.com/img/app/product/9/916657-16341725.jpg?auto=format&w=390",
    },
    {
      id: 2,
      name: "Men White Slim Fit Solid Formal Shirt",
      price: "₹1,399",
      originalPrice: "₹2,099",
      color: "White",
      sizes: ["38", "40", "42"],
      img1: "https://imagescdn.louisphilippe.com/img/app/product/9/928912-13792844.jpg?auto=format&w=390",
      img2: "https://imagescdn.louisphilippe.com/img/app/product/9/916657-16341725.jpg?auto=format&w=390",
    },
    {
      id: 3,
      name: "Men White Cotton Solid Formal Shirt",
      price: "₹1,599",
      originalPrice: "₹2,499",
      color: "White",
      sizes: ["39", "40", "42", "44"],
      img1: "https://imagescdn.louisphilippe.com/img/app/product/3/39735448-16770773.jpg?auto=format&w=390",
      img2: "https://imagescdn.louisphilippe.com/img/app/product/3/39638286-13258647.jpg?auto=format&w=390",
    },
    {
      id: 4,
      name: "Men White Regular Fit Office Shirt",
      price: "₹1,699",
      originalPrice: "₹2,599",
      color: "White",
      sizes: ["38", "40"],
      img1: "https://imagescdn.louisphilippe.com/img/app/product/3/39638286-13258646.jpg?auto=format&w=390",
      img2: "https://imagescdn.louisphilippe.com/img/app/product/3/39638286-13258647.jpg?auto=format&w=390",
    },
    {
      id: 5,
      name: "Men White Classic Fit Solid Full Sleeve Shirt",
      price: "₹1,499",
      originalPrice: "₹2,299",
      color: "White",
      sizes: ["38", "39", "40", "42"],
      img1: "https://imagescdn.louisphilippe.com/img/app/product/9/916657-16341724.jpg?auto=format&w=390",
      img2: "https://imagescdn.louisphilippe.com/img/app/product/9/916657-16341725.jpg?auto=format&w=390",
    },
    {
      id: 6,
      name: "Men White Slim Fit Solid Formal Shirt",
      price: "₹1,399",
      originalPrice: "₹2,099",
      color: "White",
      sizes: ["38", "40", "42"],
      img1: "https://imagescdn.louisphilippe.com/img/app/product/9/928912-13792844.jpg?auto=format&w=390",
      img2: "https://imagescdn.louisphilippe.com/img/app/product/9/916657-16341725.jpg?auto=format&w=390",
    },
    {
      id: 7,
      name: "Men White Cotton Solid Formal Shirt",
      price: "₹1,599",
      originalPrice: "₹2,499",
      color: "White",
      sizes: ["39", "40", "42", "44"],
      img1: "https://imagescdn.louisphilippe.com/img/app/product/3/39735448-16770773.jpg?auto=format&w=390",
      img2: "https://imagescdn.louisphilippe.com/img/app/product/3/39638286-13258647.jpg?auto=format&w=390",
    },
    {
      id: 8,
      name: "Men White Regular Fit Office Shirt",
      price: "₹1,699",
      originalPrice: "₹2,599",
      color: "White",
      sizes: ["38", "40"],
      img1: "https://imagescdn.louisphilippe.com/img/app/product/3/39638286-13258646.jpg?auto=format&w=390",
      img2: "https://imagescdn.louisphilippe.com/img/app/product/3/39638286-13258647.jpg?auto=format&w=390",
    },
];

const outfits = [
  {
    id: 1,
    name: "Navy Blue Slim Fit Shirt",
    price: 3299,
    originalPrice: 3899,
    colors: ["#223344", "#556677"],
    sizes: [38, 40, 42],
    image: "https://imagescdn.louisphilippe.com/img/app/product/9/920274-13793708.jpg?auto=format&w=390",
    hoverImage: "https://imagescdn.louisphilippe.com/img/app/product/9/920274-13793712.jpg?auto=format&w=390",
  },
  {
    id: 2,
    name: "Light Grey Classic Shirt",
    price: 2899,
    originalPrice: 3299,
    colors: ["#C4C4C4", "#A0A0A0"],
    sizes: [39, 41, 43],
    image: "https://imagescdn.louisphilippe.com/img/app/product/3/39638286-13258646.jpg?auto=format&w=390",
    hoverImage: "https://imagescdn.louisphilippe.com/img/app/product/3/39638286-13258645.jpg?auto=format&w=390",
  },
  {
    id: 3,
    name: "Jet Black Formal Shirt",
    price: 3599,
    originalPrice: 3999,
    colors: ["#1A1A1A", "#333333"],
    sizes: [40, 42, 44],
    image: "https://imagescdn.louisphilippe.com/img/app/product/3/39680300-13845053.jpg?auto=format&w=390",
    hoverImage: "https://imagescdn.louisphilippe.com/img/app/product/3/39680300-13845052.jpg?auto=format&w=390",
  },
  {
    id: 4,
    name: "Charcoal Grey Shirt",
    price: 3099,
    originalPrice: 3599,
    colors: ["#4B4B4B", "#6E6E6E"],
    sizes: [38, 40, 42, 44],
    image: "https://imagescdn.louisphilippe.com/img/app/product/9/959794-17224876.jpg?auto=format&w=390",
    hoverImage: "https://imagescdn.louisphilippe.com/img/app/product/9/959794-17224881.jpg?auto=format&w=390",
  },
    {id: 5,
    name: "Navy Blue Slim Fit Shirt",
    price: 3299,
    originalPrice: 3899,
    colors: ["#223344", "#556677"],
    sizes: [38, 40, 42],
    image: "https://imagescdn.louisphilippe.com/img/app/product/9/920274-13793708.jpg?auto=format&w=390",
    hoverImage: "https://imagescdn.louisphilippe.com/img/app/product/9/920274-13793712.jpg?auto=format&w=390",
  },
  {
    id: 6,
    name: "Light Grey Classic Shirt",
    price: 2899,
    originalPrice: 3299,
    colors: ["#C4C4C4", "#A0A0A0"],
    sizes: [39, 41, 43],
    image: "https://imagescdn.louisphilippe.com/img/app/product/3/39638286-13258646.jpg?auto=format&w=390",
    hoverImage: "https://imagescdn.louisphilippe.com/img/app/product/3/39638286-13258645.jpg?auto=format&w=390",
  },
  {
    id: 7,
    name: "Jet Black Formal Shirt",
    price: 3599,
    originalPrice: 3999,
    colors: ["#1A1A1A", "#333333"],
    sizes: [40, 42, 44],
    image: "https://imagescdn.louisphilippe.com/img/app/product/3/39680300-13845053.jpg?auto=format&w=390",
    hoverImage: "https://imagescdn.louisphilippe.com/img/app/product/3/39680300-13845052.jpg?auto=format&w=390",
  },
  {
    id: 9,
    name: "Charcoal Grey Shirt",
    price: 3099,
    originalPrice: 3599,
    colors: ["#4B4B4B", "#6E6E6E"],
    sizes: [38, 40, 42, 44],
    image: "https://imagescdn.louisphilippe.com/img/app/product/9/959794-17224876.jpg?auto=format&w=390",
    hoverImage: "https://imagescdn.louisphilippe.com/img/app/product/9/959794-17224881.jpg?auto=format&w=390",
  },
];


const sizes = [36, 38, 40, 42, 44, 46, 48, 50];
const colors = ["#455A8A", "#CBBBA0", "#908A7D", "#1D1D1D"];

const review = () => {

  const handleScroll = (direction) => {
    const container = document.getElementById("product-scroll");
    const scrollAmount = direction === "left" ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollRef = useRef(null);

  const scrollContent = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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

    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-10">
      {/* Left - Grid of Large Images */}
      <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[calc(300vh)] pr-2">
        {productImages.map((img, index) => (
          <div key={index} className="w-full h-[600px]">
            <img
              src={img}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover rounded shadow"
            />
          </div>
        ))}
      </div>

      {/* Right - Product Info */}
      <div className="w-full md:w-2/5 space-y-6 sticky top-10 self-start">
        <h2 className="text-2xl font-bold tracking-wider text-gray-800">
          Men White Classic Fit Solid Full Sleeves Formal Shirt
        </h2>

        <hr />

        <p className="text-xl font-semibold text-red-600">
          Rs. 4,004 <span className="line-through text-gray-500 text-sm ml-2">Rs. 4,499</span>
        </p>

        <hr />

        {/* Size Selector */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Size</label>
          <select className="w-full border border-gray-400 p-2 rounded">
            <option>Select Size</option>
            {sizes.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
          <button className="underline text-blue-600 text-sm font-bold mt-4">View Size Chart</button>
        </div>

        <hr />

        {/* Size Chart & Color */}
          <h1 className="block text-sm font-bold text-gray-700 mb-2">Colors</h1>
        <div className="flex items-center justify-between">
          <div className="grid grid-cols-4 gap-3">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded border border-gray-400 shadow-md"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        <hr />

        {/* Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-yellow-500 text-white py-3 font-semibold rounded">BUY NOW</button>
          <button className="w-full border bg-black border-white text-white py-3 font-semibold rounded">TRY ON VIRTUALLY</button>
          <div className="flex gap-4">
            <button className="w-1/2 border border-black text-black py-3 font-semibold rounded"><i className="ri-shopping-cart-line mr-2 text-lg font-light"></i> ADD TO CART</button>
            <button className="w-1/2 border border-black text-black py-3 font-semibold rounded"><i className="ri-heart-line mr-2 text-lg font-light"></i>ADD TO WISHLIST</button>
          </div>
        </div>

        <hr />

        {/* Wishlist & Delivery */}
        <div className="space-y-6 text-sm text-gray-700">

          {/* Coupon */}
 <div className="mt-4">
  <h3 className="font-semibold text-gray-800 mb-2">Coupon(S)</h3>
  <div className="bg-gray-50 rounded p-4 border border-gray-200">
    <p className="font-bold text-gray-800 mb-1">LPLUXSAVINGS</p>
    <p className="text-gray-700 text-sm">
      Buy 2 And Get Extra 10% Off, Buy 3 And Get Extra 12% Off, Buy 4 And Get Extra 15% Off
      <a href="#" className="text-black font-semibold underline ml-1">T&Cs</a>
    </p>

    <div className="mt-3 inline-flex border border-blue-600 rounded overflow-hidden text-sm">
      <button className="px-3 py-1 text-blue-700 font-medium bg-white truncate">LPLUXSAVINGS</button>
      <button className="bg-blue-700 text-white px-2 flex items-center justify-center">
        <i className="ri-file-copy-line"></i>
      </button>
    </div>
  </div>
</div>

          <hr />
                   <div className="bg-gray-100 p-4 rounded shadow">
            <p className="font-bold mb-1">Delivery Options</p>
            <p className="mb-2 text-gray-600 text-sm">Select to see availability to your location</p>
            <div className="flex flex-row items-center">
            <i className="ri-truck-line text-3xl "></i>
            <div className="ml-3">
            <div className="mb-1">
              <span className="font-semibold">Express:</span> Express Delivery available
            </div>
            <p className="text-sm text-blue-600 underline cursor-pointer">Login or select location to see availability</p>
            </div>
            </div>
            <div className="mt-3">
              <p className="font-semibold">Free Delivery</p>
              <p className="text-sm">Easy Return & Exchange: 15 days Free Return & Exchange*</p>
              <p className="text-sm">Not the right size? You can easily exchange this item to get the right one.</p>
            </div>
          </div>
          <hr />
        </div>

        <Product />
      </div>
    </div>

    <div className="relative w-full py-6">
      <div className="relative w-full mb-6">
        <hr className="border-t-2 absolute top-3 border-yellow-500 left-12 w-[96.5%] z-0" />
      </div>
      <h2 className="text-2xl ml-12 font-medium font-Playfair mb-6 tracking-wide uppercase">
        You May Also Like
      </h2>

      <div className="relative">
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:scale-110 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          id="product-scroll"
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12 min-h-[460px]"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[260px] bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="relative group h-[380px] overflow-hidden">
                <img
                  src={product.img1}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:hidden transition-transform duration-300 group-hover:scale-110"
                />
                <img
                  src={product.img2}
                  alt={product.name}
                  className="w-full h-full object-cover hidden group-hover:block transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex justify-center items-end pb-2 gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="bg-white text-gray-800 px-2 py-1 text-xs rounded border"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500">FORMAL SHIRTS</p>
                <h3 className="text-sm font-medium line-clamp-2 mt-1">
                  {product.name}
                </h3>
                <div className="text-sm mt-1">
                  <span className="text-red-600 font-semibold mr-2">
                    {product.price}
                  </span>
                  <span className="line-through text-gray-400">
                    {product.originalPrice}
                  </span>
                </div>
                <p className="text-xs mt-1 text-gray-600">Color: {product.color}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:scale-110 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>

    <div className="relative w-full py-6 mb-10">
      <div className="relative w-full mb-6">
        <hr className="border-t-2 absolute top-3 border-yellow-500 left-12 w-[96.5%] z-0 " />
      </div>
      <h2 className="text-2xl ml-12 font-medium font-Playfair  mb-6 tracking-wide uppercase">Similar Outfits</h2>

      <div className="relative">
        <button
          onClick={() => scrollContent("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:scale-110 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12 min-h-[460px]"
        >
          {outfits.map((item) => (
            <div
              key={item.id}
              className="min-w-[260px] bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="relative group h-[380px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:hidden transition-transform duration-300 group-hover:scale-110"
                />
                <img
                  src={item.hoverImage}
                  alt={item.name}
                  className="w-full h-full object-cover hidden group-hover:block transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex justify-center items-end pb-2 gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.sizes.map((size) => (
                    <span
                      key={size}
                      className="bg-white text-gray-800 px-2 py-1 text-xs rounded border"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500">FORMAL SHIRTS</p>
                <h3 className="text-sm font-medium line-clamp-2 mt-1">{item.name}</h3>
                <div className="text-sm mt-1">
                  <span className="text-red-600 font-semibold mr-2">₹{item.price}</span>
                  <span className="line-through text-gray-400">₹{item.originalPrice}</span>
                </div>
                <div className="flex gap-1 mt-2">
                  {item.colors.map((clr, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: clr }}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollContent("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:scale-110 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
    
    < Footer />

    </>
  );
};

export default review;
