import { useState } from "react";
import "./App.css";
import Modal from './Modal';

function App() {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <main>
        <section>
          {/* Sign-up form start */}
          <article>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>

            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>

            <form onSubmit={onSubmit}>
              <label htmlFor="email">Email address</label>
              <input
                pattern="/^\w+([\.%+-]?\w+)+@\w+([\.-]?\w+)+(\.\w{2,})+$/g"
                type="email"
                id="email"
                placeholder="email@company.com"
                title="Please enter a valid email address"
              />
              <button>Subscribe to monthly newsletter</button>
            </form>
          </article>

          <picture>
            <source
              srcSet="src\assets\images\illustration-sign-up-mobile.svg"
              media="(orientation: portrait)"
            ></source>
            <img
              className="newsletter-img"
              src="src\assets\images\illustration-sign-up-desktop.svg"
              alt=""
            ></img>
          </picture>
          {/* Sign-up form end */}
        </section>
      </main>
      <Modal />
      {/* <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </>
  );
}

export default App;