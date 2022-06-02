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
                  <h4 class="faqs-heading">What is Purscliq?</h4>
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
                  Purscliq is a product of Volt Wolf Limited. It is a mobile app that takes care 
                  of all your financial needs. Our services include cross-border payments, 
                  bill payment, fund transfer, savings products with terrific interest rates 
                  and employee loans at pocket-friendly rates.

                  </p>
                </div>
              </div>
              <div class="block-faqs-bg">
                <div class="faqs-title">
                  <h4 class="faqs-heading">How do I access the services of Purscliq?</h4>
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
                  With your smartphone, download the Purscliq app from Google Play or App Store. 
                  You can also go to www.purscliq.com on your laptop or smartphone to sign up for 
                  our array of services.
                  </p>
                </div>
              </div>
              <div class="block-faqs-bg">
                <div class="faqs-title">
                  <h4 class="faqs-heading">Why is my BVN required?</h4>
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
                  Your BVN is used to verify the information you provided upon registration.
                  </p>
                </div>
              </div>
            </div>
            <div class="column-faq-right w-col w-col-6 w-col-stack">
              <div class="block-faqs-bg">
                <div class="faqs-title">
                  <h4 class="faqs-heading">
                  How am I sure my money is safe with Purscliq?
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
                  All funds are insured with NDIC.
                  </p>
                </div>
              </div>
              <div class="block-faqs-bg">
                <div class="faqs-title">
                  <h4 class="faqs-heading">
                  What do I do if my account is blocked?
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
                  Inform us immediately you notice. We will take a look and revert in 24-48 hours.
                  </p>
                </div>
              </div>
              <div class="block-faqs-bg">
                <div class="faqs-title">
                  <h4 class="faqs-heading">Where is Purscliq located?</h4>
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
                  We are headquartered at 19 Oseni Close, off Adeniran Ogunsanya, Surulere, Lagos.
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
