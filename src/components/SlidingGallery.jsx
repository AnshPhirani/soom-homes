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
    status: "before",
    image: "./home-gallery/before1.jpg",
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    status: "after",
    image: "./home-gallery/after1.jpg",
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    status: "before",
    image: "./home-gallery/before2.jpg",
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    status: "after",
    image: "./home-gallery/after2.jpg",
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    status: "before",
    image: "./home-gallery/before3.jpg",
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    status: "after",

    image: "./home-gallery/after3.jpg",
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    status: "before",
    image: "./home-gallery/before4.jpg",
    alt: "Gallery Image 7",
  },
  {
    id: 8,
    status: "after",

    image: "./home-gallery/after4.jpg",
    alt: "Gallery Image 8",
  },
  {
    id: 9,
    status: "before",
    image: "./home-gallery/before5.jpg",
    alt: "Gallery Image 9",
  },
  {
    id: 10,
    status: "after",
    image: "./home-gallery/after5.jpg",
    alt: "Gallery Image 10",
  },
  {
    id: 11,
    status: "before",
    image: "./home-gallery/before6.jpg",

    alt: "Gallery Image 11",
  },
  {
    id: 12,
    status: "after",
    image: "./home-gallery/after6.jpg",
    alt: "Gallery Image 12",
  },
  {
    id: 13,
    status: null,
    image: "./home-gallery2/1.jpg",
    alt: "Gallery Image 13",
  },
  {
    id: 14,
    status: null,
    image: "./home-gallery2/2.jpg",
    alt: "Gallery Image 14",
  },
  {
    id: 15,
    status: null,
    image: "./home-gallery2/3.jpg",
    alt: "Gallery Image 15",
  },
  {
    id: 16,
    status: null,
    image: "./home-gallery2/4.jpg",
    alt: "Gallery Image 16",
  },
  {
    id: 17,
    status: null,
    image: "./home-gallery2/5.jpg",
    alt: "Gallery Image 17",
  },
  {
    id: 18,
    status: null,
    image: "./home-gallery2/6.jpg",
    alt: "Gallery Image 18",
  },
  {
    id: 19,
    status: null,
    image: "./home-gallery2/7.jpg",
    alt: "Gallery Image 19",
  },
  {
    id: 20,
    status: null,
    image: "./home-gallery2/8.jpg",
    alt: "Gallery Image 20",
  },
  {
    id: 21,
    status: null,
    image: "./home-gallery2/9.jpg",
    alt: "Gallery Image 21",
  },
  {
    id: 22,
    status: null,
    image: "./home-gallery2/10.jpg",
    alt: "Gallery Image 22",
  },
  {
    id: 23,
    status: null,
    image: "./home-gallery2/11.jpg",
    alt: "Gallery Image 23",
  },
  {
    id: 24,
    status: null,
    image: "./home-gallery2/12.jpg",
    alt: "Gallery Image 24",
  },
];

const SlidingGallery = () => {
  return (
    <div className="container">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        modules={[Pagination, FreeMode, Autoplay]}
        className="mySwiper"
      >
        {galleryImages.map(({ id, image, alt, status }) => {
          return (
            <SwiperSlide
              key={id}
              style={{
                width: 300,
                height: 300,
              }}
            >
              <div className={styles.galleryItem}>
                <Image
                  className={styles.galleryImage}
                  src={image}
                  alt={alt}
                  width={100}
                  height={100}
                />
                {status && (
                  <h4 className={styles.type}>
                    {id % 2 != 0 ? "Before" : "After"}
                  </h4>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SlidingGallery;
