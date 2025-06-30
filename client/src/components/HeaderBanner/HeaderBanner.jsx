import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import './styles.css'
import 'animate.css';
import img1 from "../../assets/images/img copy.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.jpg";


function HeaderBanner() {
  return (
    <div>
      <div className="relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="w-[20px]">
            <img className="overflow-hidden md:max-h-[600px]" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-[20px]">
            <img className="overflow-hidden md:max-h-[600px]" src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-[20px]">
            <img className="overflow-hidden md:max-h-[600px]" src={img3} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="absolute top-0 bg-[#1111117d] z-10 w-full min-h-full">
          {/* This div is use for a overlay on background image */}
        </div>

        <div className="px-6 lg:px-0 w-full md:space-y-4 text-center z-20 absolute top-[45%] left-1/2 text-white -translate-x-1/2 -translate-y-1/2">
          <p className="animate__animated animate__fadeInDown md:text-xl font-semibold">Event Management</p>
          <h1 className="animate__animated animate__fadeInDown text-2xl lg:text-5xl lg:font-black font-bold">Organize. Engage. Celebrate.</h1>
          <p className="animate__animated animate__fadeInDown md:text-xl md:pt-4 md:px-36">
            Plan and manage unforgettable events with ease. Join us to streamline your event experience and bring people together!
          </p>
        </div>


      </div>
    </div>
  );
}

export default HeaderBanner;
