import React from "react";

const Mission = () => {
  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-28 text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl px-6 mx-auto">
        <div className="mb-10">
          <p className="text-xs uppercase font-semibold tracking-wider text-gray-500">
            Mission
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-2">
            Unifying Procurement, One Piece at a Time
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Founded in 2015 with a people-first mindset, EP365 helps over 1,000
            global companies simplify procurement. We centralize purchasing,
            automate manual tasks, and deliver deep spend insights — helping
            teams save time, reduce costs, and scale faster.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
