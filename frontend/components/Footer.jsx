import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
     <footer className="bg-gray-200 text-gray-700 px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Column 1: Logo and Description */}
          <div className="space-y-5">
            <h1 className="text-3xl font-anurati font-bold">SPECIALONE</h1>
            <p className="text-sm ">
              We have clothes that suits your style and which you're proud to wear.
            </p>
            <div className="flex space-x-4 text-gray-700 mt-3">
              <FaTwitter className="hover:text-black cursor-pointer" />
              <FaFacebookF className="hover:text-black cursor-pointer" />
              <FaInstagram className="hover:text-black cursor-pointer" />
              <FaGithub className="hover:text-black cursor-pointer" />
            </div>
          </div>

          {/* Column 2: COMPANY */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-widest">COMPANY</h4>
            <ul className="text-sm space-y-2">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          {/* Column 3: HELP */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-widest">HELP</h4>
            <ul className="text-sm space-y-2">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Column 4: FAQ */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-widest">FAQ</h4>
            <ul className="text-sm space-y-2">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer