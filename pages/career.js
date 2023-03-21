import Headingbanner from "../components/Headingbanner";
import Navbar from "../components/Navbar";
import React from "react";
import Picture from "../components/Picture";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Navlink from "../components/Navlink";
import Infocard from "../components/Infocard";
import Lightheading from "../components/Lightheading";

const career = () => {
  return (
    <>
      <Navbar />
      <Headingbanner title="Career Advice" />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Picture image="/images/young.jpg" alt="young doctor" />
          </div>
          <div className="col-md-6">
            <Heading heading="Is a Medical Assistant Job the Right Fit for Your Career?" />
            <Paragraph para="As with any good job search, it all begins by asking the right questions. Here are some answers to common questions you might ask yourself when considering a medical assistant job. " />
            <Navlink
              move={"#"}
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
    cardname="Positively Impacting Lives with You"
    />
</div>
<div className="col-md-4">
    <Infocard 
    cardimage="/images/smile.jpg"
    cardalt="smile girl"
    cardlink={"#"}
    cardname="5 Reasons to Pursue Contract Work"
    />
</div>
<div className="col-md-4">
    <Infocard 
    cardimage="/images/serious.jpg"
    cardalt="serious person"
    cardlink={"#"}
    cardname="How to Find a Job in a Recession"
    />
</div>

        </div>
      </div>
      <div className="container lightcontainer">
      <Lightheading light="Looking for a job worth chasing? We’ve got plenty.
Great opportunities at great employers."/>
<Navlink move={"#"}
linktitle="Search Jobs"/>
</div>
    </>
  );
};

export default career;
