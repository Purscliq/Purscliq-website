import React, { Component } from "react";
import "./footer.css";
class Footer extends Component {
  render() {
    const styletransform = {
      transform:
        "translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    };
    return (
      <div>
        <div class="footer wf-section">
          <div class="footer-block">
            <div
              //   data-w-id="e8d13286-4f22-98bd-8338-9e174ec1fd5c"
              class="w-layout-grid footer-grid"
              style={{ opacity: 1 }}
            >
              <div
                // id="w-node-e8d13286-4f22-98bd-8338-9e174ec1fd5d-4ec1fd5a"
                class="left-block-footer"
              >
                <div class="logo-we-re-hiring">
                  <a
                    href="/"
                    aria-current="page"
                    class="footer-brand w-inline-block w--current"
                  >
                    <img
                      src="https://assets.website-files.com/6115ba6494f278764d0490f1/61165ea487dc1067dfcd2af9_Banky%20Logo.svg"
                      width="98"
                      height="29"
                      alt=""
                      class="logo"
                    />
                  </a>
                </div>
              </div>
              <div
                //   id="w-node-e8d13286-4f22-98bd-8338-9e174ec1fd61-4ec1fd5a"
                class="block-footer"
              >
                <h5 class="footer-title">Company</h5>
                <div class="footer-nav-link-line">
                  <div
                    class="footer-hover-line"
                    style={{ styletransform, "transform-style": "preserve-3d" }}
                  ></div>
                </div>
                <div class="footer-nav-link-line">
                  <a href="#How-It-Works" class="footer-link-new" id="clear" >
                    How It Works
                  </a>
                  <div
                    class="footer-hover-line"
                    style={{ styletransform }}
                  ></div>
                </div>
                <div class="footer-nav-link-line">
                  <a href="#Features" class="footer-link-new" id="clear">
                    Features
                  </a>
                  <div
                    class="footer-hover-line"
                    style={{ styletransform }}
                  ></div>
                </div>
                <div class="footer-nav-link-line">
                  <a href="#Testimonials" class="footer-link-new" id="clear">
                    Testimonials
                  </a>
                  <div
                    class="footer-hover-line"
                    style={{ styletransform }}
                  ></div>
                </div>
                <div class="footer-nav-link-line">
                  <a href="#FAQs" class="footer-link-new w--current">
                    FAQs
                  </a>
                  <div
                    class="footer-hover-line"
                    style={{ styletransform }}
                  ></div>
                </div>
              </div>
              <div
                // id="w-node-e8d13286-4f22-98bd-8338-9e174ec1fd76-4ec1fd5a"
                class="block-footer"
              >
                <h5 class="footer-title">Template Info</h5>
                <div class="footer-nav-link-line">
                  <a href="/tamplate-info/changelog" class="footer-link-new" id="clear">
                    Changelog
                  </a>
                  <div
                    class="footer-hover-line"
                    style={{ styletransform }}
                  ></div>
                </div>
                <div class="footer-nav-link-line">
                  <a href="/tamplate-info/licensing" class="footer-link-new" id="clear">
                    Licenses
                  </a>
                  <div
                    class="footer-hover-line"
                    style={{ styletransform }}
                  ></div>
                </div>
                <div class="footer-nav-link-line">
                  <a href="/tamplate-info/style-guide" class="footer-link-new" id="clear" >
                    Style Guide
                  </a>
                  <div
                    class="footer-hover-line"
                    style={{ styletransform }}
                  ></div>
                </div>
              </div>
              <div
                //      id="w-node-_0e10e707-3e4a-7fa2-a49b-c9060eefa64a-4ec1fd5a"
                class="block-footer"
              >
                <h5 class="footer-title">Legal</h5>
                <div class="footer-nav-link-line">
                  <a href="/terms-conditions" class="footer-link-new" id="clear">
                    Terms &amp; Conditions
                  </a>
                  <div
                    class="footer-hover-line"
                    style={{ styletransform }}
                  ></div>
                </div>
                <div class="footer-nav-link-line">
                  <a href="/privacy-policy" class="footer-link-new" id="clear">
                    Privacy Policy
                  </a>
                  <div
                    class="footer-hover-line"
                    style={{ styletransform }}
                  ></div>
                </div>
              </div>
            </div>
            <div class="footer-divider"></div>
            <div
              //   data-w-id="e8d13286-4f22-98bd-8338-9e174ec1fd86"
              class="bottom-footer"
              style={{ opacity: 1 }}
            >
              <div class="text-block">© Banky. All rights reserved</div>
              <div class="powered">
                Powered by{" "}
                <a href="https://webflow.com/" target="_blank" class="webflow">
                  Webflow
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
