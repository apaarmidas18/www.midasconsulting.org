import Link from "next/link";
import React from "react";

const Foursquare = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 text-background">
            <div className="square-information four-heading">
              <h1>talentoday</h1>
              <h4 style={{ marginBottom: "10px" }}>
                Midas staffing solutions are powered by the advanced people analytics of Talentoday.
              </h4>
              <Link className="white-link" href="#" >Learn More ›</Link>
            </div>
          </div>
          <div className='col-md-6' style={{
          backgroundImage: `url("/images/partner.jpg")`,
        }}>
    </div>
    <div className='col-md-6' style={{
          backgroundImage: `url("/images/group.jpg")`,
        }}>
    </div>
    <div className="col-md-6 text-background" style={{background:"#008251"}}>
            <div className="square-information four-heading">
              <h1>Join the <br/>Midas Team</h1>
              <h4>
              We put people ahead of everything. Why? Because when you make the right choices for your people, purpose is clear and performance and success follow.
              </h4>
              <h4 style={{ marginBottom: "10px" }} >
              Join us in positively impacting the world through jobs, opportunities and giving back.
              </h4>
              <Link className="white-link" href="#" >Explore Midas Careers ›</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foursquare;
