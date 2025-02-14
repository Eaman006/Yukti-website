import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div className="bg-[#1A73E8] w-full h-screen">

      </div>
      <div>
        <div className="absolute z-[-1] w-full h-40">
          <Image src="/upper section.png" layout="fill" objectFit="fit" alt="background" />
        </div>

        <div className="pt-7 text-center pl-14 pr-20 font-bold w-full bg-cover bg-center text-black text-2xl h-40" >
          At Yukti, we believe every individual deserves a fun, safe space to learn and grow. Our mission is to empower the neurodiverse by creating engaging virtual worlds where everyday skills are built, right from home.
        </div>
      </div>
      <div className="flex">
        <div >
          <Image src="/1.png" width={400} height={200} alt="1st image" />
        </div>
        <div className="pl-20 bg-[#cba35c] ml-auto">
        <div className="bg-[#754e1a] h-full">
          <Image src="/3.png" width={500} height={500} alt="1" />
        </div>
        </div>
      </div>

    </div>
  );
}
