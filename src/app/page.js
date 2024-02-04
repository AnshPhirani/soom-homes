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
                style={{ maxWidth: "500px", margin: "auto" }}
              >
                <div className={styles.frameContainer}>
                  <div className={styles.frameItem}>
                    <span className="icon">
                      <Image width={15} height={15} alt="" src="./book.svg" />
                    </span>
                    <button className={styles.locationInput}> Book </button>
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
                    <button className={styles.locationInput}>
                      {" "}
                      (700) 985-2497{" "}
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className={styles.frameContainer}>
                <button className={styles.frameItem}>Book</button>
                <button className={styles.frameItem}>7009852497</button>
              </div> */}
            </section>
          </div>
        </div>
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
          <div className="columns is-flex-direction-row-reverse">
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
                <p className="has-text-black-black5 text-center is-size-5">
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
            <div className={`card ${styles.serviceCard} ${styles.hasBrandBg}`}>
              <div className={styles.serviceCardIcon}>
                <Image
                  src="./home-cleaning.jpg"
                  width={80}
                  height={80}
                  // fill={true}
                  // style={{ objectFit: "contain" }}
                />
              </div>
              <h5 className="title is-5 has-text-white ">Home Cleaning</h5>
              <p>
                To ensure a pleasant living environment for our customers,
                Perfect Care's professional technology and long-term experience
                completely removes various fine dust and pollutants.
              </p>
            </div>
            <div className={`card ${styles.serviceCard} ${styles.hasBlackBg}`}>
              <div className={styles.serviceCardIcon}>
                <Image src="./cleaning-item-3.svg" width={20} height={20} />
              </div>
              <h5 className="title is-5 has-text-white">Business Cleaning</h5>
              <p>
                To keep the office clean, where you spend the most time on
                weekdays, we take care of several spaces at once, such as window
                frames, floors, desks, bathrooms, hallways, conference rooms,
                and break rooms.
              </p>
            </div>

            <div className={`card ${styles.serviceCard} ${styles.hasBrandBg}`}>
              <div className={styles.serviceCardIcon}>
                <Image src="./cleaning-item-2.svg" width={20} height={20} />
              </div>
              <h5 className="title is-5 has-text-white">Window Cleaning</h5>
              <p>
                We will remove any dust or dust generated by the fire and
                collect residues and waste. Perfect Care’s professional staff
                works quickly and quickly.
              </p>
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

      <section className="section">
        <div className={styles.testimonialItem}>
          <h4 className="title is-4">What our clients say about us</h4>
        </div>
        <Reviews />
      </section>
    </main>
  );
}

{
  /* <div className="section-content">
<div className={styles.testimonialContainer}>
<div className={styles.testimonialItem}>
  <button
    className={styles.testimonialController}
    onClick={goToPrevious}
    disabled={currentSlide === 0}
  >
    <Image
      src="./chevron-back-outline.svg"
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
      src="./chevron-forward-outline.svg"
      width={25}
      height={25}
    />
  </button>
</div>
</div>
</div> */
}
{
  /* <div className="hide-on-desktop mt-5">
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

<div className="carousel-item">
  <Image
    src="./testimonial-1.svg"
    width={500}
    height={500}
    alt=""
  />
</div>
<div className="carousel-item">
  <Image
    src="./testimonial-2.svg"
    width={500}
    height={500}
    alt=""
  />
</div>

<div className="carousel-item">
  <Image
    src="./testimonial-3.svg"
    width={500}
    height={500}
    alt=""
  />
</div>
</Carousel>
</div> */
}
{
  /* <div className="hide-on-mobile mt-5">
<div className="columns">
<div className="column is-4">
  <Image
    src="./testimonial-1.svg"
    width={360}
    height={360}
    alt=""
  />
</div>
<div className="column is-4">
  <Image
    src="./testimonial-2.svg"
    width={500}
    height={500}
    alt=""
  />
</div>
<div className="column is-4">
  <Image
    src="./testimonial-3.svg"
    width={360}
    height={360}
    alt=""
  />
</div>
</div>
</div> */
}
