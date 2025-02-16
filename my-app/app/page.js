"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BsChevronDoubleDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const heroRef = useRef(null);
  const discoverSectionRef = useRef(null);
  const boxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [key, setKey] = useState(0);

  // Restart typing animation when scrolling back to the section
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setKey((prevKey) => prevKey + 1);
        }
      }

      if (boxRef.current) {
        const rect = boxRef.current.getBoundingClientRect();
        setIsVisible(rect.bottom < window.innerHeight * 0.9);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlediscover = () => {
    discoverSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* Hero Section */}
      <div ref={heroRef} className="relative w-full h-screen">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-fill z-[-1]">
          <source src="/10.mp4" type="video/mp4" />
        </video>

        <div className="relative flex flex-col items-center pt-28 h-full text-center">
          {/* Typing Animation */}
          <h1 key={key} className="text-white text-5xl font-extrabold m-2">
            <Typewriter words={["Stepping into Virtual"]} typeSpeed={80} deleteSpeed={0} delaySpeed={500} cursor />
          </h1>
          <p className="text-lg text-white m-2">Transforming Learning for the Neurodiverse.</p>
        </div>

        <div ref={discoverSectionRef} className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <button onClick={handlediscover} className="m-2 text-white bg-blue-400 hover:bg-blue-700 active:bg-blue-500 rounded-xl p-2 font-bold flex">
            Discover Us <BsChevronDoubleDown className="mt-1 mx-2 animate-bounce" />
          </button>
        </div>
      </div>

      {/* White Box with Expand/Shrink Animation */}
      <div className="flex items-center justify-center bg-gray-200">
        <motion.div
          ref={boxRef}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg w-[calc(100%-60px)] max-w-none m-8"
        >
          <p className="py-8 px-10 text-center font-bold text-black text-2xl">
            At Yukti, we believe every individual deserves a fun, safe space to learn and grow.
            Our mission is to empower the neurodiverse by creating engaging virtual worlds where everyday skills are built, right from home.
          </p>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="bg-[#eb5b00] p-2 h-screen">
        <h2 className="mx-5 text-5xl font-extrabold my-14 text-center">Features</h2>
        <div className="flex gap-14 mx-5">
          {[
            { src: "/6.png", title: "Virtual Classroom" },
            { src: "/4.png", title: "Interactive Characters" },
            { src: "/5.png", title: "Personalized Learning Paths" },
            { src: "/7.png", title: "Parent & Doctor Monitoring", className: "ml-10" },
            { src: "/8.png", title: "ADHD Friendly UI" },
          ].map(({ src, title, className }, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={src} width={250} height={250} alt={title} className={className} />
              <p className="text-center font-bold text-2xl">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
