import React from "react"

export default function Portfolio() {
  return (
    <div id="portfolio" className="section">
      <div className="container mx-auto max-w-[1200px] px-3 pt-3 pb-20">
        <div
          className="flex flex-col justify-between lg:flex-row mb-[50px] lg:align-center"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <div className="order-2 mt-[79px] lg:order-1">
            <h4 className="text-secondary font-secondary text-[24px]">
              Recent To Work
            </h4>
            <div className="text-gradient font-primary max-w-[700px] mx-auto text-[15px]">
              The following is my portfolio in developing websites including
              those made with HTML5, Tailwind.css, React.js. Apart from that,
              there are also websites that are built with CMW WordPress with
              Elementor Page Builder to make it more efficient and save money
              and time.
            </div>
          </div>
          <div className="order-1 text-center lg:order-2 mt-[70px]">
            <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[50px]">
              10+{" "}
            </h2>
            <div>Completed Projects</div>
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-4 text-center lg:grid-cols-4"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <div className="w-full">
            <div className="relative flex items-center justify-center w-full h-full p-5 overflow-hidden bg-white rounded-lg group">
              <img src="/images/port1.png" alt="" />
              <div className="absolute flex items-center w-full h-full p-5 transition opacity-0 bg-primary group-hover:opacity-100">
                <div className="w-full text-center text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <a href="https://blog-website-9ow7-git-detail-artikel-ahmakbardevs-projects.vercel.app/">
                  <div className="inline-block px-5 mb-2 bg-white rounded-full">
                    <h4 className="text-gradient">Web Blog</h4>
                  </div>
                  </a>
                  <p>
                    I have experience in creating blog websites using React.js,
                    Tailwind.css and Vite with trendy modern designs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="relative flex items-center justify-center w-full h-full p-5 overflow-hidden bg-white rounded-lg group">
              <img src="/images/port2.png" alt="" />
              <div className="absolute flex items-center w-full h-full p-5 transition opacity-0 bg-primary group-hover:opacity-100">
                <div className="w-full text-center text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <a href="https://toko-sepatu-amber.vercel.app/">
                  <div className="inline-block px-5 mb-2 bg-white rounded-full">
                    <h4 className="text-gradient">Ecommerce Web</h4>
                  </div>
                  </a>
                  <p>
                    This website is very suitable to make things easier for
                    sellers, where buyers can place orders and have automatic
                    delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="relative flex items-center justify-center w-full h-full p-5 overflow-hidden bg-white rounded-lg group">
              <img src="/images/port3.png" alt="" />
              <div className="absolute flex items-center w-full h-full p-5 transition opacity-0 bg-primary group-hover:opacity-100">
                <div className="w-full text-center text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <a href="https://dev-fikri-haikal.pantheonsite.io/">
                  <div className="inline-block px-5 mb-2 bg-white rounded-full">
                    <h4 className="text-gradient">Personal Portfolio</h4>
                  </div>
                  </a>
                  <p>
                    This is my personal portfolio website which was developed by
                    CMS WordPress with the Elementor page builder.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="relative flex items-center justify-center w-full h-full p-5 overflow-hidden bg-white rounded-lg group">
              <img src="/images/port4.png" alt="" />
              <div className="absolute flex items-center w-full h-full p-5 transition opacity-0 bg-primary group-hover:opacity-100">
                <div className="w-full text-center text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <a href="https://todolist-app-two-jet.vercel.app/">
                  <div className="inline-block px-5 mb-2 bg-white rounded-full">
                    <h4 className="text-gradient" >ToDoList App</h4>
                  </div>
                  </a>
                  <p>
                  This application is made to record the work that will be done by users created with React.js and Vite to optimize good performance.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="relative flex items-center justify-center w-full h-full p-5 overflow-hidden bg-white rounded-lg group">
              <img src="/images/port5.png" alt="" />
              <div className="absolute flex items-center w-full h-full p-5 transition opacity-0 bg-primary group-hover:opacity-100">
                <div className="w-full text-center text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <div className="inline-block px-5 mb-2 bg-white rounded-full">
                    <h4 className="text-gradient">Booking Web</h4>
                  </div>
                  <p>
                    This is a website for a reflexology clinic that explains the
                    details of its services, and there is also a booking
                    feature.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="relative flex items-center justify-center w-full h-full p-5 overflow-hidden bg-white rounded-lg group">
              <img src="/images/port6.png" alt="" />
              <div className="absolute flex items-center w-full h-full p-5 transition opacity-0 bg-primary group-hover:opacity-100">
                <div className="w-full text-center text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <div className="inline-block px-5 mb-2 bg-white rounded-full">
                    <h4 className="text-gradient">Modern Design</h4>
                  </div>
                  <p>
                    A modern landing page design contains application release
                    advertisements and detailed feature information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="relative flex items-center justify-center w-full h-full p-5 overflow-hidden bg-white rounded-lg group">
              <img src="/images/port7.png" alt="" />
              <div className="absolute flex items-center w-full h-full p-5 transition opacity-0 bg-primary group-hover:opacity-100">
                <div className="w-full text-center text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <div className="inline-block px-5 mb-2 bg-white rounded-full">
                    <h4 className="text-gradient">Company Profile</h4>
                  </div>
                  <p>
                  A website that is the main face of the company with professional design.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="relative flex items-center justify-center w-full h-full p-5 overflow-hidden bg-white rounded-lg group">
              <img src="/images/port8.png" alt="" />
              <div className="absolute flex items-center w-full h-full p-5 transition opacity-0 bg-primary group-hover:opacity-100">
                <div className="w-full text-center text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <div className="inline-block px-5 mb-2 bg-white rounded-full">
                    <h4 className="text-gradient">LMS Web App</h4>
                  </div>
                  <p>
                    (Lerarnig Management System) website is a system that
                    provides online courses equipped with a payment gateway
                    features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
