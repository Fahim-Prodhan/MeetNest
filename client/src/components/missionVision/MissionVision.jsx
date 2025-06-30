import React from 'react';
import img1 from '../../assets/images/mission.png';
import img2 from '../../assets/images/vision.png';
import 'aos/dist/aos.css';

const MissionAndVision = () => {
  return (
    <div>
      <h1 className="text-center pb-3 md:pb-12 text-2xl md:text-4xl font-bold mt-12">Mission & Vision</h1>

      <div
        className="grid lg:grid-cols-2 items-center gap-6"
      >
        <div>
          <h1 className="text-3xl font-black pb-4 text-[#F6B17A]">Our Mission</h1>
          <p className="md:text-xl">
            Our mission is to revolutionize the event planning experience by providing a seamless platform that empowers organizers to create, manage, and promote events efficiently. We strive to bring people together through impactful and memorable events that foster connection, creativity, and collaboration.
          </p>
        </div>
        <div className="order-first lg:order-last">
          <img src={img1} alt="Mission" />
        </div>
      </div>

      <div
        className="grid lg:grid-cols-2 items-center mt-12 gap-6"
      >
        <div>
          <img src={img2} alt="Vision" />
        </div>
        <div>
          <h1 className="text-3xl font-black pb-4 text-[#F6B17A]">Our Vision</h1>
          <p className="md:text-xl">
            Our vision is to be the leading platform for event innovation, where technology meets creativity to enable unforgettable experiences. We envision a world where anyone can effortlessly bring people together through events that inspire, educate, and celebrate, regardless of scale or purpose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
