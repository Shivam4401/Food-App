import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

const SpecialDishes = () => {
  const [recipies, setRecipies] = useState([]);
  const slider = React.useRef(null);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const special = data.filter((item) => item.category === "popular");
        //console.log(special);
        setRecipies(special);
      });
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="gap-9 py-7">
      <div>
        <p className="text-5xl font-bold text-red-900 text-center py-8 gap-5">
          Special Dishes
        </p>
      </div>
      <div className="text-6xl font-bold text-center py-5">
        <h3>Enjoy your delicious meal like never before</h3>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {recipies.map((item, i) => (
            <Cards key={i} item={item}></Cards>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SpecialDishes;
