import './Modal.css';

function Modal({ closeModal, email }) {
  const closeTheModal = () => {
    closeModal(false);
  }

  return (
    <div className='modalBackground'>
      <div className="modal">
        {/* Success message start */}
        <div className="message">
          <img src="src\assets\images\icon-success.svg" />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <strong>{email}</strong>. Please
            open it and click the button inside to confirm your subscription.
          </p>
        </div>
        <button id='dismiss' onClick={closeTheModal}>Dismiss message</button>
        {/* Success message end */}
      </div>
    </div>
  );
}

export default Modal;