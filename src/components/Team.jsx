import React from "react";

const Team = () => {
  return (
    <section className="w-full min-h-svh bg-[#191919] h-full text-white">
      {/* Founders section */}
      <div className="w-full h-full flex flex-col">
        <div className="flex justify-between items-start py-20 px-4 md:px-20">
          <h1 className="font-tabular text-4xl">Team</h1>
          <p className="max-w-3xl">
            Team Description Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatum, consequatur!
          </p>
        </div>
      </div>

      <div className="w-full h-full flex justify-center">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 space-x-10 space-y-10">
          <div className="w-60 aspect-4/5 bg-blue-200"></div>
          <div className="w-60 aspect-4/5 bg-blue-200"></div>
          <div className="w-60 aspect-4/5 bg-blue-200"></div>
          <div className="w-60 aspect-4/5 bg-blue-200"></div>
        </div>
      </div>
    </section>
  );
};

export default Team;
