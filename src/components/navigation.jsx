import React from "react"
import { Link } from "react-scroll"
import { BiHomeAlt, BiUser, BiCodeAlt } from "react-icons/bi"

export default function Navigation() {
  return (
    <div className="fixed left-0 right-0 z-10 text-center bottom-4 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto lg:right-5">
      <div className="flex justify-between p-2 mx-auto bg-white border-solid rounded-full text-secondary border-gray-400 border-[2px] max-w-[200px] lg:flex-col">
        <Link
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          to="home"
          activeClass="active"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiHomeAlt />
        </Link>
        <Link
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          to="profile"
          activeClass="active"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiUser />
        </Link>
        <Link
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          to="portfolio"
          activeClass="active"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiCodeAlt />
        </Link>
      </div>
    </div>
  )
}
