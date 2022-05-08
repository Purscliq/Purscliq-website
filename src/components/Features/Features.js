import React, { Component } from "react";

class Feature extends Component {
  render() {
    const stylefile = { 
        transform: "translate3d(0px, -5.369px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        "transform-style": "preserve-3d",
        "will-change": "transform"
    }
    const stylefiletwo ={
        transform: "translate3d(0px, -6.22976px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        "transform-style": "preserve-3d",
        "will-change": "transform"
    }
    return (
      <div id="Features" class="section wf-section">
        <div class="block-content features">
          <h2 class="section-title">
            Our <span class="text-span">Features</span>
          </h2>
          <div
            data-w-id="612ae6da-cdfa-7bc7-12b4-f3fce5f05a47"
            style={{opacity: 1}}
            class="features-grid"
          >
            <div
              id="w-node-_612ae6da-cdfa-7bc7-12b4-f3fce5f05a48-f40490f2"
              class="feature-block"
            >
              <div class="icon-bg-circle">
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea57483a2e69e4587ee_icons8-statistic-document-96%20(1)%201.png"
                  loading="lazy"
                  alt=""
                  class="feature-icon"
                />
              </div>
              <div class="feature-name-text">
                <h4 class="feature-title-small">Wallet</h4>
                <p class="feature-text-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris quis sapien quis.
                </p>
              </div>
            </div>
            <div
              id="w-node-f435ff70-0a95-fa3f-925d-fe37c8b29fd8-f40490f2"
              class="feature-block"
            >
              <div class="icon-bg-circle">
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea56534b35e420cff84_icons8-cash-app-96%201.png"
                  loading="lazy"
                  alt=""
                  class="feature-icon"
                />
              </div>
              <div class="feature-name-text">
                <h4 class="feature-title-small">Cashback</h4>
                <p class="feature-text-small">
                  Donec suscipit ac tellus vitae convallis. Duis posuere turpis
                  id ex aliquam sagittis.
                </p>
              </div>
            </div>
            <div
              id="w-node-fa2f1f2f-fc05-7fb4-a100-4a095bead6ef-f40490f2"
              class="feature-block"
            >
              <div class="icon-bg-circle">
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea587809d552b8cc09b_icons8-access-denied-96%201.png"
                  loading="lazy"
                  alt=""
                  class="feature-icon"
                />
              </div>
              <div class="feature-name-text">
                <h4 class="feature-title-small">Limits</h4>
                <p class="feature-text-small">
                  Sed blandit, tellus ac sagittis tempus, eros mauris porttitor
                  nibh, et elementum metus.
                </p>
              </div>
            </div>
            <div
              id="w-node-cdfff0c0-81ae-46b0-a99f-bad884953b5d-f40490f2"
              class="feature-block"
            >
              <div class="icon-bg-circle">
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea5f1a7bece12e5f978_icons8-one-time-password-96%201.png"
                  loading="lazy"
                  alt=""
                  class="feature-icon"
                />
              </div>
              <div class="feature-name-text">
                <h4 class="feature-title-small">Security</h4>
                <p class="feature-text-small">
                  Curabitur tempus lectus a varius euismod. Nulla facilisi. Nam
                  tristique ornare massa eu.
                </p>
              </div>
            </div>
            <div
              id="w-node-_778e9710-2ff0-3e6f-8b58-ceb9b2d3debc-f40490f2"
              class="feature-block"
            >
              <div class="icon-bg-circle">
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea5f39a1a6b4f3dc982_icons8-calendar-96%201.png"
                  loading="lazy"
                  alt=""
                  class="feature-icon"
                />
              </div>
              <div class="feature-name-text">
                <h4 class="feature-title-small">Calendar</h4>
                <p class="feature-text-small">
                  Vivamus sagittis mi in laoreet faucibus. In faucibus metus
                  leo, in euismod justo porttitor sed.
                </p>
              </div>
            </div>
            <div
              id="w-node-_669f7f51-3ac3-6ddc-2e69-1b5af062bba4-f40490f2"
              class="feature-block"
            >
              <div class="icon-bg-circle">
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea5cdb048de2d833540_icons8-customer-support-96%201.png"
                  loading="lazy"
                  alt=""
                  class="feature-icon"
                />
              </div>
              <div class="feature-name-text">
                <h4 class="feature-title-small">Support</h4>
                <p class="feature-text-small">
                  Vestibulum condimentum lacus velit, sit amet blandit elit
                  molestie mattis. Cras iaculis commodo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="features-bg">
          <img
            src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea4ec7a6539d131ffbf_Doge%20Coin.png"
            loading="lazy"
            width="113"
            alt=""
            class="dogo-coin"
            style={{stylefiletwo}}
          />
          <img
            src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea4a28d58661b5e50af_Cart.png"
            loading="lazy"
            width="124"
            alt=""
            class="cart"
            style={{stylefile}}
          />
        </div>
      </div>
    );
  }
}
export default Feature;
