import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    return (
      <div id="Testimonials" class="section wf-section">
        <div class="block-content top-bot-margin">
          <h2 class="section-title">
            Customer <span class="text-span">Feedbacks</span>
          </h2>
          <div class="section-text center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
            sapien quis.
          </div>
          <div
            data-w-id="7fbe11fc-ebbc-dd45-e92c-efcb72a20c29"
            style={{opacity: 1}}
            class="testimonials-grid"
          >
            <div class="testiomonial-block">
              <div class="testimonial-image-name">
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/6118b53da8d9445a2b8b6039_Client%20Image%201.png"
                  loading="lazy"
                  width="64"
                  height="64"
                  alt=""
                />
                <div class="name-position-block">
                  <h4 class="testimonial-name">Dianne Russell</h4>
                  <div class="position">Software Developer</div>
                </div>
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/6118ee505f69af8d6aab61df_icons8-quote-left-96.png"
                  loading="lazy"
                  width="40"
                  alt=""
                  class="quote-icon"
                />
              </div>
              <p class="testimonial-text">
                “Sed rutrum egestas semper. Ut tincidunt vitae mauris id
                pellentesque. Duis venenatis ultricies turpis”
              </p>
            </div>
            <div class="testiomonial-block">
              <div class="testimonial-image-name">
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/6118ee505f69af8d6aab61df_icons8-quote-left-96.png"
                  loading="lazy"
                  width="40"
                  alt=""
                  class="quote-icon"
                />
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/6118b53da8d94492bd8b603b_Client%20Image%202.png"
                  loading="lazy"
                  width="64"
                  height="64"
                  alt=""
                />
                <div class="name-position-block">
                  <h4 class="testimonial-name">Jane Cooper</h4>
                  <div class="position">UI/UX Designer</div>
                </div>
              </div>
              <p class="testimonial-text">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque maximus massa eu urna sollicitudin imperdiet.”
              </p>
            </div>
            <div class="testiomonial-block">
              <div class="testimonial-image-name">
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/6118b53da8d94485d28b603d_Client%20Image%203.png"
                  loading="lazy"
                  width="64"
                  height="64"
                  alt=""
                />
                <div class="name-position-block">
                  <h4 class="testimonial-name">Guy Hawkins</h4>
                  <div class="position">Project Manager</div>
                </div>
                <img
                  src="https://assets.website-files.com/6115ba6494f278764d0490f1/6118ee505f69af8d6aab61df_icons8-quote-left-96.png"
                  loading="lazy"
                  width="40"
                  alt=""
                  class="quote-icon"
                />
              </div>
              <p class="testimonial-text">
                “Nam odio tortor, maximus eget libero eget, tempus scelerisque
                sem. Mauris id ornare arcu, quis laoreet sapien.”
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Testimonials;
