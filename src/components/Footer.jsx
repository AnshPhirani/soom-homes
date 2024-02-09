import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <section className="section">
        <div class="columns is-multiline is-centered is-vcentered">
          <div
            class="column is-half"
            style={{
              display: "flex",
              "justify-content": "center",
              "align-items": "center",
              gap: "20px",
            }}
          >
            <Image
              src={"./tick-icon.svg"}
              width={24}
              height={24}
              className={styles.icon}
            />
            <h4 className={styles.text}>
              Use eco-friendly detergents and chemicals!
            </h4>
          </div>
          <div
            class="column is-half"
            style={{
              display: "flex",
              "justify-content": "center",
              "align-items": "center",
              gap: "20px",
            }}
          >
            <Image
              src={"./tick-icon.svg"}
              width={24}
              height={24}
              className={styles.icon}
            />
            <h4 className={styles.text}>
              Free service to remove harmful bacteria and deodorize!
            </h4>
          </div>
          <div
            class="column is-half"
            style={{
              display: "flex",
              "justify-content": "center",
              "align-items": "center",
              gap: "20px",
            }}
          >
            <Image
              src={"./tick-icon.svg"}
              width={24}
              height={24}
              className={styles.icon}
            />
            <h4 className={styles.text}>Use separate mops for each area!</h4>
          </div>
          <div
            class="column is-half"
            style={{
              display: "flex",
              "justify-content": "center",
              "align-items": "center",
              gap: "20px",
            }}
          >
            <Image
              src={"./tick-icon.svg"}
              width={24}
              height={24}
              className={styles.icon}
            />
            <h4 className={styles.text}>
              Phytoncide Sick Building Syndrome Relief Free Service!
            </h4>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <div className="columns is-flex-direction-row-reverse">
            <div
              className="column is-5 has-text-right-desktop"
              style={{
                display: "flex",
                "justify-content": "center",
                "align-items": "center",
              }}
            >
              <Image
                className={styles.brandImage}
                src="./logo.png"
                width={50}
                height={50}
                alt=""
              />
            </div>
            <div className="column is-7 iss-flex is-align-self-center is-justify-content-center">
              <p className={styles.aboutText}>
                With a passion for cleanliness and a commitment to excellence,
                we offer top-tier cleaning services
              </p>
            </div>
          </div>
          {/* <div className="columns is-multiline is-flex-direction-row-reverse">
          <div className="column is-3">
            <h4 className="is-size-6 mb-4">GET NEWS</h4>
            <div className={styles.newsInputWrapper}>
              <input
                className={styles.newsInput}
                placeholder="Enter email address"
              />
              <button className="button">Submit</button>
            </div>
          </div> 
          <div className="column is-9">
            <div className={`columns is-multiline ${styles.footerNav}`}>
              <div
                className={`column is-4 is-4-desktop mb-5 ${styles.footerNavColumn}`}
              >
                <h4 className="is-size-6 mb-4">INFO</h4>
                <ul>
                  <li className="mb-2">
                    <a
                      target="_self"
                      rel="noopener"
                      className={styles.footerLink}
                      href="/contact"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      target="_self"
                      rel="noopener"
                      href="#"
                      className={styles.footerLink}
                    >
                      Customer Service
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      target="_blank"
                      rel="noopener"
                      className={styles.footerLink}
                      href="#"
                    >
                      Press
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      target="_blank"
                      rel="noopener"
                      className={styles.footerLink}
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className={`column is-4 is-4-desktop mb-5 ${styles.footerNavColumn}`}
              >
                <h4 className="is-size-6 mb-4">INFO</h4>
                <ul>
                  <li className="mb-2">
                    <a
                      target="_self"
                      rel="noopener"
                      className={styles.footerLink}
                      href="/privacy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      target="_self"
                      rel="noopener"
                      className={styles.footerLink}
                      href="/terms-of-service"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className={`column is-4 is-4-desktop mb-5 ${styles.footerNavColumn}`}
              >
                <h4 className="is-size-6 mb-4">CONNECT</h4>
                <ul>
                  <li className="mb-2">
                    <a
                      target="_self"
                      rel="noopener"
                      className={styles.footerLink}
                      href=""
                    >
                      Tiktok
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      target="_self"
                      rel="noopener"
                      className={styles.footerLink}
                      href=""
                    >
                      Facebook
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      target="_self"
                      rel="noopener"
                      className={styles.footerLink}
                      href=""
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      target="_self"
                      rel="noopener"
                      className={styles.footerLink}
                      href="e"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
          <p className={styles.rights}>
            Copyright © 2024 SOOM HOMES All rights reserved.
          </p>
          <p style={{ marginTop: "10px" }}>
            Made with ❤️ by{" "}
            <a
              style={{ color: "#c9c9c9" }}
              href="https://www.linkedin.com/in/ansh-phirani/"
              target="_blank"
              rel="noreferrer"
            >
              Ansh Phirani ✨
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
