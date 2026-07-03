import React from "react";

const Team = () => {
  return (
    <section className="w-full min-h-svh bg-[#191919] h-full text-white">
      {/* Founders section */}
      <div className="w-full h-full flex flex-col">
        <div className="flex justify-between items-start py-20 px-4 md:px-20">
          <h1 className="font-tabular text-4xl">Founders</h1>
          <p className="max-w-3xl">
            Shubham Group has grown into a trusted name in Jaipur&apos;s real
            estate scene by focusing on responsible development, modern design,
            and lasting value. Since 2006, the company has consistently
            delivered thoughtfully planned residential projects that balance
            affordability with superior quality. Emphasizing transparency,
            customer satisfaction, and efficient execution, Shubham Group
            combines careful planning and process-driven delivery to create
            comfortable, sustainable communities that stand the test of time.
          </p>
        </div>

        <div className="flex justify-between items-start py-20 px-4 md:px-20">
          <div className="bg-white/10 shadow-2xl backdrop-blur-2xl aspect-4/5 w-80 h-auto">
            Founder of Shubham Group {/* <img src="" alt="" /> */}
          </div>
          <p className="max-w-3xl">
            Shubham Group is guided by a clear, people-first vision. Founded in
            2006 by Ashok Sharma, our company is built on over a decade of
            experience and a commitment to creating affordable, high-quality
            homes that enhance lifestyles and nurture communities. Under
            Ashok&apos;s ethical, long-term approach, trust, transparency, and
            customer satisfaction remain our cornerstones.
          </p>
        </div>
        <div className="flex justify-between items-start py-20 px-4 md:px-20">
          <div className="bg-white/10 shadow-2xl backdrop-blur-2xl aspect-4/5 w-80 h-auto">
            Co - Founder of Shubham Group {/* <img src="" alt="" /> */}
          </div>
          <p className="max-w-3xl">
            Co-founder Amit Jivnani brings strategic insight and hands-on
            leadership to project planning and execution. His focus on modern
            design, functionality, and process excellence ensures every
            development meets today&apos;s needs while delivering lasting value.
            Together, Ashok and Amit steer Shubham Group toward responsible
            growth, thoughtful design, and homes that residents are proud to
            call their own.
          </p>
        </div>
      </div>

      {/* Team section */}
      <div></div>
    </section>
  );
};

export default Team;
