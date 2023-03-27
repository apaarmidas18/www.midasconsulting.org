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
import Collapse from "../components/Collapse";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const healthcare = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid firstbanner">
        <div className="row">
          <div className="col-md-6 color-row">
            <div className="banner-data">
              <Heading heading="Midas Healthcare" />
              <Heading heading="Recruitment and Staffing" />

              <Paragraph para="There has never been a clearer need for prompt, accurate hiring of the appropriate healthcare specialists. Fortunately, there has never been a healthcare staffing firm more committed to providing top-notch, high-performing people than Midas Healthcare." />
              <Buttonwhite buttonTitle="Contact Us" />
            </div>
          </div>
          <div
            className="col-md-6 firstimage"
            style={{
              backgroundImage: `url("/images/male.jpg")`,
            }}
          ></div>

          <div className="col-md-12 covidlines">
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
          </div>
        </div>
      </div>

      <div className="container-fluid lightcontainer">
        <div className="row">
          <Lightheading light="Midas Healthcare’s Areas of Expertise" />
          <div className="col-md-3 span-tag">
            <Category spantitle="INDUSTRY KNOWLEDGE" />
          </div>
          <div className="col-md-3 span-tag">
            <Category spantitle="TALENT ACQUISITION" />
          </div>
          <div className="col-md-3 span-tag">
            <Category spantitle="REVENUE CYCLE" />
          </div>
          <div className="col-md-3 span-tag">
            <Category spantitle="INSURANCE" />
          </div>
        </div>
      </div>
      <div className="container plan-container">
        <div className="row">
          <div className="col-md-6 category-info">
            <Blackheading head="Industry knowledge" />
            <Paragraph para="Healthcare staffing professionals must have a deep understanding of the healthcare industry, including the latest trends and challenges that are affecting the industry." />
            <ul>
              <li>Health Plans</li>
              <li>Insurance Companies</li>
              <li>Mental/Behavioral Health</li>
              <li>Rehabilitation Centers</li>
            </ul>
            <Collapse coll="See the Care Management Jobs We Fill">
              <ul>
                <li>Health Plans</li>
                <li>Insurance Companies</li>
                <li>Mental/Behavioral Health</li>
                <li>Rehabilitation Centers</li>
              </ul>
            </Collapse>
            <Navlink
              move={"#"}
              linktitle="Learn more about Midas Joint Commission Certification. Click here"
            />
          </div>
          <div className="col-md-6">
            <Picture image="/images/smiling.jpg" alt="Portrait Doctor" />
          </div>
        </div>
      </div>

      <div className="container plan-container">
        <div className="row">
          <div className="col-md-6">
            <Picture image="/images/close.jpg" alt="Portrait Doctor" />
          </div>
          <div className="col-md-6 category-info">
            <Blackheading head="Talent acquisition:" />
            <Paragraph para="Healthcare staffing professionals must have a strong understanding of recruitment and talent acquisition strategies, including how to source and attract top-quality healthcare talent." />
            <ul>
              <li>Medical Groups</li>
              <li>Laboratories</li>
              <li>Ambulatory Surgery Centers</li>
              <li>Pharmacies</li>
              <li>Diagnostic/Imaging Centers</li>
            </ul>
            <Collapse coll="See the Talent acquisition We Fill">
              <ul>
                <li>Medical Assistants</li>
                <li>Medical Front Office</li>
                <li>RNs/LPNs</li>
                <li>Pharmacy Technicians</li>
              </ul>
            </Collapse>
            <Navlink
              move={"#"}
              linktitle="Learn more about Medix’s Joint Commission Certification. Click here"
            />
          </div>
        </div>
      </div>

      <div className="container plan-container">
        <div className="row">
          <div className="col-md-6 category-info">
            <Blackheading head="Revenue Cycle" />
            <Paragraph para="An optimized Revenue Cycle is critical to your organization’s success. We understand the unique and changing dynamics of the healthcare Revenue Cycle, and deliver top talent to help the following businesses achieve their financial goals." />
            <ul>
              <li>Health Systems</li>
              <li>Third-Party Revenue Cycle Management Companies</li>
              <li>Medical Groups</li>
              <li>Other Healthcare Providers</li>
            </ul>
            <Collapse coll="See the Revenue Cycle Jobs We Fill">
              <ul>
                <li>Medical Billing</li>
                <li>Patient Registration</li>
                <li>Financial Counseling</li>
                <li>Insurance Verification</li>
                <li>Central Scheduling</li>
                <li>Accounts Receivable/Follow-up</li>
                <li>Denial Management</li>
                <li>Medical Coding</li>
                <li>Cash Posting</li>
              </ul>
            </Collapse>
            <Navlink
              move={"#"}
              linktitle="Learn more about Midas Joint Commission Certification. Click here"
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
            <Blackheading head="Insurance " />
            <Paragraph para="In a highly competitive market, organizations that best service their members and provider networks win. Medix is an insurance staffing agency that helps you acquire quality talent to distinguish your company from the rest. Our services reach the following industries:" />
            <ul>
              <li>Health Plans</li>
              <li>Insurance Companies</li>
              <li>TPAs</li>
              <li>Benefit Organizations</li>
              <li>Brokers</li>
            </ul>
            <Collapse coll="See the Insurance Jobs We Fill">
              <ul>
                <li>Member Service Representatives</li>
                <li>Enrollment Specialists</li>
                <li>Claims Professionals</li>
                <li>Provider Relations and Network Specialists</li>
                <li>Credentialers</li>
                <li>Business Analysts</li>
                <li>Admissions Coordinators</li>
                <li>Intake Specialists</li>
              </ul>
            </Collapse>
            <Navlink
              move={"#"}
              linktitle="Learn more about Medix’s Joint Commission Certification. Click here"
            />
          </div>
        </div>
      </div>

<div className="container-fluid" style={{background:"#522e6e", color:"white"}}>
    <Testimonial />
</div>

<div className="container plan-container" style={{marginBottom:"60px"}}>
    <div className="row">
<div className="col-md-6">
<Blackheading head="Embrace the Midas! Talent Advantage"/>
<Paragraph para="Midas Consulting is our digital hiring and talent management platform that allows you to rapidly access pre-vetted tech talent on demand."/>
<ul>
    <li>Automated job order management</li>
    <li>Advanced soft skill assessments</li>
    <li>Real-time recruitment analytics</li>
</ul>
<Navlink move={"#"} linktitle="Explore!"/>
</div>
<div className="col-md-6">
<Picture image="/images/laptop.jpg" alt="Laptop"/>
</div>
    </div>
</div>
<div className="container-fluid largecontainer"  style={{
          backgroundImage: `url("/images/green.svg")`,
        }}>
<h2 className="largeheading">You care for the world, we’ll take care of your talent.</h2>
<Buttonwhite buttonTitle="Contact Us"/>
</div>
<Footer />
    </>
  );
};

export default healthcare;
