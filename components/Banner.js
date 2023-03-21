import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-background">
            <h1>
              Hiring with data,
              <br />
              working with purpose.
            </h1>
            <h4>
              Midas is dedicated to positively impacting lives and businesses
              with workforce solutions backed by people data and industry
              expertise.
            </h4>
            <h4>
              Our purpose-driven team impacts employers and job seekers alike
              within healthcare, life sciences, technology and engineering.
            </h4>
          </div>
          <div className="col-md-4 image-background">
            <img style={{height:"80vh"}}src="/images/doctor.jpg" />
          </div>
          <div className="col-md-6 rectangle-box"style={{background:"#002454"}}>
            <h4>Every hire with Medix is a high-impact win <br/>for your team</h4>
            <button className="white-btn">Find Talent</button>
          </div>
          <div className="col-md-6 rectangle-box" style={{background:"#004582"}}>
            <h4>Midas jobs deliver work today and <br/>opportunity tomorrow.</h4>
            <button className="white-btn">Find Talent</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
