import { AiFillStar } from "react-icons/ai";

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

const Reviews = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      // effect="fade"
      breakpoints={{
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1150: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      modules={[EffectFade, Autoplay, FreeMode, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="container shadow-drop-center h-[250px] sm:h-[220px] flex flex-col w-full max-w-lg mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Review by Jane D</h4>
                <span className="text-xs dark:text-gray-400">2 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-yellow-500">
              <AiFillStar />
              <span className="text-xl font-bold">4.5</span>
            </div>
          </div>
          <div className="p-4  text-sm text-justify dark:text-text_color_dark">
            <p>
              I recently used Soom Homes Cleaning service, and the experience
              was fantastic! The platform was user-friendly, and service was
              top-notch, and the team arrived on time. I&apos;ll definitely use
              Soom Homes Cleaning for my future home service needs.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container shadow-drop-center h-[250px] sm:h-[220px] flex flex-col w-full max-w-lg mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Review by Jane D</h4>
                <span className="text-xs dark:text-gray-400">2 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-yellow-500">
              <AiFillStar />
              <span className="text-xl font-bold">4.5</span>
            </div>
          </div>
          <div className="p-4  text-sm text-justify dark:text-text_color_dark">
            <p>
              I recently used Soom Homes Cleaning service, and the experience
              was fantastic! The platform was user-friendly, and service was
              top-notch, and the team arrived on time. I&apos;ll definitely use
              Soom Homes Cleaning for my future home service needs.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container shadow-drop-center h-[250px] sm:h-[220px] flex flex-col w-full max-w-lg mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Review by Jane D</h4>
                <span className="text-xs dark:text-gray-400">2 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-yellow-500">
              <AiFillStar />
              <span className="text-xl font-bold">4.5</span>
            </div>
          </div>
          <div className="p-4  text-sm text-justify dark:text-text_color_dark">
            <p>
              I recently used Soom Homes Cleaning service, and the experience
              was fantastic! The platform was user-friendly, and service was
              top-notch, and the team arrived on time. I&apos;ll definitely use
              Soom Homes Cleaning for my future home service needs.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container shadow-drop-center h-[250px] sm:h-[220px] flex flex-col w-full max-w-lg mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Review by Jane D</h4>
                <span className="text-xs dark:text-gray-400">2 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-yellow-500">
              <AiFillStar />
              <span className="text-xl font-bold">4.5</span>
            </div>
          </div>
          <div className="p-4  text-sm text-justify dark:text-text_color_dark">
            <p>
              I recently used Soom Homes Cleaning service, and the experience
              was fantastic! The platform was user-friendly, and service was
              top-notch, and the team arrived on time. I&apos;ll definitely use
              Soom Homes Cleaning for my future home service needs.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container shadow-drop-center h-[250px] sm:h-[220px] flex flex-col w-full max-w-lg mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Review by Jane D</h4>
                <span className="text-xs dark:text-gray-400">2 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-yellow-500">
              <AiFillStar />
              <span className="text-xl font-bold">4.5</span>
            </div>
          </div>
          <div className="p-4  text-sm text-justify dark:text-text_color_dark">
            <p>
              I recently used Soom Homes Cleaning service, and the experience
              was fantastic! The platform was user-friendly, and service was
              top-notch, and the team arrived on time. I&apos;ll definitely use
              Soom Homes Cleaning for my future home service needs.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

const Container = ({ children }) => {
  return <div className="max-w-[1200px] mx-auto h-full px-3">{children}</div>;
};

const Title = ({ children, className }) => {
  return (
    <h1
      className={`text-4xl border-b-4 dark:text-text_color_dark border-secondary_color w-max font-semibold ${className}`}
    >
      {children}
    </h1>
  );
};

export default Reviews;
