import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function Banner() {
  return (
    <div
      id="home"
      className="container mx-auto section max-w-[1200px] px-3 items-center"
    >
      <div data-aos="zoom-in-up" data-aos-duration="1000" className="w-full">
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
          I am a seasoned Web Developer with expertise in HTML, CSS, JavaScript,
          PHP, React.js, and Node.js. I specialize in leveraging WordPress CMS
          to create high-quality websites efficiently and cost-effectively. My
          passion is crafting dynamic, responsive sites that look stunning and
          perform seamlessly. Let’s connect and transform your web ideas into
          reality with style and functionality!
        </div>
      </div>
    </div>
  )
}
