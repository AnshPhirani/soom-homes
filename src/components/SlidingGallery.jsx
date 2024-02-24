import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import styles from "./SlidingGallery.module.css";

const galleryImages = [
  {
    id: 1,
    image: "./home-gallery/home-gallery1.jpg",
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    image: "./home-gallery/home-gallery2.jpg",
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    image: "./home-gallery/home-gallery3.jpg",
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    image: "./home-gallery/home-gallery1.jpg",
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    image: "./home-gallery/home-gallery2.jpg",
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    image: "./home-gallery/home-gallery3.jpg",
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    image: "./home-gallery/home-gallery1.jpg",
    alt: "Gallery Image 4",
  },
  {
    id: 8,
    image: "./home-gallery/home-gallery2.jpg",
    alt: "Gallery Image 5",
  },
  {
    id: 9,
    image: "./home-gallery/home-gallery3.jpg",
    alt: "Gallery Image 6",
  },
];

const SlidingGallery = () => {
  return (
    <div className="container">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={5}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        modules={[Pagination, FreeMode, Autoplay]}
        className="mySwiper"
      >
        {galleryImages.map(({ id, image, alt }) => {
          return (
            <SwiperSlide
              key={id}
              style={{
                width: 300,
                height: 300,
              }}
            >
              <Image
                src={image}
                alt={alt}
                width={100}
                height={100}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SlidingGallery;
