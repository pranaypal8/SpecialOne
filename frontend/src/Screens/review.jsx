import React from 'react'

const review = () => {
  return (
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
  )
}

export default review