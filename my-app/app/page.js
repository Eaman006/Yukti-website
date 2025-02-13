import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div className="bg-[#1A73E8] w-full h-screen">
        
      </div>
      <div>
      <div className="absolute z-[-1] w-full h-36">
  <Image src="/upper section.png" layout="fill" objectFit="fit" alt="" />
</div>

      <div className="pt-7 text-center pl-14 pr-20 font-bold w-full bg-cover bg-center text-black text-2xl" >
        At Yukti, we believe every individual deserves a fun, safe space to learn and grow. Our mission is to empower the neurodiverse by creating engaging virtual worlds where everyday skills are built, right from home.
      </div>
      </div>

    </div>
  );
}
