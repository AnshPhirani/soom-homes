"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/styles/root.css";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import TestimonialCarousel from "@/components/Testimonial";
import Reviews from "@/components/Reviews";
import BookModal, { ServiceSelectModal } from "@/components/BookModal";

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

const carouselImages = {
  "home-cleaning": ["./home-cleaning1.jpg"],
  "business-cleaning": ["./business-cleaning2.jpg"],
  "window-cleaning": ["./window-cleaning2.jpg"],
  "pressure-washing": ["./pressure-washing1.jpg"],
};

export const HowCleaningHappens = () => {
  const [index, setIndex] = useState(0);

  const whereCleaningHappens = [
    "Living Room",
    "Bedroom",
    "Kitchen",
    "Restroom",
  ];

  const imageName = `./how-cleaning-happens-${whereCleaningHappens[index]
    .toLowerCase()
    .replace(" ", "-")}.png`;
  return (
    <>
      <div className="container">
        <div className="section-content p-4">
          <h4 className="title is-5 has-text-centered">
            HOW CLEANING HAPPENS?
          </h4>
          <div className="tabs is-toggle is-toggle-rounded">
            <ul className="is-justify-content-center">
              {whereCleaningHappens.map((val, ind) => {
                return (
                  <li
                    className={index === ind ? "is-active" : null}
                    onClick={() => setIndex(ind)}
                    key={ind}
                  >
                    <a>
                      <span>{val}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <Image
            style={{ height: "100%", width: "100%" }}
            className="hide-on-mobile"
            src={imageName}
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="mt-4">
        <Image
          style={{ height: "100%" }}
          className="hide-on-desktop"
          src={imageName}
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSelect = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const goToNext = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <main>
      <section className="hero is-medium">
        <div className="hero-body is-justify-content-center">
          <div className="container">
            <section className="section-content has-text-centered">
              <h1 className="title home-title is-1">
                Offers commercial and domestic cleaning services
              </h1>
              <p className="has-text-white content">
                Transforming chaos into clean, one space at a time. your trusted
                partner for immaculate spaces.
              </p>
              <div
                className={styles.frameWrapper}
                style={{ maxWidth: "450px", margin: "auto" }}
              >
                <div className={styles.frameContainer}>
                  <div className={styles.frameItem}>
                    <span className="icon">
                      <Image width={15} height={15} alt="" src="./book.svg" />
                    </span>
                    <button
                      className={styles.locationInput}
                      onClick={() => setIsModalActive(true)}
                    >
                      {" "}
                      Book Now{" "}
                    </button>
                  </div>
                  <div className={styles.frameItem}>
                    <span className="icon">
                      <Image
                        width={15}
                        height={15}
                        alt=""
                        src="./call-icon.svg"
                      />
                    </span>
                    <a
                      className={styles.locationInput}
                      href="tel:+1778741-0243"
                    >
                      +1 (778) 741-0243
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <ServiceSelectModal
          isActive={isModalActive}
          setIsActive={setIsModalActive}
        />
      </section>

      <section className="section">
        <div className={`container ${styles.serviceProcessContainer}`}>
          <div className="section-content">
            <p
              className="text-center"
              style={{
                fontSize: "2.5rem",
                lineHeight: "1.2",
                fontWeight: "300",
              }}
            >
              For perfect care
            </p>
            <h3
              className="text-center"
              style={{
                fontSize: "2.5rem",
                lineHeight: "1.2",
                color: "var(--brand) !important",
                fontWeight: "bold",
              }}
            >
              <strong style={{ color: "var(--brand) !important" }}>
                service process
              </strong>
            </h3>
          </div>

          <div className={styles.serviceProcessCardContainer}>
            <div className={`card ${styles.serviceProcessCard}`}>
              <div className={styles.serviceProcessCardHeader}>
                <h4>1</h4>
                <h5>Client consultation</h5>
              </div>
              <hr />
              <p>
                We calculate the scope and estimate through consultation with
                the client.
              </p>
            </div>
            <div className={`card ${styles.serviceProcessCard}`}>
              <div className={styles.serviceProcessCardHeader}>
                <h4>2</h4>
                <h5>Check schedule</h5>
              </div>
              <hr />
              <p>We coordinate schedules with you and confirm your requests.</p>
            </div>

            <div className={`card ${styles.serviceProcessCard}`}>
              <div className={styles.serviceProcessCardHeader}>
                <h4>3</h4>
                <h5>Cleaning in each area</h5>
              </div>
              <hr />
              <p>
                We will visit and carry out the work on the date specified in
                consultation with the customer.
              </p>
            </div>
            <div className={`card ${styles.serviceProcessCard}`}>
              <div className={styles.serviceProcessCardHeader}>
                <h4>4</h4>
                <h5>Balance payment</h5>
              </div>
              <hr />

              <p>
                Once the work is completed, the balance will be paid after
                inspection by the customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-flex-direction-row-reverse is-justify-content-space-evenly">
            <div className="columns is-flex-direction-column is-justify-content-space-evenly p-2">
              <div className="section-content">
                <p
                  className="text-center"
                  style={{
                    color: "var(--brand) !important",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    lineHeight: "1.1",
                  }}
                >
                  Perfect care
                </p>
                <h3
                  className="text-center"
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    lineHeight: "1.1",
                  }}
                >
                  We provide eco-friendly care services.
                </h3>
              </div>
              <div className="section-content">
                <p
                  className="text-center is-size-5"
                  style={{
                    color: "#313345 !important",
                  }}
                >
                  Perfect Care does not use chemicals. <br /> Germany's No. 1
                  environment-friendly chemical agent Infants, pets, the
                  elderly, etc. can reside safely after cleaning. <br />
                  Contains natural ingredients and utilizes the natural
                  properties of natural <br /> ingredients to <br /> powerfully
                  remove dirt, stains, and other contaminants.
                </p>
              </div>
              {/* <div className="section-content">
                <div className={`${styles.projectsCompleted}`}>
                  <div className={styles.projectsCompletedItem}>
                    <Image
                      src="./healthy-cleaning.png"
                      width={40}
                      height={40}
                    />
                    <p>HEALTHY CLEANING</p>
                  </div>
                  <div className={styles.projectsCompletedItem}>
                    <Image
                      src="./quality-guarantee.png"
                      width={40}
                      height={40}
                    />
                    <p>QUALITY GUARANTEE</p>
                  </div>
                  <div className={styles.projectsCompletedItem}>
                    <Image
                      src="./risk-free-police.png"
                      width={40}
                      height={40}
                    />
                    <p>RISK FREE POLICES</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="section-content">
                <Link href="/about" className="button btn-brand is-outline">
                  Read more about us
                  <span className="icon">
                    <Image src="./arrow-right.svg" width={20} height={15} />
                  </span>
                </Link>
              </div> */}
            </div>
            <div className="column is-6">
              <Image
                src="./eco-friendly-products.jpg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-content">
            <p className="text-primary mb-2">SERVICES</p>
            <h3 className="title is-3 fw-bold">What services do we offer?</h3>
          </div>

          <div className={styles.serviceCardContainer}>
            <div className={`card ${styles.serviceCard}`}>
              <div className={styles.serviceCardCarousal}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  centeredSlides={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  effect="fade"
                  modules={[Autoplay, FreeMode, EffectFade]}
                  className="mySwiper"
                >
                  {carouselImages["home-cleaning"].map((image, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Image
                          src={image}
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
              <h5 className="title is-5 mt-4">Home Cleaning</h5>
              <p style={{ color: "black" }}>
                To ensure a pleasant living environment for our customers,
                Perfect Care's professional technology and long-term experience
                completely removes various fine dust and pollutants.
              </p>
            </div>
            <div className={`card ${styles.serviceCard}`}>
              <div className={styles.serviceCardCarousal}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  centeredSlides={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  effect="fade"
                  modules={[Autoplay, FreeMode, EffectFade]}
                  className="mySwiper"
                >
                  {carouselImages["business-cleaning"].map((image, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Image
                          src={image}
                          width={100}
                          height={200}
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
              <h5 className="title is-5 mt-4">Business Cleaning</h5>
              <p style={{ color: "black" }}>
                To keep the office clean, where you spend the most time on
                weekdays, we take care of several spaces at once, such as window
                frames, floors, desks, bathrooms, and conference rooms.
              </p>
            </div>
            <div className={`card ${styles.serviceCard}`}>
              <div className={styles.serviceCardCarousal}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  centeredSlides={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  effect="fade"
                  modules={[Autoplay, FreeMode, EffectFade]}
                  className="mySwiper"
                >
                  {carouselImages["window-cleaning"].map((image, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Image
                          src={image}
                          width={100}
                          height={200}
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
              <h5 className="title is-5 mt-4">Window Cleaning</h5>
              <p style={{ color: "black" }}>
                We will remove any dust or dust generated by the fire and
                collect residues and waste. Perfect Care’s professional staff
                works quickly and quickly.
              </p>
            </div>
            <div className={`card ${styles.serviceCard}`}>
              <div className={styles.serviceCardCarousal}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  centeredSlides={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  effect="fade"
                  modules={[Autoplay, FreeMode, EffectFade]}
                  className="mySwiper"
                >
                  {carouselImages["pressure-washing"].map((image, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Image
                          src={image}
                          width={100}
                          height={200}
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
              <h5 className="title is-5 mt-4">Pressure Washing</h5>
              <p style={{ color: "black" }}>
                Our pressure washing service deeply cleans surfaces and restores
                your home using state-of-the-art equipment. Revitalize your home
                with our expert care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={styles.testimonialItem}>
          <h4 className="title is-4">What our clients say about us</h4>
        </div>
        <Reviews />
      </section>
    </main>
  );
}
