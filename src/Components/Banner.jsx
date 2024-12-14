import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500">
      <div className="py-24 flex gap-5">
        <div className="md:w-1/2 space-y-8 px-4">
          <h2 className=" md:text-4xl w-[50%] font-bold text-3xl">
            Get the most tastiest and fresh{" "}
            <span className="text-red-800">food</span> ever
          </h2>
          <p className="md:text-xl text-xl text-black-600">
            where each bite gives you the taste of Indian spices
          </p>
          <button className="btn bg-blue-800 rounded-full px-6 text-white ml-2 mr-2">
            Order now
          </button>
        </div>
        <div className="w-[50%]">
          <img
            src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
            alt="food image"
          />
          <div>
            <h4 className="text-bold text-xl">Indian Thali</h4>
            <div className="rating rating-lg rating-half">
              <input type="radio" name="rating-10" className="rating-hidden" />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-1 bg-green-500"
                readOnly
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-2 bg-green-500"
                readOnly
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-1 bg-green-500"
                defaultChecked
                readOnly
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-2 bg-green-500"
                readOnly
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-1 bg-green-500"
                readOnly
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-2 bg-green-500"
                readOnly
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-1 bg-green-500"
                readOnly
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-2 bg-green-500"
                readOnly
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-1 bg-green-500"
                readOnly
              />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-2 bg-green-500"
                readOnly
              />
            </div>
            <div>
              <p className="text-red-950">$78.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
