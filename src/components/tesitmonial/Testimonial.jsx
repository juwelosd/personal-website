import React, { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../wow/Title";

import testimonial1 from "../../assets/images/testimonial1.png";
import Testimonial2 from "../../assets/images/testimonial2.png";
import Testimonial3 from "../../assets/images/testimonial3.png";
import testimonial4 from "../../assets/images/testimonial4.png";
import quote from "../../assets/images/quote.png";

// NEXT ARROW
function SampleNextArrow({ onClick }) {
  return (
    <div
      className="w-12 h-12 md:w-14 md:h-14 bg-[#0c1821] hover:bg-black duration-300 rounded-full
      flex justify-center items-center text-gray-400 text-2xl absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-10 cursor-pointer shadow-lg"
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
      className="w-12 h-12 md:w-14 md:h-14 bg-[#0c1821] hover:bg-black duration-300 rounded-full
      flex justify-center items-center text-gray-400 text-2xl absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-10 cursor-pointer shadow-lg"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);

  const testimonials = [
    {
      img: testimonial1,
      name: "Alisha Jon",
      title: "Operation Officer",
      company: "Bound - Trolola",
      project: "Travel Mobile App Design",
      date: "via Upwork - Mar 4, 2015 - Aug 30, 2021",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ratione quos debitis exercitationem.",
    },
    {
      img: Testimonial2,
      name: "Jone Duone Joe",
      title: "Operation Officer",
      company: "Bound - Trolola",
      project: "Travel Mobile App Design",
      date: "via Upwork - Mar 4, 2015 - Aug 30, 2021",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: Testimonial3,
      name: "Alisu Joe",
      title: "Operation Officer",
      company: "Bound - Trolola",
      project: "Travel Mobile App Design",
      date: "via Upwork - Mar 4, 2015 - Aug 30, 2021",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: testimonial4,
      name: "Yamene",
      title: "Operation Officer",
      company: "Bound - Trolola",
      project: "Travel Mobile App Design",
      date: "via Upwork - Mar 4, 2015 - Aug 30, 2021",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

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
      <div>
        <ul className="flex gap-3 justify-center mt-5">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full cursor-pointer ${
          i === dotActive ? "bg-red-600" : "bg-gray-500"
        }`}
      ></div>
    ),
  };

  return (
    <section id="testimonial" className="w-full py-20 border-b border-black">
      <div className="flex justify-center items-center text-center mb-10">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                {/* LEFT */}
                <div className="w-full lg:w-1/3 flex flex-col bg-linear-to-r from-[#1e2024] to-[#23272b] p-6 md:p-8 rounded-lg shadow-2xl gap-6 justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-60 md:h-72 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-xs uppercase text-red-700 tracking-wide mb-1">
                      {item.company}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold">{item.name}</h3>
                    <p className="text-gray-400">{item.title}</p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-full lg:w-2/3 flex flex-col gap-4">
                  <img className="w-16 md:w-20" src={quote} alt="quote" />
                  <div className="bg-linear-to-r from-[#1e2024] to-[#23272b] p-4 md:p-6 rounded-lg shadow-2xl flex flex-col gap-4">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-gray-800 pb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-medium">{item.project}</h3>
                        <p className="text-gray-400 text-sm mt-1">{item.date}</p>
                      </div>
                      <div className="flex text-yellow-500 gap-1 mt-2 lg:mt-0">
                        {Array(item.rating)
                          .fill()
                          .map((_, i) => (
                            <RiStarFill key={i} />
                          ))}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base leading-6 font-medium">
                      {item.feedback}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
