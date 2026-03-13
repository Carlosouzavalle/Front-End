"use client"
import coursesModule from '@/app/css/courses.module.css';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

function courses() {
    return (
        <section className={coursesModule.course_section}>
            <Swiper modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                speed={5000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}>
                <SwiperSlide className={coursesModule.course_img}>
                    <img src="/imgs/guitarra.jpg" alt="Curso de Violão" />
                </SwiperSlide>
                <SwiperSlide className={coursesModule.course_img}>
                    <img src="/imgs/guitarra.jpg" alt="Curso de Violão" />
                </SwiperSlide>
                <SwiperSlide className={coursesModule.course_img}>
                    <img src="/imgs/guitarra.jpg" alt="Curso de Violão" />
                </SwiperSlide>
                <SwiperSlide className={coursesModule.course_img}>
                    <img src="/imgs/guitarra.jpg" alt="Curso de Violão" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default courses;