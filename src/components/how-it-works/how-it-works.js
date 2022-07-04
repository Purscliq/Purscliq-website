import React, { Component } from "react";

class HowitWorks extends Component {
  render() {
    const styles = {
      // "will-change": "transform",
      transform:
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
      // "transform-style": "preserve-3d",
    };
    return (
      <div id="How-It-Works" class="section wf-section">
        <div class="block-content top-bot-margin">
          <h2 class="section-title">
            WHY YOU SHOULD CHOOSE <span class="text-span">Purscliq</span>
          </h2>
          <div
            data-w-id="b00dccc6-95cd-29ed-ff75-8aeb39b7efa8"
            style={{ opacity: 1 }}
            class="how-it-works-grid"
          >
            <div
              data-w-id="17b8a1bc-196a-5fe8-7cd1-e606cf5d73cd"
              class="card-block"
              style={{ opacity: 1 }}
            >
              <h4 class="card-title">
                Virtual <strong>Cards</strong>
              </h4>
              <div class="image-bg">
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea4ec7a65bf0c31ffc0_Card.png"
                  loading="lazy"
                  height="148"
                  alt=""
                  class="card-image"
                />
                <div class="circle-bg"></div>
              </div>
              <p class="card-paragraph">
                With our state-of-the-art technology, you can make cross-border
                payments to international merchants in a few simple steps. This
                is a new and easy way to spend with no hidden charges.
              </p>
            </div>
            <div class="vertical-divider"></div>
            <div class="card-block" style={{ styles }}>
              <h4 class="card-title">
                Employee <strong> LOANS</strong>
              </h4>
              <div class="image-bg">
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea615af3087ccff26a6_wallet.png"
                  loading="lazy"
                  height="148"
                  alt=""
                  class="card-image"
                />
                <div class="circle-bg"></div>
              </div>
              <p class="card-paragraph">
                Take loans through your organization without collateral. We make
                it quick and easy for you to access loans by running a quick
                verification to check your eligibility. Contact your
                organization to reach out to us today for you to enjoy this
                feature.
              </p>
            </div>
            <div class="vertical-divider"></div>
            <div class="card-block" style={{ styles }}>
              <h4 class="card-title">
                Save <strong>Money</strong>
              </h4>
              <div class="image-bg">
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea6f39a1adfab3dc983_Pig.png"
                  loading="lazy"
                  height="148"
                  alt=""
                  class="card-image"
                />
                <div class="circle-bg"></div>
              </div>
              <p class="card-paragraph">
                Start saving smartly with our savings products – FlexiSave,
                Target Savings and Fixed Deposit Savings. You can choose your
                minimum timeframe and get up to 14% per annum on amount saved.
                With Purscliq, you can surpass your savings goals.
              </p>
            </div>
            <div class="vertical-divider"></div>
            <div class="card-block" style={{ styles }}>
              <h4 class="card-title">
                <strong>Security</strong>
              </h4>
              <div class="image-bg">
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea6ec7a65502431ffc1_Shield.png"
                  loading="lazy"
                  height="148"
                  alt=""
                  class="card-image"
                />
                <div class="circle-bg"></div>
              </div>
              <p class="card-paragraph">
                We use the latest security solutions to spot, fix and prevent
                vulnerabilities because we understand the trust you have in us.
              </p>
            </div>
          </div>
        </div>
        <div class="right-gradient-circle"></div>
      </div>
    );
  }
}
export default HowitWorks;
