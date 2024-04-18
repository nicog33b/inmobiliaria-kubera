import Image from "next/image";
import React from "react";
import Slider from "react-slick";


const Hero = () => {
  const slider = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: false,
    autoplay: false,
    arrows: false,
  };

  return (
    <div id="hero" className="relative">
      <Slider ref={slider} {...settings}>
     
        <div>
          <div className="bg-slate-100 p-12 grid grid-cols-12 items-center">
            <div className="pl-8 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
        
            </div>
            <div className="mt-20 md:mt-20 lg:mt-0 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 hidden md:block">
              <Image src='/4.png' className="w-full" width={1024} height={1024 } alt="Loading..." />
            </div>
          </div>
        </div>
 
      </Slider>

    </div>
  );
};

export default Hero;
