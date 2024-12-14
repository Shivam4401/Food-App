import React from "react";

const Catagories = () => {
  const catagoryItems = [
    {
      id: 1,
      title: "Breakfast",
      desc: "{23 dishes}",
      image: "images/image1.jpg",
    },
    {
      id: 2,
      title: "Lunch",
      desc: "{30 dishes}",
      image: "images/image2.jpg",
    },
    {
      id: 3,
      title: "Snacks",
      desc: "{45 dishes}",
      image: "images/image3.jpg",
    },
    {
      id: 1,
      title: "Dinner",
      desc: "{32 dishes}",
      image: "images/image4.jpg",
    },
  ];
  return (
    <div className="">
      <div>
        <p className="text-4xl font-bold text-red-900 text-center py-8">
          Customer favourites
        </p>
      </div>
      <div className="text-6xl font-bold text-center py-5">
        <h3>Popular Catagories</h3>
      </div>
      {/* Catagories card */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-around items-center mt-[5%]">
        {catagoryItems.map((items, i) => (
          <div>
            <div
              key={i}
              className="shadow-lg rounded-md bg-blue-200 py-6 px-5 w-70 mx-auto text-center cursor-pointer hover:translate-y-6 duration-300 transition-all"
            >
              <img
                src={items.image}
                alt=""
                className=" w-28 h-28 p-5 rounded-full"
              />
              <div className="mt-5 space-y-1">
                <h4 className="font-bold text-red-600">{items.title}</h4>
                <p className="font-bold text-amber-950">{items.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
