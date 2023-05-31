import React from "react";
import hpgIMG1 from "../../../public/images/Group 27.png";
import hpgIMG2 from "../../../public/images/Group 26.png";
import hpgIMG3 from "../../../public/images/Group 23.png";
import hpgIMG4 from "../../../public/images/Group 22.png";
import hpgIMG5 from "../../../public/images/Group 24.png";
import hpgIMG6 from "../../../public/images/Group 28.png";
import Image, { StaticImageData } from "next/image";

interface itemsData {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
};
const Homepage2: React.FC  = () => {
  // data section/
  const itemsData:itemsData[] = [
    {
      id: 1,
      title: "Always Available",
      description: "Never Miss an Opertunity When Clint Call",
      image: hpgIMG1,
    },
    {
      id: 2,
      title: "Capture every Leads",
      description: "Be there for your prospective customers anywhere, anytime",
      image: hpgIMG2,
    },
    {
      id: 3,
      title: "No voicemails No Boots",
      description: "TWin more Business with real peoples not automated voices",
      image: hpgIMG3,
    },
    {
      id: 4,
      title: "Never Close for Business",
      description: "Work from home, office or anywhere",
      image: hpgIMG4,
    },
    {
      id: 5,
      title: "Mange Your calls ",
      description: "Busy? Have an important meeting? We’ ve got you covered",
      image: hpgIMG5,
    },
    {
      id: 6,
      title: "Know your callers",
      description:
        "We recognize your returning callers for a personalized experience",
      image: hpgIMG6,
    },
  ];
  return (
    <div className="container mx-auto px-10 my-20 ">
      <div className="   text-center justify-between">
        <h1 className="md:text-[35px] sm:text-[30px] text-[30px] lg:text-[42px] font-bold text-blue-500 my-10">
          WHY IT WORK
        </h1>
      </div>
      <div className="items-center justify-between container mx-auto ">
      <div className="grid gap-6 sm:gap-10 lg:gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {itemsData.map((item) => (
          <div key={item.id} className="p-4  ">
            <div className="text-center items-center justify-between px-10 py-6 pb-10 shadow appearance-none border rounded max-h-[311px] ">
              <div className="flex justify-center items-center py-4 max-h-[100px] ">
                <Image src={item.image} alt="" />
              </div>
              <div className="text-[18px] max-w-[274px] mx-auto my-6 text-center  items-center  ">
                <h2 className=" font-bold">{item.title}</h2>
                <div className=" mx-auto max-w-[253px] flex text-center ">
                    <p className="py-3">{item.description}</p>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Homepage2;
