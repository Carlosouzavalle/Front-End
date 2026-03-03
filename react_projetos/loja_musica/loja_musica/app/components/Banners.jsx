"use client"
import bannersModule from '@/app/css/banners.module.css'

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

function Banners() {
  return (
    <section className={bannersModule.banners_container}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        className="banners"
      >
        <SwiperSlide>
          <img src="/imgs/img1.jpg" alt="img1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/imgs/img2.jpg" alt="img2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/imgs/img3.jpg" alt="img3" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Banners