import React, { useState } from "react";
import Product from "../../components/product";

const productImages = [
  "https://imagescdn.louisphilippe.com/img/app/product/3/39625126-13792961.jpg?auto=format&w=390",
  "https://imagescdn.louisphilippe.com/img/app/product/3/39625126-13792962.jpg?auto=format&w=390",
  "https://imagescdn.louisphilippe.com/img/app/product/3/39625126-13792963.jpg?auto=format&w=390",
  "https://imagescdn.louisphilippe.com/img/app/product/3/39625126-13792965.jpg?auto=format&w=390",
  "https://imagescdn.louisphilippe.com/img/app/product/3/39831881-16594509.jpg?auto=format&w=390",
  "https://imagescdn.louisphilippe.com/img/app/product/3/39625126-13792964.jpg?auto=format&w=390",
];

const sizes = [36, 38, 40, 42, 44, 46, 48, 50];
const colors = ["#455A8A", "#CBBBA0", "#908A7D", "#1D1D1D"];

const review = () => {

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
      <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[calc(200vh)] pr-2">
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
    </>
  );
};

export default review;
