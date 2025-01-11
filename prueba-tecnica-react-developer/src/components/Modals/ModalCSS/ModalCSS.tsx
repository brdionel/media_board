import { Fragment, useState } from "react";
import classes from "./ModalCSS.module.css";

const ModalCSS = () => {
  const [show, setShow] = useState(false);

  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  return (
    <Fragment>
      {show && (
        <div className={classes.modalOverlay} id="modal">
          <div className={classes.modal}>
            <h2>Modal Title</h2>
            <p>This is a modal example.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      <button onClick={openModal}>Open Modal</button>
    </Fragment>
  );
};

export default ModalCSS;
