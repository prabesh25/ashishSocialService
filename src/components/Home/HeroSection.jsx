import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="max-w-6xl h-screen mx-auto px-6 py-20 text-center">
        <div className="absolute inset-0 bg-black/30 z-[-1]" />

        <img
          src="images/hero4.png"
          alt="heroImg"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black-transparent bg-opacity-10 z-[-1]" />

        <div className="mt-10">
          <div className="flex flex-wrap gap-4 justify-center mb-8"></div>

          {/* <hr className="border-t-2 border-gray-300 my-8 w-1/4 mx-auto" /> */}

          {/* <h2 className="text-lg font-bold text-gray-100 mb-6">
            A CAMPAGAIN TO END HUMAN TRAFFICING
          </h2> */}

            <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-100 mb-4 uppercase tracking-wide">
           A CAMPAIGN TO END HUMAN TRAFFICKING
         </h2>

          <div className="max-w-4xl mx-auto text-center">
            {/* <h3 className="text-[88px] tracking-wide leading-tight font-bold text-gray-100 mb-6">
              ASHISH SOCIAL SERVICE NEPAL
            </h3> */}

            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] leading-tight font-bold text-gray-100 mb-6">
        ASHISH SOCIAL SERVICE NEPAL
       </h3>

            <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
              Survivors should not have to carry the burden of criminal records
              stemming from their exploitation. Support the Trafficking
              Survivors Relief Act.
            </p>
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg">
              TAKE ACTION NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;





// import React from "react";

// const HeroSection = () => {
//   return (
//     <div className="relative h-screen text-center overflow-hidden">
//       {/* Overlay background */}
//       <div className="absolute inset-0 bg-black/30 z-[-1]" />

//       {/* Background Image */}
//       <img
//         src="/images/hero4.png"
//         alt="heroImg"
//         className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
//       />

//       {/* Content */}
//       <div className="relative max-w-6xl h-full mx-auto px-4 py-20 flex flex-col justify-center">
//         <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-100 mb-4 uppercase tracking-wide">
//           A CAMPAIGN TO END HUMAN TRAFFICKING
//         </h2>

//         <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] leading-tight font-bold text-gray-100 mb-6">
//           ASHISH SOCIAL SERVICE NEPAL
//         </h3>

//         <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-2xl mx-auto mb-8 px-2">
//           Survivors should not have to carry the burden of criminal records stemming from their exploitation.
//           Support the Trafficking Survivors Relief Act.
//         </p>

//         {/* <button className="bg-cyan-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-blue-700 transition-colors text-base sm:text-lg">
//           TAKE ACTION NOW
//         </button> */}

//         <button className="bg-cyan-500 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg">
//              TAKE ACTION NOW
//             </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

