import Navbar from "../components/Navbar";
import React from "react";
import Picture from "../components/Picture";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Buttonwhite from "../components/Buttonwhite";
import Blackheading from "../components/Blackheading";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Head from "next/head";

const diversity = () => {
  return (
    <>
      <Head>
        <title>Midas Consulting</title>
        <meta name="description" content="Midas Consulting" />
      </Head>
      <Navbar />
      <div className="container-fluid firstbanner">
        <div className="row">
          <div className="col-md-6 color-row">
            <div className="banner-data">
              <Heading heading="Diversity and Equity " />

              <Paragraph para="The only way we can fulfil our fundamental goal of making a positive difference in people's lives is to demonstrate our commitment to diversity." />
              <Buttonwhite buttonTitle="Join Our Team" />
            </div>
          </div>
          <div
            className="col-md-6 firstimage"
            style={{
              backgroundImage: `url("/images/diversity.jpg")`,
            }}
          ></div>

          {/* <div className="col-md-12 covidlines">
            <div className="col-md-7 guidelines">
              <h5>
                Midas COVID-19 staffing support programs are helping hospitals,
                medical practices, labs and businesses rapidly bolster their
                resources and capabilities.
              </h5>
              <ul>
                <li>See Occupational Health/Testing Site & Lab Services</li>
                <li>See Contact Tracing Services</li>
                <li>See COVID-19 Vaccinator Services</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
      <div className="container plan-container">
        <div className="row">
          <div className="col-md-6">
            <Picture image="/images/videocall.jpg" alt="Video call" />
          </div>
          <div className="col-md-6 category-info">
            <Blackheading head="Committed to diversity and equity" />
            <Paragraph para="Midas is a company committed to equal opportunity in employment regardless of race, color, national origin, gender, sexual orientation, gender identity and express, age, religion or physical or mental disability." />
          </div>
        </div>
      </div>

      <div className="container plan-container">
        <div className="row">
          <div className="col-md-6 category-info">
            <Blackheading head="Our dedication to promoting equality" />
            <Paragraph para="​Midas strives to build teams of diverse employees across our workplaces. These efforts are built upon three pillars of diversity and equity:" />
            <ul>
              <li>
                Recruitment: Create a diverse workforce that mirrors the
                communities in which Midas operates through an equitable
                interview process.
              </li>
              <li>
                Leadership Development: Cultivate a culture that allows all
                employees to have a fair and equal chance at promotions and
                opportunities for growth.
              </li>
              <li>
                Retention: Enact meaningful change and foster an inclusive
                environment, identified through trends in employee hiring,
                promotion, and turnover reports.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <Picture image="/images/team.jpg" alt="Portrait Doctor" />
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{ background: "#522e6e", color: "white" }}
      >
        <Testimonial />
      </div>
      <Footer />
    </>
  );
};

export default diversity;
