import "./style.css";
import { setupCounter } from "./counter.js";
import "bootstrap/dist/css/bootstrap.css";

document.querySelector("#app").innerHTML = `
  <div>
  <div class="container ">
  <div class="d-flex gap-4 pt-5">
      <span><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="46" height="46" rx="23" fill="#EE4036" />
              <rect x="3" y="3" width="46" height="46" rx="23" stroke="#F5F5F5" stroke-width="6" />
              <path
                  d="M35.66 24.44L34.68 28.62C33.84 32.23 32.18 33.69 29.06 33.39C28.56 33.35 28.02 33.26 27.44 33.12L25.76 32.72C21.59 31.73 20.3 29.67 21.28 25.49L22.26 21.3C22.46 20.45 22.7 19.71 23 19.1C24.17 16.68 26.16 16.03 29.5 16.82L31.17 17.21C35.36 18.19 36.64 20.26 35.66 24.44Z"
                  fill="white" />
              <path
                  d="M29.06 33.39C28.44 33.81 27.66 34.16 26.71 34.47L25.13 34.99C21.16 36.27 19.07 35.2 17.78 31.23L16.5 27.28C15.22 23.31 16.28 21.21 20.25 19.93L21.83 19.41C22.24 19.28 22.63 19.17 23 19.1C22.7 19.71 22.46 20.45 22.26 21.3L21.28 25.49C20.3 29.67 21.59 31.73 25.76 32.72L27.44 33.12C28.02 33.26 28.56 33.35 29.06 33.39Z"
                  fill="#D9D9D9" />
              <path
                  d="M31.49 24.51C31.43 24.51 31.37 24.5 31.3 24.49L26.45 23.26C26.05 23.16 25.81 22.75 25.91 22.35C26.01 21.95 26.42 21.71 26.82 21.81L31.67 23.04C32.07 23.14 32.31 23.55 32.21 23.95C32.13 24.28 31.82 24.51 31.49 24.51Z"
                  fill="#EE4036" />
              <path
                  d="M28.56 27.89C28.5 27.89 28.44 27.88 28.37 27.87L25.46 27.13C25.06 27.03 24.82 26.62 24.92 26.22C25.02 25.82 25.43 25.58 25.83 25.68L28.74 26.42C29.14 26.52 29.38 26.93 29.28 27.33C29.2 27.67 28.9 27.89 28.56 27.89Z"
                  fill="#EE4036" />
          </svg>
      </span>
      <h1 class="font-lexend fw-semibold text-lg">Records</h1>
  </div>
</div>
<div class="container pt-36">
  <div class="row">
      <div class="col-lg-4 col-md-6 pt-4 pt-md-0">
          <div class="d-flex flex-column w-100">
             
              <div class="border-card">
                  <div class="d-flex gap-3 pt-3">
                      <button class="bg-grey text-grey secondary-btn">Tech</button>
                      <button class="bg-grey text-grey secondary-btn">Startups</button>
                      <button class="bg-grey text-grey secondary-btn">AI</button>
                  </div>
                  <h2 class="font-lexend fw-semibold pt-2 font-md">How to choose the right colors when...</h2>
                  <p class="font-lexend fw-normal pt-2 font-sm text-light-black">The app is a comprehensive
                      resource
                      that can help you
                      stay
                      up-to-date on
                      everything that's happening at the...</p>
                  <button class="bg-blue primay-button font-lexend">CTA button </button>
              </div>
          </div>
      </div>
      <div class="col-lg-4 col-md-6 pt-4 pt-md-0">
          <div class="d-flex flex-column w-100">

              <div class="border-card">
                  <div class="d-flex gap-3 pt-3">
                      <button class="bg-grey text-grey secondary-btn">Tech</button>
                      <button class="bg-grey text-grey secondary-btn">Startups</button>
                      <button class="bg-grey text-grey secondary-btn">AI</button>
                  </div>
                  <h2 class="font-lexend fw-semibold pt-2 font-md">How does writing influence your per...</h2>
                  <p class="font-lexend fw-normal pt-2 font-sm text-light-black">Welcome to the company app! This
                      is your one-stop shop for all company news, announcements, and reso...</p>
                  <button class="bg-blue primay-button font-lexend">CTA button </button>
              </div>
          </div>
      </div>
      <div class="col-lg-4 col-md-6 pt-4 pt-lg-0">
          <div class="d-flex flex-column w-100">
              <div class="border-card">
                  <div class="d-flex gap-3 pt-3">
                      <button class="bg-grey text-grey secondary-btn">Tech</button>
                      <button class="bg-grey text-grey secondary-btn">Startups</button>
                      <button class="bg-grey text-grey secondary-btn">AI</button>
                  </div>
                  <h2 class="font-lexend fw-semibold pt-2 font-md">How to choose the right customer fo...</h2>
                  <p class="font-lexend fw-normal pt-2 font-sm text-light-black">If you have any questions or need
                      help with anything, please don't hesitate to reach out to us. We're here to...</p>
                  <button class="bg-blue primay-button font-lexend">CTA button </button>
              </div>
          </div>
      </div>


  </div>
</div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
