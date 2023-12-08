import Link from "next/link";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

function Pop_up({ show, setShow }) {
  const [isChecked, setChecked] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);



    // useEffect(() => {
    //   const hasShownModalBefore = localStorage.getItem('hasShownModalBefore');

    //   if (!hasShownModalBefore) {
    //     setTimeout(() => {
    //       setShow(true);
    //       localStorage.setItem('hasShownModalBefore', 'true');
    //     }, 2000);
    //   }
    // }, []);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div className="modal-custom-head">{/* <h3>Disclaimer</h3> */}</div>
        <Modal.Body>
            <div className="permission-box d-flex">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setChecked(!isChecked)}
          />
          <span>
            I grant Midas Consulting permission to keep my personal information.
            By providing my phone number and other details, I agree to be
            contacted through email, phone, and SMS. Please review our <Link className="privacy-modal" href="/privacy">privacy
            policy</Link>.
          </span>
          </div>
          <div className="agree-btn">
           

            <button onClick={handleClose} className="btn btn-dark disagree">
              Disagree
            </button>

            {isChecked === true ? (
              <button onClick={handleClose} className="btn btn-danger agree">
                Agree
              </button>
            ) : (
              <button onClick={handleClose} className="btn btn-danger agree" disabled>
                Agree
              </button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Pop_up;
