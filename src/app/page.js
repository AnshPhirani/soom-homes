"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/styles/root.css";
import styles from "./page.module.css";
import { useState } from "react";

const HowCleaningHappens = () => {
  const [index, setIndex] = useState(0);

  const whereCleaningHappens = [
    "Living Room",
    "Bedroom",
    "Kitchen",
    "Restroom",
  ];

  const imageName = `/soom-homes/how-cleaning-happens-${whereCleaningHappens[
    index
  ]
    .toLowerCase()
    .replace(" ", "-")}.svg`;

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
                style={{ maxWidth: "700px", margin: "auto" }}
              >
                <div className={styles.frameContainer}>
                  <div className={styles.frameItem}>
                    <span className="icon">
                      <Image
                        width={15}
                        height={15}
                        alt=""
                        src="/soom-homes/search-icon.svg"
                      />
                    </span>
                    {/* <input
                      type="text"
                      className={styles.locationInput}
                      id="location-input"
                      placeholder="Enter your location"
                    /> */}
                    <div className={styles.dropdownSelect}>
                      <select defaultValue={""} className={styles.dropdown}>
                        <option value="">Select Location</option>
                        <option>Greater Victoria</option>
                        <option>Lanford</option>
                        <option>North Sannich</option>
                        <option>Sooke</option>
                        <option>Ducan</option>
                        <option>Nanaimo</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.frameItem}>
                    <span className="icon">
                      <Image
                        width={15}
                        height={15}
                        alt=""
                        src="soom-homes/book.svg"
                      />
                    </span>
                    <div className={styles.dropdownSelect}>
                      <select defaultValue={""} className={styles.dropdown}>
                        <option value="">Type of service</option>
                        <option>Service 1</option>
                        <option>Service 2</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.frameItem}>
                    <button className="button btn-brand">Request</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-flex-direction-row-reverse">
            <div className="column is-6">
              <div className="section-content">
                <p className="text-primary mb-2">ABOUT SOOM HOMES</p>
                <h3 className="title is-3 fw-bold">Why Choose Us?</h3>
              </div>
              <div className="section-content">
                <p className="has-text-black-black5">
                  Lörem ipsum trassa plogga möling. Monoprebelt fasatt men
                  skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag.
                  Eposade farir, anteng även om neresön holl. Tinat makrokirat
                  såsom multinar. Lörem ipsum trassa plogga möling. Monoprebelt
                  fasatt men skimma. Mäskap tritise i onade utom biogisk, att
                  rit-avdrag. Eposade farir, anteng även om neresön holl. Tinat
                  makrokirat såsom multinar.{" "}
                </p>
              </div>
              <div className="section-content">
                <div
                  className={`is-flex is-justify-content-space-between ${styles.projectsCompleted}`}
                >
                  <div className={styles.projectsCompletedItem}>
                    <p>HEALTHY CLEANING</p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam, eum temporibus odit provident ipsam iure eius
                      fuga ipsum ullam alias!
                    </p>
                  </div>
                  <div className={styles.projectsCompletedItem}>
                    <p>QUALITY GUARANTEE</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus ut eaque voluptates ab magnam et quis quaerat
                      numquam voluptatum sed?
                    </p>
                  </div>
                  <div className={styles.projectsCompletedItem}>
                    <p>RISK FREE POLICES</p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Voluptatem iste esse quia officiis corporis natus qui
                      earum cupiditate deleniti minus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="section-content">
                <a href="/about" className="button btn-brand is-outline">
                  Read more about us
                  <span className="icon">
                    <Image
                      src="soom-homes/arrow-right.svg"
                      width={20}
                      height={20}
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="column is-6">
              <Image
                src="soom-homes/why-choose-us.svg"
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
            <div className={` ${styles.serviceCardWrapper}`}>
              <div
                className={`card ${styles.serviceCard} ${styles.hasBrandBg}`}
              >
                <div className={styles.serviceCardIcon}>
                  <Image
                    src="soom-homes/cleaning-item-1.svg"
                    width={20}
                    height={20}
                  />
                </div>
                <h5 className="title is-5 has-text-white">
                  Commercial Cleaning
                </h5>
                <p>
                  Lörem ipsum trassa plogga möling. Monoprebelt fasatt men
                  skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag.
                  Eposade farir, anteng även om neresön holl. att rit-avdrag.
                  Eposade farir, anteng även om neresön holl.
                </p>
              </div>
              <div
                className={`card ${styles.serviceCard} ${styles.hasBlackBg}`}
              >
                <div className={styles.serviceCardIcon}>
                  <Image
                    src="soom-homes/cleaning-item-3.svg"
                    width={20}
                    height={20}
                  />
                </div>
                <h5 className="title is-5 has-text-white">Office Cleaning</h5>
                <p>
                  Lörem ipsum trassa plogga möling. Monoprebelt fasatt men
                  skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag.
                  Eposade farir, anteng även om neresön holl. att rit-avdrag.
                  Eposade farir, anteng även om neresön holl.
                </p>
              </div>
            </div>
            <div className={` ${styles.serviceCardWrapper}`}>
              <div
                className={`card ${styles.serviceCard} ${styles.hasBrandBg}`}
              >
                <div className={styles.serviceCardIcon}>
                  <Image
                    src="soom-homes/cleaning-item-2.svg"
                    width={20}
                    height={20}
                  />
                </div>
                <h5 className="title is-5 has-text-white">Domestic Cleaning</h5>
                <p>
                  Lörem ipsum trassa plogga möling. Monoprebelt fasatt men
                  skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag.
                  Eposade farir, anteng även om neresön holl. att rit-avdrag.
                  Eposade farir, anteng även om neresön holl.
                </p>
              </div>
              <div
                className={`card ${styles.serviceCard} ${styles.hasBlackBg}`}
              >
                <div className={styles.serviceCardIcon}>
                  <Image src="/cleaning-item-4.svg" width={20} height={20} />
                </div>
                <h5 className="title is-5 has-text-white">
                  End of Lease Cleaning
                </h5>
                <p>
                  Lörem ipsum trassa plogga möling. Monoprebelt fasatt men
                  skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag.
                  Eposade farir, anteng även om neresön holl. att rit-avdrag.
                  Eposade farir, anteng även om neresön holl.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.cleaningItemsWrapper}>
            {/* <div className={styles.cleaningItems}>
              <div className={styles.cleaningItemsSingle}>
                <Image src="/cleaning-brush.svg" width={300} height={300} />
              </div>
              <div className={styles.cleaningItemsSingle}>
                <Image src="/cleaning-bucket.svg" width={300} height={300} />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section>
        <HowCleaningHappens />
      </section>
      <section className="section">
        <div className="container">
          <div className="section-content">
            <div className={styles.testimonialContainer}>
              <div className={styles.testimonialItem}>
                <button
                  className={styles.testimonialController}
                  onClick={goToPrevious}
                  disabled={currentSlide === 0}
                >
                  <Image
                    src="/soom-homes/chevron-back-outline.svg"
                    width={25}
                    height={25}
                  />
                </button>
              </div>
              <div className={styles.testimonialItem}>
                <h4 className="title is-4">What our clients say about us</h4>
              </div>
              <div className={styles.testimonialItem}>
                <button
                  className={styles.testimonialController}
                  onClick={goToNext}
                  disabled={currentSlide === 2}
                >
                  <Image
                    src="/soom-homes/chevron-forward-outline.svg"
                    width={25}
                    height={25}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="hide-on-desktop mt-5">
            <Carousel
              selectedItem={currentSlide}
              onChange={handleSelect}
              showArrows={false}
              showIndicators={false}
              showThumbs={false}
              infiniteLoop={false}
              autoPlay={false}
              interval={0}
              swipeable={false}
              stopOnHover={false}
            >
              {/* style={{ marginRight: '-80px' }} */}
              <div className="carousel-item">
                <Image
                  src="/soom-homes/testimonial-1.svg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
              <div className="carousel-item">
                <Image
                  src="/soom-homes/testimonial-2.svg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
              {/* style={{ marginLeft: '-80px' }} */}
              <div className="carousel-item">
                <Image
                  src="/soom-homes/testimonial-3.svg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
            </Carousel>
          </div>
          <div className="hide-on-mobile mt-5">
            <div className="columns">
              <div className="column is-4">
                <Image
                  src="/soom-homes/testimonial-1.svg"
                  width={360}
                  height={360}
                  alt=""
                />
              </div>
              <div className="column is-4">
                <Image
                  src="/soom-homes/testimonial-2.svg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
              <div className="column is-4">
                <Image
                  src="/soom-homes/testimonial-3.svg"
                  width={360}
                  height={360}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* <TestimonialCarousel /> */}
        </div>
      </section>
    </main>
  );
}
