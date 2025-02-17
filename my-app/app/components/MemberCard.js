import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({ src: "./Montserrat-VariableFont_wght.ttf" });

const MemberCard = ({ imgSrc, name, regNo }) => {
    return (
        <div className="bg-[#f2f5f5] w-[240px] h-[300px] p-4 rounded-2xl flex flex-col items-center text-center text-black">
            {/* Image Wrapper */}
            <div className="w-[80%] h-[70%] m-4 relative overflow-hidden rounded-xl flex items-center justify-center">
                {/* Enlarged Circle Background - Positioned Larger */}
                <div className="absolute w-[160%] h-[160%] flex items-center justify-center">
                    <Image 
                        src="/MemberCardBackground.png" 
                        alt="Photo Background" 
                        layout="fill"  
                        className="object-cover"
                    />
                </div>
                
                {/* Profile Image - Covers the Wrapper */}
                <Image 
                    src={imgSrc} 
                    alt={`${name}'s Photo`}  
                    layout="fill"  
                    className="rounded-xl object-cover" 
                />
            </div>

            {/* Text Content */}
            <div>
                <div className="text-xl font-bold">{name}</div>
                <div className="text-lg">{regNo}</div>
            </div>
        </div>
    );
};

export default MemberCard;
