"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BsChevronDoubleDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const boxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const discoverSectionRef = useRef(null);
  const [key, setKey] = useState(0);
  const restartTyping = () => {
    setKey((prevKey) => prevKey + 1); // Change key to reset Typewriter
  };

  useEffect(() => {
    const handleScroll = () => {
      if (boxRef.current) {
        const rect = boxRef.current.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        const shrinkTrigger = rect.bottom < window.innerHeight * 0.9;

        if (window.scrollY > lastScrollY) {
          if (inView) setIsVisible(true);
        } else {
          if (!shrinkTrigger) setIsVisible(false);
        }
      }
      setLastScrollY(window.scrollY);
    };

    const checkInitialVisibility = () => {
      if (boxRef.current) {
        const rect = boxRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    checkInitialVisibility();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handlediscover = () => {
    if (discoverSectionRef.current) {
      discoverSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <div className="absolute top-0 left-0 bg-[#d2d8fb] z-[-1] w-full h-full">
          <video autoPlay loop muted playsInline className="w-full h-full object-contain">
            <source src="/10.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative flex flex-col items-center pt-28 h-full text-center">
          <div key={key} className="text-white text-5xl font-extrabold m-2">
            <Typewriter
              words={["Stepping into Virtual"]}
              typeSpeed={100} // Typing speed
              deleteSpeed={0} // Ensures it doesn't delete
              delaySpeed={1000} // Delay before stopping
              cursor
              cursorStyle="|" // Cursor appearance
            />
          </div>
          <div className="text-lg text-white m-2">Transforming Learning for the Neurodiverse.</div>
        </div>

        <div ref={discoverSectionRef} className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <button onClick={handlediscover} className="m-2 text-white bg-blue-400 hover:bg-blue-700 scale-110 hover:scale-125 active:bg-blue-500 rounded-2xl pl-4 p-2 text-center font-bold flex transition-all duration-300">
            Discover Us <BsChevronDoubleDown className="mt-1 mx-2 animate-bounce" />
          </button>
        </div>
      </div>

      {/* White Box with Expand/Shrink Behavior */}
      <div className="flex items-center justify-center bg-gray-200">
        <motion.div
          ref={boxRef}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.65 }}
          className="bg-white p-6 rounded-xl shadow-lg w-[calc(100%-60px)] max-w-none m-8"
        >
          <div className="py-8 px-10 text-center font-bold text-black text-2xl">
            At Yukti, we believe every individual deserves a fun, safe space to learn and grow.
            Our mission is to empower the neurodiverse by creating engaging virtual worlds where
            everyday skills are built, right from home.
          </div>
        </motion.div>
      </div>

      <div className="flex">
        <div>
          <Image src="/1.png" width={400} height={200} alt="1st image" />
        </div>
        <div className="pl-20 bg-[#cba35c] ml-auto">
          <div className="bg-[#754e1a] h-full">
            <Image src="/3.png" width={500} height={500} alt="1" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#2f1ab4] to-[#7f7fff] p-2 h-full">
        <div className="mx-5 text-5xl font-extrabold my-14 text-center">Features</div>
        <div className="flex gap-14 mx-5">
          <div className="flex-row">
            <div>
              <Image src="/6.png" width={250} height={250} alt="vr image1" />
            </div>
            <div className="text-center font-bold text-2xl">Virtual Classroom</div>
          </div>
          <div className="flex-row">
            <div>
              <Image src="/4.png" width={250} height={250} alt="vr image2" />
            </div>
            <div className="text-center font-bold text-2xl">Interactive characters</div>
          </div>
          <div className="flex-row">
            <div>
              <Image src="/5.png" width={300} height={300} alt="vr image3" />
            </div>
            <div className="text-center font-bold text-2xl">Personalized learning paths</div>
          </div>
          <div className="flex-row">
            <div className="ml-10">
              <Image src="/7.png" width={235} height={235} alt="vr image4" />
            </div>
            <div className="text-center font-bold text-2xl">Parent and doctors monitoring</div>
          </div>
          <div className="flex-row">
            <div>
              <Image src="/8.png" width={300} height={300} alt="vr image5" />
            </div>
            <div className="text-center font-bold text-2xl">ADHD Friendly UI</div>
          </div>
        </div>
      </div>
      <div className="bg-[#d91656] w-full h-screen relative">
        <Image
          src="/11.png"
          alt="Background Image"
          fill
          className="object-fill"
        />
      </div>

    </div>
  );
}
