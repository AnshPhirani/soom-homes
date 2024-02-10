"use client";

import "@/styles/root.css";
import styles from "./page.module.css";
import Image from "next/image";

export default function Contact() {
  const handleSubmission = async (event) => {
    event.preventDefault();
    // Send data to web2forms
    const formData = new FormData(event.target);
    formData.append("access_key", "935dafb1-152e-4c34-b260-8a22f6e1e1d8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  };

  return (
    <main className={styles.main}>
      <section>
        <div className="columns">
          <div className={`column is-6 ${styles.columnWithImage}`}>
            <Image src={"./contact-hero.svg"} width={500} height={500} />
          </div>
          <div className="column is-6 is-align-self-center">
            <div className={styles.formWrapper}>
              <div className={`section-content`}>
                <h4 className={`title is-4 ${styles.contactText}`}>
                  We want to hear from you!
                </h4>
                <p>Our customer support is always active 24/7</p>
              </div>
              <form className="mt-4" method="post" onSubmit={handleSubmission}>
                <div className="field">
                  <label className="label">Full name</label>
                  <input name="Name" className={`input ${styles.input}`} />
                </div>
                <div className="field">
                  <label className="label">Phone number</label>
                  <input
                    name="Phone Number"
                    className={`input ${styles.input}`}
                  />
                </div>
                <div className="field">
                  <label className="label">Location</label>
                  <input name="Location" className={`input ${styles.input}`} />
                </div>
                <div className="field">
                  <label className="label">Your message</label>
                  <textarea
                    name="Message"
                    className={`input ${styles.input}`}
                  ></textarea>
                </div>
                <div className="field mt-5">
                  <button className="button btn-brand">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
