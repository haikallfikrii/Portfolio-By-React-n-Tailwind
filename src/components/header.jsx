import React from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"

export default function Header() {
  return (
    <div className="container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0">
      <div className="flex justify-between py-5 item-center">
        <div
          className="text-gradient font-secondary"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="900"
          data-aos-delay="0"
        >
          <a href="/">
            <h1 className="text-[30px] leading none font bold">FIKRI</h1>
            <h4>HAIKAL</h4>
          </a>
        </div>
        <div
          className="flex items-center space-x-3"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="900"
          data-aos-delay="0"
        >
          <a href="https://github.com/haikallfikrii">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/muhamad-fikri-haikal-0127aa2a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}
