"use client";

import "@/styles/root.css";
import styles from "./page.module.css";
import Image from "next/image";
import { HowCleaningHappens } from "../page";
import BookModal, { ServiceSelectModal } from "@/components/BookModal";
import { useState } from "react";

export default function Services() {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <main className={styles.main}>
      <section className="hero2 hero is-medium">
        <div className="hero-body is-justify-content-center">
          <div className="container">
            <section className="section-content has-text-centered">
              <h1 className="title home-title is-1">
                Trusted Commercial & Residential Cleaning Services
              </h1>
              <p className="has-text-white content">
                Soom Cleaning offers exceptional commercial and residential
                cleaning services in Greater Victoria, & surrounding
                communities. Our professional cleaning technicians are 100%
                committed to your satisfaction!
              </p>
              <div
                className={styles.frameWrapper}
                style={{ maxWidth: "250px", margin: "auto" }}
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
                      Get a Quote
                    </button>
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
        <div className="container mb-5">
          <div className="columns is-flex-direction-row is-justify-content-space-evenly gap-2">
            <div className="columns is-flex-direction-column is-justify-content-center p-2">
              <div className="section-content">
                <h3
                  className="text-center"
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    lineHeight: "1.1",
                  }}
                >
                  Some of the services we provide
                </h3>
              </div>
              <div className="section-content">
                <p
                  className="text-center is-size-5"
                  style={{
                    color: "#313345 !important",
                  }}
                >
                  We focus on your needs. Our detailed-oriented team will exceed
                  your expectations.
                </p>
              </div>
            </div>
            <div className="column is-6 columns is-mobile is-multiline is-flex-direction-row is-justify-content-space-around is-align-items-center">
              <div className="column is-half columns is-mobile is-flex-direction-row is-justify-content-center is-align-items-center">
                <Image src="./blue-checkmark.svg" width={20} height={20} />
                <div className="column">Floor and carpet vacuuming</div>
              </div>
              <div className="column is-half columns is-mobile is-flex-direction-row is-justify-content-center is-align-items-center">
                <Image src="./blue-checkmark.svg" width={20} height={20} />
                <div className="column">Interior window cleaning</div>
              </div>
              <div className="column is-half columns is-mobile is-flex-direction-row is-justify-content-center is-align-items-center">
                <Image src="./blue-checkmark.svg" width={20} height={20} />
                <div className="column">Bathroom cleaning</div>
              </div>
              <div className="column is-half columns is-mobile is-flex-direction-row is-justify-content-center is-align-items-center">
                <Image src="./blue-checkmark.svg" width={20} height={20} />
                <div className="column">Floor and carpet cleaning</div>
              </div>
              <div className="column is-half columns is-mobile is-flex-direction-row is-justify-content-center is-align-items-center">
                <Image src="./blue-checkmark.svg" width={20} height={20} />
                <div className="column">Snow removal</div>
              </div>
              <div className="column is-half columns is-mobile is-flex-direction-row is-justify-content-center is-align-items-center">
                <Image src="./blue-checkmark.svg" width={20} height={20} />
                <div className="column">Kitchen cleaning</div>
              </div>
              <div className="column is-half columns is-mobile is-flex-direction-row is-justify-content-center is-align-items-center">
                <Image src="./blue-checkmark.svg" width={20} height={20} />
                <div className="column">Pressure Washing</div>
              </div>
              <div
                className="column is-half columns is-mobile is-flex-direction-row is-justify-content-center is-align-items-center"
                style={{
                  marginBottom: "0.75rem",
                }}
              >
                <Image src="./blue-checkmark.svg" width={20} height={20} />
                <div className="column">Waste removal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-flex-direction-row-reverse is-justify-content-space-evenly">
            <div className="columns is-flex-direction-column is-justify-content-center p-2">
              <div className="section-content">
                {/* <p
                  className="text-center"
                  style={{
                    color: "var(--brand) !important",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    lineHeight: "1.1",
                  }}
                >
                  Perfect care
                </p> */}
                <h3
                  className="text-center"
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    lineHeight: "1.1",
                  }}
                >
                  Types of businesses we clean
                </h3>
              </div>
              <div className="section-content">
                <p
                  className="text-center is-size-5"
                  style={{
                    color: "#313345 !important",
                  }}
                >
                  Stores, medical offices, gyms, salons, spas, law offices,
                  schools, banks, restaurants, churches, commercial lofts,
                  galleries, event venues, municipal offices, etc.
                </p>
              </div>
            </div>
            <div className="column is-6">
              <Image src="./cleaning-service.jpg" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <div
            className={`section-content m-auto has-text-centered ${styles.mx500}`}
          >
            <h4 className={`title is-3 ${styles.serviceText}`}>
              Some of our services
            </h4>
            <p>A selection of the services we provide</p>
          </div>
        </div>
      </section>

      <section className={`hero is-medium ${styles.heroBg}`}>
            </section> 
      <section className={styles.servicesHeroWrapper}>
        <div className={styles.servicesHeroItem}>
          <div className={styles.servicesHeroItemTextBox}>
            <p>House and office Cleaning</p>
          </div>
          <div className={`${styles.servicesHeroItemImageBox}`}>
            <Image src="./services-img-1.jpg" width={200} height={200} alt="" />
          </div>
        </div>
        <div className={styles.servicesHeroItem}>
          <div className={styles.servicesHeroItemTextBox}>
            <p>Move-In/Move-Out Cleaning</p>
          </div>
          <div className={`${styles.servicesHeroItemImageBox}`}>
            <Image src="./services-img-2.jpg" width={200} height={200} alt="" />
          </div>
        </div>
        <div className={styles.servicesHeroItem}>
          <div className={`${styles.servicesHeroItemImageBox}`}>
            <Image src="./services-img-3.jpg" width={200} height={200} alt="" />
          </div>
          <div className={styles.servicesHeroItemTextBox}>
            <p>House and office Cleaning</p>
          </div>
        </div>
        <div className={styles.servicesHeroItem}>
          <div className={`${styles.servicesHeroItemImageBox}`}>
            <Image src="./services-img-4.jpg" width={200} height={200} alt="" />
          </div>
          <div className={styles.servicesHeroItemTextBox}>
            <p>Window Cleaning and others</p>
          </div>
        </div>
      </section> */}

      <section className="mt-20">
        <HowCleaningHappens />
      </section>
      <section className={`section ${styles.sectionWithPadding}`}>
        <div className="container">
          <div
            className={`section-content ${styles.mx500} m-auto has-text-centered`}
          >
            <h4
              className={`title is-3 ${styles.fw500} ${styles.missionLargeText}`}
            >
              We turn mess into marvelous.
              <br /> Discover the power of a spotless space
            </h4>
          </div>
          <div className={`${styles.projectsCompleted} mt-5`}>
            <div className={styles.projectsCompletedItem}>
              <p>400+</p>
              <p>Projects Completed</p>
            </div>
            <div className={styles.projectsCompletedItem}>
              <p>10</p>
              <p>Locations covered wiithin the Canada</p>
            </div>
            <div className={styles.projectsCompletedItem}>
              <p>6</p>
              <p>Awards earned</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
