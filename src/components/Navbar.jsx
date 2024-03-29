"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import BookModal from "./BookModal";
import Link from "next/link";

export default function Navbar() {
  const toggleMobileNav = function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    document.querySelector(".navbar-burger")?.classList.toggle("is-active");
    document.querySelector(".navbar-menu")?.classList.toggle("is-active");
  };

  const unToggleMobileNav = (newPath) => {
    setCurrentUrl(newPath);
    console.log(newPath);
    document.querySelector(".navbar-burger")?.classList.remove("is-active");
    document.querySelector(".navbar-menu")?.classList.remove("is-active");
  };

  //all Nav Items
  const navItems = {
    Home: "/",
    About: "/about",
    Services: "/services",
    Contact: "/contact",
  };

  const [currentUrl, setCurrentUrl] = useState("/");

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.location !== "undefined"
    ) {
      setCurrentUrl("/" + window.location.pathname.split("/").slice(-1).pop());
      // console.log(window.location.pathname);
    }
  }, []);

  //Modal

  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <>
      {/* hide-on-mobile hide-on-tablet */}
      <nav
        className="navbar is-fixed-top is-align-items-center "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand is-flex is-justify-content-center">
          <Link
            href="/"
            className="navbar-brand-link"
            style={{
              // backgroundColor: "red",
              gap: "0px",
            }}
          >
            <Image
              src={"./SOOM-LOGO2.png"}
              alt={"SOOM HOMES"}
              width={"50"}
              height={"50"}
            />
            <div>
              <h3 style={{ color: "black", textAlign: "center" }}>SOOM</h3>
              <h3 style={{ color: "var(--brand)", textAlign: "center" }}>
                CLEANING
              </h3>
            </div>
          </Link>

          <a
            role="button"
            className="navbar-burger is-align-self-center"
            aria-label="menu"
            aria-expanded="false"
            data-target="NavContent"
            onClick={(event) => toggleMobileNav(event)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="NavContent" className="navbar-menu is-align-self-center">
          <div className="navbar-start m-auto" style={{ gap: "20px" }}>
            {Object.keys(navItems).map((val, ind) => {
              const isActive = currentUrl === navItems[val];

              return (
                <Link
                  key={ind}
                  className={`navbar-item ${isActive ? "is-active" : ""} `}
                  href={navItems[val]}
                  onClick={() => unToggleMobileNav(navItems[val])}
                >
                  {val}
                </Link>
              );
            })}
            <div className="navbar-item hide-on-desktop show-on-tablet">
              {/* <button
                onClick={() => setIsModalActive(true)}
                className="button is-black hover-brand"
              >
                Get a Quote
              </button> */}
              <button
                className="button is-black hover-brand"
                disabled
                style={{
                  border: "none !important",
                  borderRadius: "2px",
                }}
              >
                Victoria, CA
              </button>
            </div>
          </div>
        </div>
        <div className="navbar-item hide-on-mobile hide-on-tablet">
          {/* <button
            // onClick={() => setIsModalActive(true)}
            className="button is-black hover-brand"
          >
            Get a Quote
          </button> */}
          <button
            className="button is-black hover-brand"
            disabled
            style={{
              border: "none !important",
              borderRadius: "2px",
            }}
          >
            Victoria, CA
          </button>
        </div>
      </nav>
      {/* <BookModal isActive={isModalActive} setIsActive={setIsModalActive} /> */}
    </>
  );
}
