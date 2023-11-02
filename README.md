# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Newsletter Sign Up Form](./src/assets/screenshots/Newsletter%20Sign%20Up%20form.jpg)
![Error message](./src/assets/screenshots/Error%20message.jpg)
![Focus and Hove states](./src/assets/screenshots/focus%20and%20hover%20states.jpg)
![Success Message](./src/assets/screenshots/Success%20message.jpg)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/responsive-newsletter-form-using-react-Ah8GXZ2JGi)
- Live Site URL: [Live Site](https://newsletter-sign-up-with-success-message-main-khaki.vercel.app/)

## My process

### Built with

- Vite
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Learnt how to call the input field when changes occur, check the email if it follows the regex pattern
and updates the 'email' state with the current value of the input field:

```js
const [email, setEmail] = useState("");
// checks whether email is valid
const [isValid, setIsValid] = useState(false);
const [modal, setModal] = useState(false);

/* Called when the email input field changes.
  It checks the email if it follows the emailRegex pattern
  and updates the 'email' state with the current value of the input field */
const getEmail = (event) => {
  const emailRegex = /^\w+([\.%+-]?\w+)+@\w+([\.-]?\w+)+(\.\w{2,})+$/;
  const valid = emailRegex.test(event.target.value);
  setIsValid(valid);
  setEmail(event.target.value);
};

/* checks if isValid is true and opens the modal if it is */
const openModal = () => {
  if (isValid && email !== "") setModal(true);
};
```

Learnt how to do conditional rendering of css classes:

```jsx
<form onSubmit={onSubmit} className={isValid ? "" : "formInvalid"}>
  <label htmlFor="email">Email address</label>
  <input
    className={isValid ? "valid" : "invalid"}
    onChange={getEmail}
    value={email}
    type="email"
    id="email"
    placeholder="email@company.com"
    title="Please enter a valid email address"
  />
  <button onClick={openModal}>Subscribe to monthly newsletter</button>
</form>
```

Opened the Modal component using state and passed props to the component:

```jsx
{
  modal && <Modal closeModal={setModal} email={email} />;
}
```

### Continued development

Not completely used to React Hooks so going to continue my learning React journey.

### Useful resources

- ChatGPT
- [Deploying a Static site](https://vitejs.dev/guide/static-deploy.html) - This helped me deploy my website.
- [Modal in ReactJS - Code a React Modal Tutorial using Hooks](https://www.youtube.com/watch?v=ZCvemsUfwPQ&t=197s) - This is helped me learn how to open a modal from a component using a button

## Author

- Frontend Mentor - [@Fejiro001](https://www.frontendmentor.io/profile/Fejiro001)
- Twitter - [@aberefejiro](https://twitter.com/aberefejiro)
