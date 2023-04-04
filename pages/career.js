import Headingbanner from "../components/Headingbanner";
import Navbar from "../components/Navbar";
import React from "react";
import Picture from "../components/Picture";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Navlink from "../components/Navlink";
import Infocard from "../components/Infocard";
import Lightheading from "../components/Lightheading";
import Footer from "../components/Footer";

const career = () => {
  return (
    <>
      <Navbar />
      <Headingbanner title="Career Advice" />
      <div className="container">
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-md-6">
            <Picture image="/images/young.jpg" alt="young doctor" />
          </div>
          <div className="col-md-6">
            <Heading heading="Are you a good fit for a career as a medical assistant?" />
            <Paragraph para="With the ever-increasing demand for healthcare services, medical assisting is a rapidly growing field that offers exciting opportunities for those seeking to enter the healthcare industry. " />
            <Navlink
              move={"/healthcare"}
              linktitle="Click here for expert advice from healthcare professionals"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h2 className="container-heading">Career Insights</h2>
        <div className="row">
          <div className="col-md-4">
            <Infocard
              cardimage="/images/animate.jpg"
              cardalt="illustration"
              cardlink={"#"}
              cardname="Expert Advice for Healthcare Employers and Professionals"
            />
          </div>
          <div className="col-md-4">
            <Infocard
              cardimage="/images/smile.jpg"
              cardalt="smile girl"
              cardlink={"#"}
              cardname="Innovations in Healthcare Staffing and Recruitment"
            />
          </div>
          <div className="col-md-4">
            <Infocard
              cardimage="/images/serious.jpg"
              cardalt="serious person"
              cardlink={"#"}
              cardname="Career Development and Growth in the Healthcare Industry"
            />
          </div>
        </div>
      </div>
      <div className="container lightcontainer">
        <Lightheading light="Want a job worth chasing? We've got tons. Fantastic opportunities with great companies." />
        <Navlink move={"#"} linktitle="Search Jobs" />
      </div>
      <Footer />
    </>
  );
};

export default career;
