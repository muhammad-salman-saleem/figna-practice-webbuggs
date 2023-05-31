import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hpg6IMG1 from "../../../public/images/pngegg.png";
import hpg6IMG2 from "../../../public/images/pngegg 1.png";
import hpg6IMG3 from "../../../public/images/pngegg 7.png";
import hpg6IMG4 from "../../../public/images/pngegg 2.png";
import hpg6IMG5 from "../../../public/images/pngegg 5.png";
import hpg6IMG6 from "../../../public/images/pngegg 6.png";
import Image, { StaticImageData } from "next/image";

interface itemsData {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
};
const HomePage62: React.FC  = () => {
  const itemsData:itemsData[] = [
    {
      id: 1,
      title: "Salesforce",
      description: "Automatically map salesand calldata into your CRM fields.",
      image: hpg6IMG1,
    },
    {
      id: 2,
      title: "Webhooks",
      description: "Provide real-time message information to your chosen apps.",
      image: hpg6IMG2,
    },
    {
      id: 3,
      title: "Skype",
      description:
        "Transform your skype numbers into a live answering services",
      image: hpg6IMG3,
    },
    {
      id: 4,
      title: "Insightly",
      description:
        "Automatically map sales and call data into your CRM fields.",
      image: hpg6IMG4,
    },
    {
      id: 5,
      title: "Google Analytics ",
      description: "Collect call and chat data to feed into your analytics.",
      image: hpg6IMG5,
    },
    {
      id: 6,
      title: "Google Sheets",
      description: "Insert call data into your spreadsheets in real time.",
      image: hpg6IMG6,
    },
    {
      id: 7,
      title: "Salesforce",
      description: "Automatically map salesand calldata into your CRM fields.",
      image: hpg6IMG1,
    },
    {
      id: 8,
      title: "Webhooks",
      description: "Provide real-time message information to your chosen apps.",
      image: hpg6IMG2,
    },
    {
      id: 9,
      title: "Skype",
      description:
        "Transform your skype numbers into a live answering services",
      image: hpg6IMG3,
    },
    {
      id: 10,
      title: "Insightly",
      description:
        "Automatically map sales and call data into your CRM fields.",
      image: hpg6IMG4,
    },
    {
      id: 11,
      title: "Google Analytics ",
      description: "Collect call and chat data to feed into your analytics.",
      image: hpg6IMG5,
    },
    {
      id: 12,
      title: "Google Sheets",
      description: "Insert call data into your spreadsheets in real time.",
      image: hpg6IMG6,
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
    rows: 2,
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
    <div className="container mx-auto py-8 pb-20 px-10">
      <div className="   text-center justify-between my-4">
        <h2 className="md:text-[37px] sm:text-[33px] text-[30px] lg:text-[42px] font-bold text-blue-500 my-3 ">
        INTEGRATE WITHE EASE
        </h2>
        <h3 className="max-w-[371px] text-[18px] mx-auto  flex text-center">
          We plug seamlessly into the tools you use everyday.
        </h3>
      </div>
      <div className="items-center justify-between  ">
      <Slider {...settings}>
        {itemsData.map((item) => (
        <div key={item.id} className="grid gap-6 lg:gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <div key={item.id} className="p-4 lg:p-8 ">
              <div className=" text-center items-center justify-between px-10 py-10 shadow appearance-none border rounded  h-[334px]">
                <div className="flex justify-center items-center py-4 max-h-[130px] ">
                  <Image src={item.image} alt="" />
                </div>
                <div className="text-[18px] max-w-[274px] mx-auto my-4 items-center  ">
                  <h2 className=" font-bold">{item.title}</h2>
                  <div className=" mx-auto  flex text-center ">
                    <p className="py-3">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default HomePage62;
