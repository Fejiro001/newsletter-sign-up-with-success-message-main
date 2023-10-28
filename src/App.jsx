import { useState } from "react";
import "./App.css";
import Modal from './Modal';

function App() {
  const [email, setEmail] = useState('');
  // checks whether email is valid
  const [isValid, setIsValid] = useState(true);
  const [modal, setModal] = useState(false);

  /* Called when the email input field changes.
  It checks the email if it follows the emailRegex pattern
  and updates the 'email' state with the current value of the input field */
  const getEmail = (event) => {
    const emailRegex = /^\w+([\.%+-]?\w+)+@\w+([\.-]?\w+)+(\.\w{2,})+$/;
    const valid = emailRegex.test(event.target.value);
    setIsValid(valid);
    setEmail(event.target.value);
  }

  /* checks if isValid is true and opens the modal if it is */
  const openModal = () => {
    if (isValid && email !== '') setModal(true);
  }

  /* prevents default behavior of form when submitting */
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

            <form
              onSubmit={onSubmit}
              className={isValid ? '' : 'formInvalid'}
            >
              <label htmlFor="email">Email address</label>
              <input
                className={isValid ? 'valid' : 'invalid'}
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
              srcSet="/illustration-sign-up-mobile.svg"
              media="(max-width: 700px)"
            />
            <img
              className="newsletter-img"
              src="/illustration-sign-up-desktop.svg"
              alt="newsletter image"
            />
          </picture>
          {/* Sign-up form end */}
        </section>

        {/* if modal = true, Modal component will open */}
        {/* passed setModal as props so we can use in our Modal component to close the modal */}
        {modal && <Modal closeModal={setModal} email={email} />}
      </main>
    </>
  );
}

export default App;