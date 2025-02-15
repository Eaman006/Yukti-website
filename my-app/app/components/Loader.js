import React from 'react'

const Loader = () => {
    return (
        <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-l-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-transparent border-b-blue-500 border-r-blue-500 rounded-full animate-[spin_1.5s_linear_infinite]"></div>
      </div>
      
    );
  };
  
  export default Loader;
  
