import React, { FC } from "react";
import Image, { StaticImageData } from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hpg4IMG1 from "../../../public/images/Ellipse 1.png";
import hpg4IMG2 from "../../../public/images/Ellipse 2.png";



interface cardData {
  id: number;
  title: string;
  designation: string;
  description: string;
  image: StaticImageData;
};
const Homepage4: FC  = () => {
  // Define your card data
  const cardData:cardData[] = [
    {
      id: 1,
      title: "Dave Beech",
      designation: "CEO Brand",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua",
      image: hpg4IMG1,
    },
    {
      id: 2,
      title: "Xavier Mcfarla",
      designation: "Manager ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua",
      image: hpg4IMG2,
    },
    {
      id: 3,
      title: "Dave Beech",
      designation: "CEO Brand",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua",
      image: hpg4IMG1,
    },
    {
      id: 4,
      title: "Xavier Mcfarla",
      designation: "Manager ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua",
      image: hpg4IMG2,
    },
    {
      id: 5,
      title: "Dave Beech",
      designation: "CEO Brand",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua",
      image: hpg4IMG1,
    },
    {
      id: 6,
      title: "Xavier Mcfarla",
      designation: "Manager ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua",
      image: hpg4IMG2,
    },
    {
      id: 7,
      title: "Dave Beech",
      designation: "CEO Brand",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua",
      image: hpg4IMG1,
    },
    {
      id: 8,
      title: "Xavier Mcfarla",
      designation: "Manager",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua",
      image: hpg4IMG2,
    },
    {
      id: 9,
      title: "Dave Beech",
      designation: "CEO Brand",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua",
      image: hpg4IMG1,
    },
  ];

  // Set the configuration for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  

  // Render the slider
  return (
    <div className="container mx-auto py-8 pb-20 overflow-clip">
      <div className="   text-center justify-between items-center">
        <h1 className="md:text-[37px] sm:text-[33px] text-[30px] lg:text-[42px] font-bold text-blue-500 my-2">
          CLIENTS REVIEWS
        </h1>
      </div>
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className="p-10 pl-16 lg:p-8 lg:px-11 lg:pl-14 xl:pl-24 ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-[310px] max-h-[275px]">
              <div className="p-4 mx-4">
                <p className="text-gray-600 text-[15px]  text-base">
                  {card.description}
                </p>
              </div>
              <div className="flex flex-wrap p-4">
                <Image  src={card.image} alt="" className="px-4 max-w-[83px]" />
                <div>
                  <h3 className="text-gray-800  font-bold text-[16px] mb-2">
                    {card.title}
                  </h3>
                  <span className="text-gray-400">{card.designation}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Homepage4;
