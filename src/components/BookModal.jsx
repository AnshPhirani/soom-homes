import { useEffect, useState } from "react";
import styles from "./BookModal.module.css";
import Image from "next/image";

const ModalSuccess = ({ showSuccess, setShowSuccess }) => {
  return (
    <>
      <div className={`modal ${showSuccess ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className={`modal-content ${styles.successModalContent}`}>
          {/* <p className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
                    </p> */}
          <div className="section-content has-text-centered">
            <Image
              className="mb-3"
              src={"./check.png"}
              width={100}
              alt={""}
              height={100}
            />
            <h4 className="title is-3">Thank You!</h4>
            <button
              className="button is-black"
              style={{ borderRadius: "10px" }}
              onClick={() => setShowSuccess(false)}
            >
              Okay
            </button>
          </div>
        </div>
        <button
          onClick={() => setShowSuccess(false)}
          className="modal-close is-large"
          aria-label="close"
        ></button>
      </div>
    </>
  );
};

export default function BookModal({ isActive, setIsActive, selectedServices }) {
  const [showSuccess, setShowSuccess] = useState(false);

  const sendFromDataToEmail = async (event) => {
    const formData = new FormData(event.target);
    formData.append("serviceType", selectedServices.serviceType);
    formData.append("services", selectedServices.services.join(", "));
    formData.append("access_key", "e6782151-1889-4159-8312-9a653214761a");

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

  const handleSubmit = (e) => {
    //prevent default action (reload)
    e.preventDefault();
    sendFromDataToEmail(e);
    setIsActive(false);
    setShowSuccess(true);
    return;

    // if (typeof window !== "undefined") {
    //   if (typeof octaValidate !== "function") return false;

    //   //check if octavalidate is defined
    //   if (typeof octaValidate === "function") {
    //     const ov = new octaValidate("form_book", {
    //       errorElem: {
    //         inp_service: "inp_service_wrapper",
    //       },
    //     });
    //     //validate
    //     if (ov.validate()) {
    //       //Hide the book modal
    //       setIsActive(false);
    //       //show the success modal
    //       setShowSuccess(true);
    //     }
    //   }
    // } else {
    //   return false;
    // }
  };

  return (
    <>
      <div className={`modal ${isActive ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className={styles.modalDeleteWrapper}>
          <button
            onClick={() => setIsActive(false)}
            className="delete"
            aria-label="close"
          >
            <Image src="/modal-close.png" width={20} height={20} />
          </button>
        </div>
        <div className="modal-card">
          <section className={`modal-card-body ${styles.modalCardBody}`}>
            <div className={styles.formWrapper}>
              <div className={styles.modalDeleteWrapperMobile}>
                <div
                  className={`section-content ${styles.modalDeleteWrapperMobileItem}`}
                >
                  <h4 className={`title is-5 ${styles.bookModalTitle}`}>
                    Book a Service
                  </h4>
                  <p className={styles.bookModalContent}>
                    Please enter your correct details.
                  </p>
                </div>
                <div className={styles.modalDeleteWrapperMobileItem}>
                  <button
                    onClick={() => setIsActive(false)}
                    className="delete"
                    aria-label="close"
                  ></button>
                </div>
              </div>
              <form id="form_book" method="post" onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Full Name</label>
                  <input
                    name="Full Name"
                    placeholder="Required"
                    octavalidate="R,NAME"
                    id="inp_fullname"
                    className={`input ${styles.input}`}
                  />
                </div>
                <div className="field">
                  <label className="label">Phone Number</label>
                  <input
                    name="Phone Number"
                    placeholder="Required"
                    octavalidate="R,DIGITS"
                    id="inp_phone"
                    className={`input ${styles.input}`}
                  />
                </div>
                <div className="field">
                  <label className="label">Location</label>
                  {/* <input
                    placeholder="Required"
                    octavalidate="R,TEXT"
                    id="inp_location"
                    className={`input ${styles.input}`}
                  /> */}
                  <div className={`select is-fullwidth`}>
                    <select
                      name="Location"
                      defaultValue={""}
                      octavalidate="R,TEXT"
                      id="inp_location"
                      className={styles.select}
                    >
                      <option value={""}>Select a Location</option>
                      <option>Greater Victoria</option>
                      <option>Langford</option>
                      <option>Sidney</option>
                      <option>Sooke</option>
                      <option>Ducan</option>
                    </select>
                  </div>
                </div>
                {/* <div id="inp_service_wrapper">
                  <div className="field">
                    <label className="label">Service</label>
                    <div className={`select is-fullwidth`}>
                      <select
                        defaultValue={""}
                        octavalidate="R,TEXT"
                        id="inp_service"
                        className={styles.select}
                      >
                        <option value={""}>Select a service</option>
                        <option>Service 1</option>
                        <option>Service 2</option>
                        <option>Service 3</option>
                      </select>
                    </div>
                    <small className={styles.small}>
                      You can select more than one service
                    </small>
                  </div>
                </div> */}
                <div className={styles.formDivider}></div>
                <div className="field">
                  <div className="pb-4">
                    <h4 className={`title is-5 ${styles.bookModalTitle}`}>
                      Availability
                    </h4>
                    <p className={styles.bookModalContent}>
                      Please enter your availability
                    </p>
                  </div>
                  <div className={styles.availabilityWrapper}>
                    <div className={styles.availabilityItem}>
                      <div className="field">
                        <label>Date</label>
                        <div className="control has-icons-left">
                          <input
                            name="Date"
                            // placeholder="Required"
                            // octavalidate="R"
                            id="inp_date"
                            className={`input ${styles.input}`}
                            type="date"
                          />
                          <span className="icon is-small is-left">
                            <Image
                              src="./calendar.svg"
                              width={20}
                              height={20}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.availabilityItem}>
                      <div className="field">
                        <label>Time</label>
                        <div className="control has-icons-left">
                          <input
                            name="Time"
                            // placeholder="Required"
                            // octavalidate="R"
                            id="inp_time"
                            className={`input ${styles.input}`}
                            type="time"
                          />
                          <span className="icon is-small is-left">
                            <Image src="./clock.svg" width={20} height={20} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="inp_service_wrapper"
                  className="is-flex is-justify-content-center is-align-items-center is-flex-direction-column"
                >
                  <div className="field mt-5 has-text-centered">
                    <button form="form_book" className="button is-black">
                      Book Now
                    </button>
                  </div>
                  <small className={styles.small}>
                    Our customer service will contact you within 24 hours
                  </small>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      <ModalSuccess showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
    </>
  );
}

const services = {
  residential: [
    {
      name: "Regular house cleaning",
    },
    {
      name: "Deep cleans",
    },
    {
      name: "Move-in/out",
    },
    {
      name: "Windows",
    },
    {
      name: "Carpets",
    },
    {
      name: "Kitchens",
    },
    {
      name: "Lawn Care",
    },
    {
      name: "Pressure Washing",
    },
    {
      name: "Soft Washing",
    },
  ],
  commercial: [
    {
      name: "Office Cleaning",
    },
    {
      name: "Retail store Cleaning",
    },
    {
      name: "Restaurant Cleaning",
    },
    {
      name: "Medical facilities Cleaning",
    },
    {
      name: "Schools Cleaning",
    },
    {
      name: "Churches Cleaning",
    },
    {
      name: "Warehouses Cleaning",
    },
    {
      name: "Construction sites Cleaning",
    },
    {
      name: "Exterior maintenance",
    },
    {
      name: "Post construction Cleaning",
    },
  ],
};

export function ServiceSelectModal({ isActive, setIsActive }) {
  const [showBookModal, setShowBookModal] = useState(false);
  const [serviceType, setServiceType] = useState("residential");
  const [selectedServices, setSelectedServices] = useState({});

  const handleSubmit = (e) => {
    // setShowBookModal(true);
    //prevent default action (reload)
    // console.log(showBookModal);
    e.preventDefault();

    // get all the checked services and service type
    selectedServices.services = Array.from(
      e.target.querySelectorAll('input[type="checkbox"]:checked')
    ).map((input) => input.id);
    selectedServices.serviceType = serviceType;
    setSelectedServices(selectedServices);

    setIsActive(false);
    setShowBookModal(true);
    return;

    // if (typeof window !== "undefined") {
    //   if (typeof octaValidate !== "function") return false;

    //   //check if octavalidate is defined
    //   if (typeof octaValidate === "function") {
    //     const ov = new octaValidate("form_services", {
    //       errorElem: {
    //         inp_service: "inp_service_wrapper1",
    //       },
    //     });
    //     //validate
    //     if (ov.validate()) {
    //       console.log("anshphirani");
    //       console.log(showBookModal);
    //       //Hide the book modal
    //       setIsActive(false);
    //       //show the success modal
    //       // setShowSuccess(true);

    //       // show the book modal (Details form)
    //       setShowBookModal(true);
    //     } else {
    //       // setIsActive(false);
    //       // setShowBookModal(true);
    //     }
    //   }
    // } else {
    //   return false;
    // }
  };

  return (
    <>
      <div className={`modal ${isActive ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className={styles.modalDeleteWrapper}>
          <button
            onClick={() => setIsActive(false)}
            className="delete"
            aria-label="close"
          >
            <Image src="/modal-close.png" width={20} height={20} />
          </button>
        </div>
        <div className="modal-card">
          <section className={`modal-card-body ${styles.modalCardBody}`}>
            <div className={styles.formWrapper}>
              <div className={styles.modalDeleteWrapperMobile}>
                <div
                  className={`section-content ${styles.modalDeleteWrapperMobileItem}`}
                >
                  <h4 className={`title is-5 ${styles.bookModalTitle}`}>
                    Select Services
                  </h4>
                </div>
                <div className={styles.modalDeleteWrapperMobileItem}>
                  <button
                    onClick={() => setIsActive(false)}
                    className="delete"
                    aria-label="close"
                  ></button>
                </div>
              </div>
              <form id="form_services" method="post" onSubmit={handleSubmit}>
                <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white  rounded-lg flex mb-6 gap-6">
                  <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r border border-gray-200">
                    <div class="flex items-center ps-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50">
                      <input
                        id="residential"
                        type="radio"
                        value="residential"
                        name="service-type"
                        checked={serviceType === "residential"}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        onClick={() => setServiceType("residential")}
                      />
                      <label
                        for="residential"
                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                      >
                        Residential
                      </label>
                    </div>
                  </li>
                  <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r border border-gray-200">
                    <div class="flex items-center ps-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50">
                      <input
                        id="commercial"
                        type="radio"
                        value="commercial"
                        name="service-type"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        selected={serviceType === "commercial"}
                        onClick={() => setServiceType("commercial")}
                      />
                      <label
                        for="commercial"
                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                      >
                        Commercial
                      </label>
                    </div>
                  </li>
                </ul>

                <ul className="grid w-full gap-6 md:grid-cols-3">
                  {services[serviceType].map((service) => (
                    <li key={service.name}>
                      <input
                        type="checkbox"
                        id={service.name}
                        value=""
                        className="hidden peer"
                        required=""
                      />
                      <label
                        htmlFor={service.name}
                        className="inline-flex items-center justify-between w-full h-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50"
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            {service.name}
                          </div>
                          {/* <div className="w-full text-sm">
                          A JavaScript library for building user interfaces.
                        </div> */}
                        </div>
                      </label>
                    </li>
                  ))}
                  {/* 
                  <li>
                    <input
                      type="checkbox"
                      id="react-option"
                      value=""
                      className="hidden peer"
                      required=""
                      octaValidate="R"
                    />
                    <label
                      htmlFor="react-option"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          React Js
                        </div>
                        <div className="w-full text-sm">
                          A JavaScript library for building user interfaces.
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="flowbite-option"
                      value=""
                      className="hidden peer"
                    />
                    <label
                      htmlFor="flowbite-option"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <svg
                          className="mb-2 text-green-400 w-7 h-7"
                          fill="currentColor"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z" />
                        </svg>
                        <div className="w-full text-lg font-semibold">
                          Vue Js
                        </div>
                        <div className="w-full text-sm">
                          Vue.js is an model–view front end JavaScript
                          framework.
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="angular-option"
                      value=""
                      className="hidden peer"
                    />
                    <label
                      htmlFor="angular-option"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <svg
                          className="mb-2 text-red-600 w-7 h-7"
                          fill="currentColor"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z" />
                        </svg>
                        <div className="w-full text-lg font-semibold">
                          Angular
                        </div>
                        <div className="w-full text-sm">
                          A TypeScript-based web application framework.
                        </div>
                      </div>
                    </label>
                  </li> */}
                </ul>
                <div
                  id="inp_service_wrapper1"
                  className="is-flex is-justify-content-center is-align-items-center is-flex-direction-column"
                >
                  <div className="field mt-5 has-text-centered">
                    <button
                      form="form_services"
                      type="submit"
                      className="button is-black"
                    >
                      Next
                    </button>
                  </div>
                  <small className={styles.small}>
                    Our customer service will contact you within 24 hours
                  </small>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      <BookModal
        isActive={showBookModal}
        setIsActive={setShowBookModal}
        selectedServices={selectedServices}
      />
    </>
  );
}
