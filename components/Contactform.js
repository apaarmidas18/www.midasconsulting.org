import React from "react";

const Contactform = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h1 className="mb-3">Contact Us</h1>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label for="your-name" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-name"
                    name="your-name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="your-surname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-surname"
                    name="your-surname"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="your-email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="your-email"
                    name="your-email"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="your-subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-subject"
                    name="your-subject"
                  />
                </div>
                <div className="col-12">
                  <label for="your-message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="your-message"
                    name="your-message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-6">
                      <button
                        data-res="<?php echo $sum; ?>"
                        type="button"
                        className="btn btn-dark w-100 fw-bold"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactform;
