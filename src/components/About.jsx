// "use client";
// import React, { useRef } from "react";

// const About = () => {
//   const imageContainerRef = useRef();
//   return (
//     <section className="w-full min-h-svh h-full relative">
//       {/* content */}
//       <div className="w-full flex flex-col p-20 gap-10">
//         <h2 className="font-gotu text-[40px]">
//           Quality You Deserve, Luxury You Desire.
//         </h2>
//         <p className="text-xl max-w-1/2">
//           Established in 2006, Shubham Group has been redefining real estate
//           with a vision to deliver luxury housing at affordable prices. Over the
//           years, the group has completed milestone projects across the state,
//           earning the trust of families. Known for its quality, innovation, and
//           customer satisfaction.
//         </p>
//         <div ref={imageContainerRef} className="w-3/5 self-center -z-20">
//           <img
//             src="/images/palm-studio/plam-studio1.jpg"
//             alt=""
//             className="w-full h-full object-cover rounded-xl"
//           />
//         </div>
//       </div>

//       {/* sketch */}
//       <div className="absolute top-0 right-0 -z-10">
//         <img
//           src="/images/sketch-1.png"
//           alt=""
//           className="w-40 sm:w-60 md:w-100 lg:w-150 h-full object-cover transition-all ease-out duration-300"
//         />
//       </div>
//     </section>
//   );
// };

// export default About;

"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <section className="w-full h-full relative p-4 md:p-20 overflow-visible">
      {/* content */}
      <div className="w-full flex flex-col gap-10">
        <h2 className="font-tabular font-semibold text-2xl md:text-[40px] tracking-tight">
          Quality You Deserve
        </h2>
        <p className="text-lg md:text-xl lg:max-w-1/2">
          Established in 2006, Shubham Group has been redefining real estate
          with a vision to deliver luxury housing at affordable prices. Over the
          years, the group has completed milestone projects across the state,
          earning the trust of families. Known for its quality, innovation, and
          customer satisfaction.
        </p>
      </div>

      {/* sketch */}
      <div className="absolute top-0 right-0 z-10">
        <img
          src="/images/sketch-1.png"
          alt=""
          className="w-60 md:w-100 lg:w-150 h-full object-cover transition-all ease-out duration-300 opacity-20"
        />
      </div>
    </section>
  );
};

export default About;
