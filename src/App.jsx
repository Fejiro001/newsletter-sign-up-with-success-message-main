import { useState } from "react";
import "./App.css";
import Modal from './Modal';

function App() {
  const [email, setEmail] = useState('');
  // checks whether email is valid
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  
  // called when the email input field changes
  // updates the 'email' state with the current value of the input field
  const getEmail = (event) => {
    setEmail(event.target.value);
  }
  
  /* checks if the email matches the pattern and returns a boolean, 
  and stores the result in the isValid state*/
  const openModal = () => {
    const emailRegex = /^\w+([\.%+-]?\w+)+@\w+([\.-]?\w+)+(\.\w{2,})+$/;
    const valid = emailRegex.test(email);

    setIsValid(valid);
    if(valid) setModal(true);
  }

  // prevents default behavior of form when submitting
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
                onChange={getEmail}
                value={email}
                type="email"
                id="email"
                placeholder="email@company.com"
                title="Please enter a valid email address"
              />
              <button onClick={openModal}>Subscribe to monthly newsletter</button>
            </form>
          </article>

          <picture>
            <source
              srcSet="src\assets\images\illustration-sign-up-mobile.svg"
              media="(orientation: portrait)"
            />
            <img
              className="newsletter-img"
              src="src\assets\images\illustration-sign-up-desktop.svg"
              alt=""
            />
          </picture>
          {/* Sign-up form end */}
        </section>
        {/* if modal = true, Modal component will open */}
        {/* passed setModal as props so we can use in our Modal component to close the modal */}
        {modal && <Modal closeModal={setModal} email={email} />}
      </main>
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