import React, { Component } from "react";

class firstSection extends Component {
  render() {
    return (
      <div class="section wf-section">
        <div class="block-content single-feature top-margin">
          <div class="single-feature-block" 
          style={{opacity: 1}}
          >
            <h2 class="section-title">
              Made For Easy To Use. <span class="text-span">Template</span>
            </h2>
            <div class="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              quis sapien quis.
            </div>
            <a href="#" class="primary-button w-button">
              Buy Template
            </a>
          </div>
          <img
            src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea5f7fb45162eb9ad43_Feature%20Phone%202.png"
            loading="lazy"
            style={{opacity: 1}}
            data-w-id="98c73345-2d30-8689-20f9-dbffa7c9ec44"
            alt=""
          />
        </div>
      </div>
    );
  }
}
export default firstSection;
