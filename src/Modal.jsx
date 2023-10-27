import './Modal.css';

function Modal() {
  return (
    <div className='modalBackground'>
      <div className="modal">
        {/* Success message start */}
        <img src="src\assets\images\icon-success.svg"></img>
        <div class="message">
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <span>ash@loremcompany.com</span>. Please
            open it and click the button inside to confirm your subscription.
          </p>
        </div>
        <button>Dismiss message</button>
        {/* Success message end */}
      </div>
    </div>
  );
}

export default Modal;