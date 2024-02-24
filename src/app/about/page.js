import "@/styles/root.css";
import styles from "./page.module.css";
import Image from "next/image";

export default function About() {
  return (
    <main className={styles.main}>
      <section className={`section ${styles.aboutTopContainer}`}>
        <div className="container">
          <div className={`section-content ${styles.mx500}`}>
            <h4 className={`title is-4 ${styles.aboutTopText}`}>
              We are a company that prioritize customer&apos;s satisfaction
            </h4>
          </div>
        </div>
      </section>
      <section className={`hero is-medium ${styles.heroBg}`}></section>
      <section className={styles.missionWrapper}>
        <div className={styles.mission}>
          <div className={styles.missionIcon}>
            <Image src="./mission-goal.jpg" width={25} height={25} />{" "}
            <span>Mission</span>
          </div>
          <div className={styles.missionText}>
            <p>
              We provide the best service to our customers through experts who
              have completed professional training. We will become a cleaning
              company that constantly strives to provide better service.
            </p>
          </div>
        </div>
      </section>
      <section className="section pt-0 pb-0">
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
          <div className={`${styles.projectsCompleted}`}>
            <div className={styles.projectsCompletedItem}>
              <p>400+</p>
              <p>Projects Completed</p>
            </div>
            <div className={styles.projectsCompletedItem}>
              <p>10</p>
              <p>Locations covered wiithin the Canada</p>
            </div>
            <div className={styles.projectsCompletedItem}>
              <p>7</p>
              <p>Awards earned</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`section ${styles.offBg}`}>
        <div className="container">
          <div className={styles.sparkleContainer}>
            <p className={styles.sparkleHeading}>SOOM HOMES CLEANING</p>
            <p className={styles.sparkleContent}>
              Lörem ipsum trassa plogga möling. Monoprebelt fasatt men skimma.
              Mäskap tritise i onade utom biogisk, att rit-avdrag. Eposade
              farir, anteng även om neresön holl. Tinat makrokirat såsom
              multinar. Lörem ipsum trassa plogga möling. Monoprebelt fasatt men
              skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag.
              Eposade farir, anteng även om neresön holl. Tinat makrokirat såsom
              multinar. Lörem ipsum trassa plogga möling. Monoprebelt fasatt men
              skimma. Mäskap tritise i onade utom biogisk, att rit-avdrag.
              Eposade farir, anteng även om neresön holl. Tinat makrokirat såsom
              multinar.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="container">
          <div
            className={`section-content has-text-centered m-auto ${styles.mx700}`}
          >
            <h4 className="title is-3">Our Team</h4>
            <p className={`${styles.fw400}`}>
              Meet the faces that make our mission possible and learn more about
              the talent and commitment that sets us apart.
            </p>
          </div>
          <div className={styles.teamWrapper}>
            <div className={styles.teamItem}>
              <div className={styles.teamImage}>
                <Image
                  src={"./about-photos/dohyun-photo.jpg"}
                  width={150}
                  height={150}
                />
              </div>
              <div className={styles.teamMeta}>
                <p>Dohyun C.</p>
                <p>Co-Founder, Soom Cleaning</p>
              </div>
            </div>
            <div className={styles.teamItem}>
              <div className={styles.teamImage}>
                <Image
                  src={"./about-photos/vansh-photo.jpg"}
                  width={150}
                  height={150}
                />
              </div>
              <div className={styles.teamMeta}>
                <p>Vansh B.</p>
                <p>Co-Founder, Soom Cleaning</p>
              </div>
            </div>
            <div className={styles.teamItem}>
              <div className={styles.teamImage}>
                <Image
                  src={"https://randomuser.me/api/portraits/men/78.jpg"}
                  width={150}
                  height={150}
                />
              </div>
              <div className={styles.teamMeta}>
                <p>John K.</p>
                <p>Sales Manager, Soom Cleaning</p>
              </div>
            </div>
            <div className={styles.teamItem}>
              <div className={styles.teamImage}>
                <Image
                  src={"https://randomuser.me/api/portraits/men/18.jpg"}
                  width={150}
                  height={150}
                />
              </div>
              <div className={styles.teamMeta}>
                <p>Harry N.</p>
                <p>Sales Manager, Soom Cleaning</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
