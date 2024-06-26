import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Cardswipe.css";

function Cardswipe() {
  return (
    <div className='container-fluid bannerit'>
    <h1 className='text-center text-light'>SERVICES</h1>
    <h3 className='text-info pt-4 text-center'>EXPLORE OUR SERVICES</h3>
    <div className='slider-container'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <div className='card1'>
            <h3>UI/UX Design</h3>
            <p>We specialize in creating intuitive and engaging user interfaces that enhance the digital experiences of our clients customers, driving higher engagement and satisfaction.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card1'>
            <h3>WEB DEVELOPMENT</h3>
            <p>Our team of skilled developers leverages the latest technologies and frameworks to build responsive and scalable websites that deliver exceptional performance and user experience across devices</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
            <h3>SAP Solutions</h3>
            <p>As a trusted SAP partner, we provide comprehensive SAP solutions tailored to the unique requirements of businesses, helping them streamline operations, optimise processes and achieve their strategic objectives.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
            <h3>KPO</h3>
            <p>We offer KPO services that enable businesses to leverage our expertise in data analysis, research and other knowledge-intensive tasks to gain valuable insights and make informed decisions.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
            <h3>BPO</h3>
            <p>Our BPO services encompass a wide range of back-office functions, including customer support, data entry and administrative tasks, allowing businesses to focus on their core competencies while we handle the rest.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
            <h3>Digital Marketing</h3>
            <p>Our team of skilled developers leverages the latest technologies and frameworks to build responsive and scalable websites that deliver exceptional performance and user experience across devices</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}

export default Cardswipe;

