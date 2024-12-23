// import React from 'react'

// const HeroSection = () => {
//   return (
//     <div>
//       <img src="/images/banner.webp" />
//     </div>
//   )
// }

// export default HeroSection
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import React from 'react';
import 'swiper/css';

const HeroSection =() => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper>
  );
};
export default HeroSection;