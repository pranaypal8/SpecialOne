import React, { useState, useRef, useEffect } from "react";

const AccordionSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center font-semibold text-left text-lg focus:outline-none"
      >
        {title}
        <span>
          {isOpen ? (
            <i className="ri-arrow-up-wide-fill"></i>
          ) : (
            <i className="ri-arrow-down-wide-line"></i>
          )}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="mt-2 text-gray-700 text-sm">{children}</div>
      </div>
    </div>
  );
};

const product = () => {
   return (
    <div className="max-w-3xl mx-auto mt-10">
      <AccordionSection title="Product Description ">
        <p className="font-mono">
          Elevate your formal wardrobe with this Louis Philippe classic-fit
          shirt in timeless white. Crafted from premium cotton, it guarantees
          comfort and breathability for long hours. The solid design exudes
          sophistication, making it an ideal choice for formal occasions.
          Complete with full sleeves, this shirt perfectly blends style and
          functionality, ensuring you make a memorable impression. Experience
          the elegance of Louis Philippe and redefine your formal attire.
        </p>
        
      </AccordionSection>
      <hr />
      <AccordionSection title="Product Details">
       <div className="bg-white p-4 rounded shadow-md w-full md:w-[500px]">
  <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm text-gray-800">
    <div className="space-y-4">
      <p><strong>Material:</strong> 100% Cotton</p>
      <p><strong>StyleCode:</strong> LPSFMCLPK50435</p>
      <p><strong>Sleeves:</strong> Full Sleeves</p>
      <p><strong>Color:</strong> White</p>
      <p><strong>Subbrand:</strong> SpecialOne</p>
      <p><strong>Brand:</strong> SpecialOne</p>
      <p><strong>Collar:</strong> Regular Collar</p>
    </div>
    <div className="space-y-4">
      <p><strong>Fit:</strong> Classic Fit</p>
      <p><strong>Pattern:</strong> Solid</p>
      <p><strong>Occasion:</strong> Formal</p>
      <p><strong>Cuffs:</strong> Regular Cuff</p>
      <p><strong>ProductType:</strong> Shirt</p>
      <p><strong>Collection:</strong> LP Permapress</p>
    </div>
  </div>
</div>
      </AccordionSection>
      <hr />
      <AccordionSection title="Delivery">
        <p><strong>All India FREE shipping</strong></p>
        <p className="mt-1"><strong>Express:</strong> Express Delivery available</p>
        <p className="mt-1 text-sm text-blue-600 underline cursor-pointer">Login or select location to see availability</p>
      </AccordionSection>
      <hr />
      <AccordionSection title="Return & Exchange">
        <p><strong>Return:</strong> 15 day Returns</p>
        <p className="mt-1">
          <a href="#" className="text-blue-600 underline">View Return policy</a>
        </p>
        <p className="mt-3"><strong>Exchange:</strong> 15 day Exchange</p>
        <p className="mt-1">
          <a href="#" className="text-blue-600 underline">View Exchange policy</a>
        </p>
      </AccordionSection>
      <hr />
    </div>

    
  );
};

export default product;

