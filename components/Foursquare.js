import Link from "next/link";
import React from "react";

const Foursquare = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-6 text-background"
            style={{ background: "#ebeae8", color: "#cb1829" }}
          >
            <div className="square-information four-heading">
              <h1>Talent Today</h1>
              <h4 style={{ marginBottom: "10px" }}>
                Midas staffing solutions are powered by the advanced people
                analytics of Talentoday.
              </h4>
              <Link
                className="white-link"
                style={{ color: "#cb1829" }}
                href="#"
              >
                Learn More ›
              </Link>
            </div>
          </div>
          <div
            className="col-md-6"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("/images/partner.jpg")`,
            }}
          ></div>
          <div
            className="col-md-6"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("/images/group.jpg")`,
            }}
          ></div>
          <div className="col-md-6 text-background">
            <div className="square-information four-heading">
              <h1>
                Join the <br />
                Midas Team
              </h1>
              <h4>
                We understand that finding the right talent is critical to the
                success of any healthcare organization, and we are committed to
                ensuring that our clients have access to the best talent
                available.
              </h4>
              <h4 style={{ marginBottom: "10px" }}>
                Join us in positively impacting the world through jobs,
                opportunities and giving back.
              </h4>
              <Link className="white-link" href="/career">
                Explore Midas Careers ›
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foursquare;
