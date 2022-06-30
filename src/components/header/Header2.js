import React, { Component } from "react";

class Header2 extends Component {
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
              src="https://creditwolfinc.com/wp-content/uploads/2021/08/purscliq_dark01.png"
              width="100"
              alt=""
              class="brand"
            />
          </a>
        </div>
        <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
      </div>
    );
  }
}

export default Header2;