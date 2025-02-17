import React from 'react';
import MemberCard from '../components/MemberCard';

const Page = () => {
  return (
    <div className="pt-20 bg-[#d2d8fb] min-h-screen w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-center items-center">
        <div className="flex justify-between w-full max-w-7xl gap-6">
          <div className="rounded-2xl hover:scale-110 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.25)] transform transition-all duration-300">
            <MemberCard imgSrc="/1.png" name="R Vishnu Sankar" regNo="23BOE10117" />
          </div>
          <div className="rounded-2xl hover:scale-110 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.25)] transform transition-all duration-300">
            <MemberCard imgSrc="/1.png" name="Soham S Malvankar" regNo="23BOE10060" />
          </div>
          <div className="rounded-2xl hover:scale-110 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.25)] transform transition-all duration-300">
            <MemberCard imgSrc="/peeyushImg.png" name="Peeyush Chauhan" regNo="23BAI10875" />
          </div>
        </div>
      </div>
      <div className="mt-8 p-8 w-full flex justify-center items-center">
        <div className="flex justify-between w-full max-w-7xl gap-6">
        <div className="rounded-2xl hover:scale-110 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.25)] transform transition-all duration-300">
            <MemberCard imgSrc="/eamanImg.png" name="Md Eaman Adeep" regNo="23BCE10510" />
          </div>
          <div className="rounded-2xl hover:scale-110 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.25)] transform transition-all duration-300">
            <MemberCard imgSrc="/shresthImg.png" name="Shresth Kumar Jha" regNo="23BAI11216" />
          </div>
          <div className="rounded-2xl hover:scale-110 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.25)] transform transition-all duration-300">
            <MemberCard imgSrc="/dakshImg.png" name="Daksh Dugar" regNo="23BCE10667" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Page;
