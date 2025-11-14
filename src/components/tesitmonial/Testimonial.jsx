import React, { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../wow/Title";

import testimonial1 from "../../assets/images/testimonial1.png";
import Testimonial2 from "../../assets/images/testimonial2.png";
import Testimonial3 from "../../assets/images/testimonial3.png";
import testimonial4 from "../../assets/images/testimonial4.png";
import quote from "../../assets/images/quote.png"; // FIXED IMPORT

// NEXT ARROW
function SampleNextArrow({ onClick }) {
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md
       text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 
       shadow-2xl cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

// PREV ARROW
function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 
      rounded-md text-2xl text-gray-400 flex justify-center items-center 
      absolute top-0 right-20 shadow-2xl cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => setDotActive(next),

    appendDots: (dots) => (
      <div style={{ borderRadius: "10px", padding: "10px" }}>
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),

    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          background: i === dotActive ? "#ff014f" : "gray",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      ></div>
    ),
  };

  return (
    <section id="testimonial" className="w-full py-20 border-b border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* ======= SLIDE ONE ======= */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              {/* LEFT */}
              <div className="w-full lg:w-[35%] h-full bg-linear-to-r from-[#1e2024]
               to-[#23272b] p-8 rounded-lg shadow-2xl flex flex-col gap-8 justify-center">
                <img
                  className="h-72 rounded-lg object-cover"
                  src={testimonial1}
                  alt="testimonial1"
                />

                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-red-700 tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Alisha Jon</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-full lg:w-[60%] flex flex-col justify-between">
                <img className="w-20 " src={quote} alt="quote" />

                <div className="w-full h-[70%] py-10 bg-linear-to-r from-[#1e2024]
                 to-[#23272b] rounded-lg shadow-2xl p-4 flex flex-col justify-center gap-4 lg:gap-8">
                  <div className="flex flex-col lg:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-medium tracking-wide">
                        Travel Mobile App Design.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2015 - Aug 30, 2021
                      </p>
                    </div>

                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>

                  <p className="text-base text-gray-400 font-medium tracking-wide leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus ratione quos debitis exercitationem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== SLIDE TWO ===== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              {/* LEFT */}
              <div className="w-full lg:w-[35%] bg-linear-to-r from-[#1e2024] 
              to-[#23272b] p-8 rounded-lg shadow-2xl flex flex-col gap-8 justify-center">
                <img
                  className="h-72 bg-center rounded-lg object-cover"
                  src={Testimonial2}
                  alt="Testimonial2"
                />

                <div>
                  <p className="text-xs uppercase text-red-700 tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Jone Duone Joe</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-full lg:w-[60%] flex flex-col justify-between">
                <img className="w-20" src={quote} alt="quote" />

                <div className="w-full h-[70%] py-10 bg-linear-to-r from-[#1e2024]
                 to-[#23272b] rounded-lg shadow-2xl p-4 flex flex-col justify-center gap-4">
                  <div className="flex flex-col py-6 border-b-2 border-b-gray-900">
                    <h3 className="text-xl lg:text-2xl font-medium tracking-wide">
                      Travel Mobile App Design.
                    </h3>
                    <p className="text-base text-gray-400 mt-3">
                      via Upwork - Mar 4, 2015 - Aug 30, 2021
                    </p>

                    <div className="text-yellow-500 flex gap-1 mt-4">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>

                  <p className="text-base text-gray-400 font-medium leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== SLIDE THREE ===== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] bg-linear-to-r from-[#1e2024]
               to-[#23272b] p-8 rounded-lg shadow-2xl flex flex-col gap-8 justify-center">
                <img
                  className="h-72 rounded-lg object-cover"
                  src={Testimonial3}
                  alt="Testimonial3"
                />

                <div>
                  <p className="text-xs uppercase text-red-700 tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold"> Alisu Joe</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-[60%] flex flex-col justify-between">
                <img className="w-20" src={quote} alt="quote" />

                <div className="w-full h-[70%] py-10 bg-linear-to-r from-[#1e2024]
                 to-[#23272b] rounded-lg shadow-2xl p-4 flex flex-col justify-center gap-4">
                  <div className="flex flex-col py-6 border-b-2 border-b-gray-900">
                    <h3 className="text-xl lg:text-2xl font-medium tracking-wide">
                      Travel Mobile App Design.
                    </h3>

                    <p className="text-base text-gray-400 mt-3">
                      via Upwork - Mar 4, 2015 - Aug 30, 2021
                    </p>

                    <div className="text-yellow-500 flex gap-1 mt-4">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>

                  <p className="text-base text-gray-400 leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== SLIDE FOUR ===== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] bg-linear-to-r from-[#1e2024]
               to-[#23272b] p-8 rounded-lg shadow-2xl flex flex-col gap-8 justify-center">
                <img
                  className="h-72 rounded-lg object-cover"
                  src={testimonial4}
                  alt="testimonial4"
                />

                <div>
                  <p className="text-xs uppercase text-red-700 tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold"> Yamene </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-[60%] flex flex-col justify-between">
                <img className="w-20" src={quote} alt="quote" />

                <div className="w-full h-[70%] py-10 bg-linear-to-r from-[#1e2024]
                 to-[#23272b] rounded-lg shadow-2xl p-4 flex flex-col justify-center gap-4">
                  <div className="flex flex-col py-6 border-b-2 border-b-gray-900">
                    <h3 className="text-xl lg:text-2xl font-medium tracking-wide">
                      Travel Mobile App Design.
                    </h3>

                    <p className="text-base text-gray-400 mt-3">
                      via Upwork - Mar 4, 2015 - Aug 30, 2021
                    </p>

                    <div className="text-yellow-500 flex gap-1 mt-4">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>

                  <p className="text-base text-gray-400 leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
