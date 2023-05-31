import React from 'react'
import npgIMG1 from "../../public/images/Group 5.png";
import npgIMG2 from "../../public/images/Group 4.png";
import npgIMG3 from "../../public/images/Group 3.png";
import npgIMG4 from "../../public/images/Group 2.png";
import Image from 'next/image';

const NavHeaderTop = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-between bg-blue-600 px-8 py-2">
      <div className="text-white font-medium mb-2 sm:mb-0">855.371.0722</div>
      <div className="flex gap-4">
        <Image
          src={npgIMG1}
          alt=""
          className="h-6"
        />

        <Image
          src={npgIMG2}
          alt=""
          className="h-6"
        />
        <Image
          src={npgIMG3}
          alt=""
          className="h-6"
        />
        <Image
          src={npgIMG4}
          alt=""
          className="h-6"
        />
      </div>
    </div>
    </div>
  )
}

export default NavHeaderTop
