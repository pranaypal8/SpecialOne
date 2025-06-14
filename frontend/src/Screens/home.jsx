import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import NewsBar from "../../components/newsbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate =useNavigate()

  const fabrics = [
    {
      label: "Cotton",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBrkmrxJx8lGq5UvB48gblD7bUOpAcSpPs5Q&s",
    },
    {
      label: "Linen-Cotton",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvWQWBLkyGViha8GscWe_08n04CPI8RTtSQ&s",
    },
    {
      label: "Poplin",
      image:
        "https://img1.exportersindia.com/product_images/bc-full/2022/7/10517221/pop-gc-002-poplin-fabric-1657713585-6443889.jpeg",
    },
    {
      label: "Twill",
      image:
        "https://as2.ftcdn.net/jpg/01/36/01/99/1000_F_136019995_g5mP2BHpyHifKjYlbWgoW3W5yfEl7Ydd.jpg",
    },
    {
      label: "Oxford",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6F2UI5QT-k6k6rLB23-tQN2m9LipFbZJpQ&s",
    },
  ];

  const cards = [
    {
      id: 1,
      defaultImage:
        "https://imagescdn.louisphilippe.com/img/app/product/9/916657-16341724.jpg?auto=format&w=390",
      hoverImage:
        "https://imagescdn.louisphilippe.com/img/app/product/9/916657-16341728.jpg?auto=format&w=390",
    },
    {
      id: 2,
      defaultImage:
        "https://imagescdn.louisphilippe.com/img/app/product/9/928912-13792844.jpg?auto=format&w=390",
      hoverImage:
        "https://imagescdn.louisphilippe.com/img/app/product/9/928912-13792848.jpg?auto=format&w=390",
    },
    {
      id: 3,
      defaultImage:
        "https://imagescdn.louisphilippe.com/img/app/product/3/39735448-16770773.jpg?auto=format&w=390",
      hoverImage:
        "https://imagescdn.louisphilippe.com/img/app/product/3/39735448-16770777.jpg?auto=format&w=390",
    },

    {
      id: 4,
      defaultImage:
        "https://imagescdn.louisphilippe.com/img/app/product/3/39638286-13258646.jpg?auto=format&w=390",
      hoverImage:
        "https://imagescdn.louisphilippe.com/img/app/product/3/39638286-13258645.jpg?auto=format&w=390",
    },
  ];

  const items = [
    {
      id: 1,
      imgFront:
        "https://imagescdn.louisphilippe.com/img/app/product/3/39872987-17345971.jpg?auto=format&w=390",
      imgBack:
        "https://imagescdn.louisphilippe.com/img/app/product/3/39872987-17345975.jpg?auto=format&w=390",
      desc: "Minimalist Cotton Blend",
    },
    {
      id: 2,
      imgFront:
        "https://imagescdn.louisphilippe.com/img/app/product/3/39867064-17272034.jpg?auto=format&w=390",
      imgBack:
        "https://imagescdn.louisphilippe.com/img/app/product/3/39867064-17272038.jpg?auto=format&w=390",
      desc: "Modern Twill Cut",
    },
    {
      id: 3,
      imgFront:
        "https://imagescdn.louisphilippe.com/img/app/product/3/39827049-16448149.jpg?auto=format&w=390",
      imgBack:
        "https://imagescdn.louisphilippe.com/img/app/product/3/39827049-16448153.jpg?auto=format&w=390",
      desc: "Linen Layered Comfort",
    },
    {
      id: 4,
      imgFront:
        "https://imagescdn.louisphilippe.com/img/app/product/3/39827964-16474385.jpg?auto=format&w=390",
      imgBack:
        "https://imagescdn.louisphilippe.com/img/app/product/3/39827964-16474389.jpg?auto=format&w=390",
      desc: "Linen Layered Comfort",
    },
  ];

  function useIntersectionObserver(ref, options) {
    const [isVisible, setVisible] = React.useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      }, options);
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [ref, options]);
    return isVisible;
  }

  const FlipCard = ({ imgFront, imgBack, desc }) => {
    return (
      <div className="relative w-full h-[35rem] overflow-hidden rounded-md shadow-lg group">
        <img
          src={imgFront}
          alt="front"
          className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src={imgBack}
          alt="back"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-gray-800 text-sm font-medium">{desc}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Top Navigation Bar */}
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
        <div className="flex items-center w-96 gap-4">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full w-80 px-4 py-1.5 text-black focus:outline-none"
          />
          <button className="bg-white text-black rounded-full px-5 py-1 font-semibold hover:bg-gray-200 transition">
            Login
          </button>
        </div>
      </nav>

      <NewsBar />

      {/* Hero Section */}
      <main className="relative w-full h-[40rem] flex flex-col lg:flex-row items-center justify-between px-6 py-20 bg-[#F2F0F1] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/Videos/4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="relative z-10 flex flex-col items-start justify-center max-w-xl ml-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            WERTYUIOP
          </h1>
          <p className="mb-8 text-lg text-gray-100">
            Discover the latest in fashion. Our mission is to empower your style
            with quality, comfort, and confidence. Shop the best trends, curated
            just for you.
          </p>
          <button 
          onClick={() =>{
            navigate('/collection')
          }}
          className="bg-black text-white rounded-full px-8 py-3 font-bold text-lg hover:bg-gray-800 transition">
            SHOP NOW
          </button>
        </div>
      </main>

      {/* waer the vibe */}
      <section className="w-full  px-6 py-16  mb-11">
        <h2 className="text-7xl lg:text-8xl font-extrabold font-playfair text-center mb-12 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black">
          Bestsellers
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => {
            const cardRef = useRef();
            const isVisible = useIntersectionObserver(cardRef, {
              threshold: 0.1,
            });

            return (
              <div
                key={card.id}
                ref={cardRef}
                className={`relative w-80 h-[32rem] overflow-hidden rounded-xl shadow-lg group cursor-pointer transform transition duration-[1500ms] ease-in-out ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <img
                  src={card.defaultImage}
                  alt="Card"
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={card.hoverImage}
                  alt="Card Hover"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
                  SHOP NOW
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* febric section */}
      <section className="w-full  px-6 py-12 bg-black text-center">
        {/* <h2 className="text-3xl text-white font-inter font-bold mb-10">Premium Fabrics</h2> */}
        <h2 className="text-4xl text-white font-inter font-semibold mb-6 tracking-wide uppercase">
          Premium Fabrics
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {fabrics.map((fabric, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 shadow-md transition-transform duration-300 hover:scale-110">
                <img
                  src={fabric.image}
                  alt={fabric.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 font-medium text-white">{fabric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <Newarrivals /> */}
      <section className="w-full h-[48rem] px-6 py-16 bg-gray-100">
        <h2 className="text-5xl tracking-wide text-center mb-12 mt-0 font-playfair font-extrabold text-gray-800">
          <span className="relative inline-block">
            <span className="relative z-10">New Arrivals</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-300 z-0 rounded-sm"></span>
          </span>
        </h2>

        <div className="h-[10rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-9xl mx-auto">
          {items.map(({ id, imgFront, imgBack, desc }) => (
            <FlipCard
              key={id}
              imgFront={imgFront}
              imgBack={imgBack}
              desc={desc}
            />
          ))}
        </div>
      </section>

      <div className="w-full px-6 py-16 bg-gray-100 text-gray-800">
        {/* About Us Section */}
        <section className="mb-20 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold font-playfair text-center text-gray-800 mb-8 relative inline-block after:content-[''] after:block after:w-24 after:h-1 after:bg-black after:mx-auto after:mt-4">
            About <span className="text-[#9A3412]">Us</span>
          </h2>
          <p className="text-lg leading-relaxed text-justify">
            At  <span className="font-anurati">SPECIALONE</span> , we believe fashion is more than just clothing
            — it's a statement of identity. Founded with a vision to redefine
            modern style, our brand fuses tradition with innovation. Every
            fabric we select is a reflection of our commitment to comfort,
            quality, and craftsmanship. From the meticulous design process to
            the final stitch, we strive to bring you apparel that complements
            your confidence and enhances your everyday life. Our collections are
            not just about looking good, but feeling great in what you wear.
            Whether it's a classic formal shirt or a trendy casual fit, our
            products are tailored to adapt to your lifestyle with elegance and
            ease. Join us in our journey to inspire style that speaks for
            itself. Because at [Your Brand Name], we don't just dress people —
            we empower them through fashion.
          </p>
        </section>

        {/* Contact Us Section */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 font-playfair text-center">
            Contact Us
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-800"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-800"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-800"
                required
              ></textarea>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 mt-1"
                required
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <span className="underline cursor-pointer">
                  Terms & Conditions*
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </section>
      </div>

      <Footer />

    </>
  );
};

export default Home;
