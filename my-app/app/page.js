import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-fill z-[-1]">
          <source src="/10.mp4" type="video/mp4" />
        </video>
        <div className="relative flex-row justify-center  pt-28">
          <div className="text-white text-5xl font-extrabold text-center m-2">
            Stepping into Virtual
          </div>
          <div className="text-center m-2 text-lg">
            Transforming Learning for the Neurodiverse.
          </div>
        </div>
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
      <div className="bg-[#eb5b00] p-2 h-screen">
        <div className="mx-5 text-5xl font-extrabold my-14 text-center">
          Features
        </div>
        <div className="flex gap-14 mx-5">
          <div className="flex-row">
            <div>
              <Image src="/6.png" width={250} height={250} alt="vr image1" />
            </div>
            <div className="text-center font-bold text-2xl">
              Virtual Classroom
            </div>
          </div>
          <div className="flex-row">
            <div>
              <Image src="/4.png" width={250} height={250} alt="vr image2" />
            </div>
            <div className="text-center font-bold text-2xl">
              Interactive characters
            </div>
          </div>
          <div className="flex-row">
            <div>
              <Image src="/5.png" width={300} height={300} alt="vr image3" />
            </div>
            <div className="text-center font-bold text-2xl">
              Personalized learning paths
            </div>
          </div>
          <div className="flex-row">
            <div className="ml-10">
              <Image src="/7.png" width={235} height={235} alt="vr image4" />
            </div>
            <div className="text-center font-bold text-2xl">
              Parent and doctors monitoring
            </div>
          </div>
          <div className="flex-row">
            <div>
              <Image src="/8.png" width={300} height={300} alt="vr image5" />
            </div>
            <div className="text-center font-bold text-2xl">
              ADHD Friendly UI
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
