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

const reviewsData = [
  {
    id: 1,
    name: "Henry Denson",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    date: "21 Nov 2023",
    rating: 5.0,
    review:
      "Fantastic services for cleaning carpets! Their professionalism and attention to detail are quite evident. My carpets feel and look like new—very well done.",
  },
  {
    id: 2,
    name: "Sam Smith",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    date: "2 days ago",
    rating: 4.5,
    review: "They did a great job on my move out cleaning! Highly recommended",
  },

  {
    id: 3,
    name: "Steven James",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    date: "2 days ago",
    rating: 4.5,
    review:
      "Fantastic carpet cleaning assistance! Our carpets appear like new, and the crew worked quickly and expertly. In order to get rid of tough stains, they went abov...",
  },
  {
    id: 4,
    name: "Ella Smith",
    image: "https://randomuser.me/api/portraits/women/64.jpg",
    date: "21 Nov 2023",
    rating: 5.0,
    review:
      "Fantastic services for cleaning carpets! Their professionalism and attention to detail are quite evident. My carpets feel and look like new—very well done.",
  },
  {
    id: 5,
    name: "Wilson",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    date: "5 days ago",
    rating: 5.0,
    review: "very good job, everything asked for was professionally done.",
  },
];

// const ReviewsData = [
//   {
//     id: 1,
//     name: "Henry Denson",
//     date: "21 Nov 2023",
//     rating: 4.5,
//     review:
//       "Fantastic services for cleaning carpets! Their professionalism and attention to detail are quite evident. My carpets feel and look like new—very well done.",
//   },
// ]

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
      {reviewsData.map((review) => (
        <SwiperSlide>
          <div className="container shadow-drop-center h-[250px] sm:h-[220px] flex flex-col w-full max-w-lg mx-auto divide-y rounded-md divide-gray-700">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src={review.image}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Review by {review.name}</h4>
                  <span className="text-xs dark:text-gray-400">
                    {review.date}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-yellow-500">
                <AiFillStar />
                <span className="text-xl font-bold">{review.rating}</span>
              </div>
            </div>
            <div className="p-4  text-sm text-justify dark:text-text_color_dark">
              <p>{review.review}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
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
