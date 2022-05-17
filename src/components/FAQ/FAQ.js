import React, { Component } from "react";

class Faq extends Component {
  render() {
    const styles = {
      display: "none", 
      opacity: "1", 
      height: "0px",
    }
    const newstyle = {
      color: "rgb(25, 27, 53)",
      transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      "transform-style": "preserve-3d",
    }
    return (
      <div id="FAQs" class="section wf-section">
        <div class="block-content top-bot-margin">
          <h2 class="section-title">
            <strong>Frequently Asked</strong>{" "}
            <span class="text-span">
              <strong>Questions</strong>
            </span>
          </h2>
          <div
            data-w-id="96a2e118-c02e-080c-02d8-d39def3f94c1"
            style={{opacity: 1}}
            class="columns w-row"
          >
            <div class="column-faq-left w-col w-col-6 w-col-stack">
              <div class="block-faqs-bg">
                <div class="faqs-title">
                  <h4 class="faqs-heading">Is Purscliq Free App?</h4>
                  {/* <div class="faqs-arrow-bg">
                    <div class="faqs-arrow w-icon-slider-right"></div>
                  </div> */}
                </div>
                <div
                  class="faqs-content"
                  style={{styles}}
                >
                  <div class="space"></div>
                  <p class="faqs-paragraph">
                  CreditWolf is a product of Voltwolf Limited and a digital bank that provides you with a single app that takes care of all your financial needs at your fingertip. We provide investment and savings plans with terrific interest rates, payment and lending services at pocket-friendly rates.

                  </p>
                </div>
              </div>
              <div class="block-faqs-bg">
                <div class="faqs-title">
                  <h4 class="faqs-heading">What if i Have more questions?</h4>
                  {/* <div class="faqs-arrow-bg">
                    <div class="faqs-arrow w-icon-slider-right"></div>
                  </div> */}
                </div>
                <div
                  class="faqs-content"
                  style={{styles}}
                >
                  <div class="space"></div>
                  <p class="faqs-paragraph">
                    Donec ac maximus eros. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia curae; Sed
                    urna erat, iaculis quis sem non, suscipit ultricies enim.
                  </p>
                </div>
              </div>
              <div class="block-faqs-bg">
                <div class="faqs-title">
                  <h4 class="faqs-heading">Is Purscliq App safe for use?</h4>
                  {/* <div class="faqs-arrow-bg">
                    <div class="faqs-arrow w-icon-slider-right"></div>
                  </div> */}
                </div>
                <div
                  class="faqs-content"
                  style={{styles}}
                >
                  <div class="space"></div>
                  <p class="faqs-paragraph">
                    Donec ac maximus eros. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia curae; Sed
                    urna erat, iaculis quis sem non, suscipit ultricies enim.
                  </p>
                </div>
              </div>
            </div>
            <div class="column-faq-right w-col w-col-6 w-col-stack">
              <div class="block-faqs-bg">
                <div class="faqs-title">
                  <h4 class="faqs-heading">
                    What is the money back guarantee?
                  </h4>
                  {/* <div class="faqs-arrow-bg">
                    <div class="faqs-arrow w-icon-slider-right"></div>
                  </div> */}
                </div>
                <div
                  class="faqs-content"
                  style={{styles}}
                >
                  <div class="space"></div>
                  <p class="faqs-paragraph">
                    Phasellus porta porta consequat. Curabitur auctor commodo
                    sapien at rhoncus.
                  </p>
                </div>
              </div>
              <div class="block-faqs-bg">
                <div class="faqs-title">
                  <h4 class="faqs-heading">
                    How much Credit Cards i can connect?
                  </h4>
                  {/* <div class="faqs-arrow-bg">
                    <div class="faqs-arrow w-icon-slider-right"></div>
                  </div> */}
                </div>
                <div
                  class="faqs-content"
                  style={{styles}}
                >
                  <div class="space"></div>
                  <p class="faqs-paragraph">
                    Nam neque odio, feugiat nec aliquam nec, congue sit amet
                    metus. Donec nibh lacus, tincidunt nec est id, blandit
                    finibus ex.
                  </p>
                </div>
              </div>
              <div class="block-faqs-bg">
                <div class="faqs-title">
                  <h4 class="faqs-heading">What if i Have more questions?</h4>
                  {/* <div class="faqs-arrow-bg">
                    <div class="faqs-arrow w-icon-slider-right"></div>
                  </div> */}
                </div>
                <div
                  class="faqs-content"
                  style={{styles}}
                >
                  <div class="space"></div>
                  <p class="faqs-paragraph">
                    Nam neque odio, feugiat nec aliquam nec, congue sit amet
                    metus. Donec nibh lacus, tincidunt nec est id, blandit
                    finibus ex.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="features-bg"></div>
      </div>
    );
  }
}
export default Faq;
