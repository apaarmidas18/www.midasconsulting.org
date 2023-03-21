import Navbar from "../components/Navbar";
import React from "react";
import Picture from "../components/Picture";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Buttonwhite from "../components/Buttonwhite";
import Lightheading from "../components/Lightheading";
import Category from "../components/Category";
import Navlink from "../components/Navlink";
import Blackheading from "../components/Blackheading";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const technology = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid firstbanner">
        <div className="row">
          <div className="col-md-8 color-row">
            <div className="banner-data">
              <Heading heading="All Tech Transformation" />
              <Heading heading="Starts with Talent." />

              <Paragraph para="Midas Technology delivers solutions and specialists who power technology innovation, transformation and digitization. From Epic/EHR integrators to software engineers, network technicians and IT support, we build and deploy the teams and top performers who drive business forward." />
              <Buttonwhite buttonTitle="Contact Us" />
            </div>
          </div>
          <div
            className="col-md-4 firstimage"
            style={{
              backgroundImage: `url("/images/redhair.jpg")`,
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

      <div className="container-fluid lightcontainer">
        <div className="row" style={{justifyContent:"center"}}>
          <Lightheading light="What We Do" />
          <div className="col-md-2 span-tag">
            <Category spantitle="EPIC/EHR CONSULTING" />
          </div>
          <div className="col-md-2 span-tag">
            <Category spantitle="EPIC/EHR STAFFING" />
          </div>
          <div className="col-md-2 span-tag">
            <Category spantitle="IT RECRUITMENT" />
          </div>
          <div className="col-md-2 span-tag">
            <Category spantitle="CONSULTING & SOW" />
          </div>
          <div className="col-md-2 span-tag">
            <Category spantitle="DIGITAL TRANSFORMATION" />
          </div>
        </div>
      </div>
      <div className="container plan-container">
        <div className="row">
          <div className="col-md-6 category-info">
            <Blackheading head="Epic/EHR Consulting" />
            <Paragraph para="Achieve maximum EHR/Epic system performance and results with our expert technology consulting, advisory, implementation, optimization and on-demand support." />
            <ul>
              <li>Strategically align EHR/Epic transformations with business needs and goals</li>
              <li>Increase physician and patient satisfaction, engagement and efficiency</li>
              <li>Outsource EHR/Epic support and maintenance</li>
            </ul>
            <h2 className="collapse-replace">Ready to make the most of your EHR/Epic solution?</h2>
            <Navlink
              move={"#"}
              linktitle="Learn More"
            />
          </div>
          <div className="col-md-6">
            <Picture image="/images/explaining.jpg" alt="Portrait Doctor" />
          </div>
        </div>
      </div>

      <div className="container plan-container">
        <div className="row">
          <div className="col-md-6">
            <Picture image="/images/close.jpg" alt="Portrait Doctor" />
          </div>
          <div className="col-md-6 category-info">
            <Blackheading head="Epic/EHR Staffing" />
            <Paragraph para="Tap into Midas Technology’s ecosystem of EHR/Epic implementation, upgrade, go-live and maintenance specialists. Our niche expertise goes deeper than your standard technology staffing agency, so we can deliver the talent and teams you need for success." />
            <ul>
              <li>Staff your EHR/Epic projects with experienced, skilled specialists</li>
              <li>Rapidly build a large-scale team of certified EHR/Epic Staffing​ with MidasDirect®</li>
              <li>Increase your EHR/Epic expertise and performance by adding the right talent</li>
            </ul>
            <h2 className="collapse-replace">Ready to make the most of your EHR/Epic talent?</h2>
            <Navlink
              move={"#"}
              linktitle="Learn More"
            />
          </div>
        </div>
      </div>

      <div className="container plan-container">
        <div className="row">
          <div className="col-md-6 category-info">
            <Blackheading head="IT Recruitment" />
            <Paragraph para="As a top technology staffing agency, Midas Technology will utilize it’s experienced recruitment experts to find the right talent for your contract, SOW, contract-to-hire, and direct openings." />
            <ul>
              <li>Staff hard-to-fill roles with top development, Cloud, BI/analytics, application/software and EMR/EHR talent</li>
              <li>Embrace digital transformation with specialist skilled to lead and support the efforts across technology disciplines</li>
              <li>Close critical skill gaps to keep pace with industry innovation and IT advancement</li>
            </ul>
            <h2 className="collapse-replace">Ready to learn more about the top tech talent we can provide your team?</h2>
            <Navlink
              move={"#"}
              linktitle="Learn More"
            />
          </div>
          <div className="col-md-6">
            <Picture image="/images/happy.jpg" alt="Portrait Doctor" />
          </div>
        </div>
      </div>

      <div className="container plan-container">
        <div className="row">
          <div className="col-md-6">
            <Picture image="/images/working.jpg" alt="Portrait Doctor" />
          </div>
          <div className="col-md-6 category-info">
            <Blackheading head="Digital Transformation " />
            <Paragraph para="Midas Technology powers business transformation by providing tech talent to plan, lead, implement and optimize digital solutions." />
            <Paragraph para="With unmatched recruitment resources and expertise in applications development, cloud and business analytics, Midas Technology builds robust, skillful digital transformation teams." />

            <ul>
              <li>Filling contract, SOW, contract-to-hire and direct hire digital roles</li>
              <li>Dedicated team of digital recruiters with an average of 9 years of experience</li>
              <li>Advanced soft skills assessment through Talentoday people analytics</li>
            </ul>
            <Navlink
              move={"#"}
              linktitle="Contact Us to Discuss Your Digital Transformation Project Today."
            />
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{ background: "#522e6e", color: "white" }}
      >
        <Testimonial />
      </div>

      <div
        className="container plan-container"
        style={{ marginBottom: "60px" }}
      >
        <div className="row">
          <div className="col-md-6">
            <Blackheading head="Embrace the Aha! Talent Advantage" />
            <Paragraph para="Midas’s Aha! is our digital hiring and talent management platform that allows you to rapidly access pre-vetted tech talent on demand." />
            <ul>
              <li>Automated job order management</li>
              <li>Advanced soft skill assessments</li>
              <li>Real-time recruitment analytics</li>
            </ul>
            <Navlink move={"#"} linktitle="Explore Aha!" />
          </div>
          <div className="col-md-6">
            <Picture image="/images/laptop.jpg" alt="Laptop" />
          </div>
        </div>
      </div>
      <div
        className="container-fluid largecontainer"
        style={{
          backgroundImage: `url("/images/green.svg")`,
        }}
      >
        <h2 className="largeheading">
        Power your digital transformations with the strategy and talent of Midas Technology.
        </h2>
        <Buttonwhite buttonTitle="Contact Us" />
      </div>
      <Footer />
    </>
  );
};

export default technology;
