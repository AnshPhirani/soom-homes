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
    image: "./home-gallery/before1.jpg",
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    image: "./home-gallery/after1.jpg",
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    image: "./home-gallery/before2.jpg",
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    image: "./home-gallery/after2.jpg",
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    image: "./home-gallery/before3.jpg",
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    image: "./home-gallery/after3.jpg",
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    image: "./home-gallery/before4.jpg",
    alt: "Gallery Image 7",
  },
  {
    id: 8,
    image: "./home-gallery/after4.jpg",
    alt: "Gallery Image 8",
  },
  {
    id: 9,
    image: "./home-gallery/before5.jpg",
    alt: "Gallery Image 9",
  },
  {
    id: 10,
    image: "./home-gallery/after5.jpg",
    alt: "Gallery Image 10",
  },
  {
    id: 11,
    image: "./home-gallery/before6.jpg",

    alt: "Gallery Image 11",
  },
  {
    id: 12,
    image: "./home-gallery/after6.jpg",
    alt: "Gallery Image 12",
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
