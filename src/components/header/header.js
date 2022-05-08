import React, { Component } from "react";

class Header extends Component {
  render() {
       const styletransform = {
        "will-change": "background",
        "background-color": "rgb(25, 27, 53)",
        opacity: "1"
    };
    return (
      <div
        data-animation="default"
        class="navbar w-nav"
        data-easing2="ease-in-quad"
        data-easing="ease-in-quad"
        data-collapse="medium"
        data-w-id="860509fe-e33d-2178-c932-660930665508"
        role="banner"
        data-duration="400"
        data-doc-height="1"
        style={{styletransform}}
      >
        <div class="nav-block">
          <a
            href="/"
            aria-current="page"
            class="brand w-nav-brand w--current"
            aria-label="home"
          >
            <img
              src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea487dc1067dfcd2af9_Banky%20Logo.svg"
              width="91"
              alt=""
              class="brand"
            />
          </a>
          <nav role="navigation" class="nav-menu w-nav-menu">
            <a 
            href="#How-It-Works" 
            class="nav-link w-nav-link">
              How it works
            </a>
            <a
             href="#Features" 
             class="nav-link w-nav-link">
              Features
            </a>
            <a
             href="#Testimonials"
              class="nav-link w-nav-link w--current">
              Testimonials
            </a>
            <a 
            href="#FAQs"
             class="nav-link w-nav-link">
              FAQs
            </a>
          </nav>
          <div class="link-arrow nav">
            <a
             href="#"
              class="link-button w-button">
              Buy Template
            </a>
            <img
              src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea44949516b538c5659_Arrow%20Icon.png"
              loading="lazy"
              alt=""
              class="arrow"
            />
          </div>
          <div
            class="menu-button w-nav-button"
            style={{"-webkit-user-select": "text"}}
            aria-label="menu"
            role="button"
            tabindex="0"
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <div class="menu-icon w-icon-nav-menu"></div>
          </div>
        </div>
        <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
      </div>
    );
  }
}

export default Header;