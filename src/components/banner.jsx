import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function Banner() {
  return (
    <div
      id="home"
      className="container mx-auto section max-w-[1200px] px-3 items-center"
    >
      <div className="w-full">
        <div className="block font-black text-center font-secondary text-[30px]">
          Hello My name is MUHAMAD FIKRI HAIKAL, I am
          <div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "WordPress Developer",
                2000, // wait 2s before replacing "Mice" with "Hamsters"
                "UI Web Designer",
                2000,
                "FronEnd Web Developer",
                2000,
                "BackEnd Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
              className="ml-3 text-blue-600"
            />
          </div>
        </div>
        <div className="max-w-[750px] text-center mx-auto mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea, repudiandae, exercitationem cum corporis nobis perferendis vero aut fugiat ad amet nihil, dolorum similique veniam! Iure cum omnis quas et?
        </div>
      </div>
    </div>
  )
}
