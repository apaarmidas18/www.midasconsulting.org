// import Banner from "../components/Banner";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Bannersquare from "../components/Bannersquare";
import Testimonial from "../components/Testimonial";
import Foursquare from "../components/Foursquare";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Link from "next/link";
import { useState } from "react";
import Pop_up from "../components/Modal";

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Head>
        <title>Midas Consulting</title>
        <meta name="description" content="Midas Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      {/* <Banner /> */}
      <Pop_up show={show} setShow={setShow}  />
      <div className="container-fluid firstbanner">
        <div className="row">
          <div className="col-md-6 color-row">
            <div className="banner-data">
              <Heading heading="Building a Stronger Healthcare Workforce, Together" />
              <Heading heading="" />

              <Paragraph para=" Midas is dedicated to providing reliable staffing solutions for healthcare facilities of all sizes, from hospitals and clinics to long-term care facilities and home healthcare agencies." />
              <Paragraph para=" Contact us today to learn more about our healthcare staffing services and how we can help you build a stronger workforce." />
            </div>
          </div>
          <div
            className="col-md-6 firstimage"
            style={{
              backgroundImage: `url("/images/youngwoman.jpg")`,
            }}
          ></div>

          <div className="container-fluid covidlines">
            <div className="row">
              <div className="col-md-7 guidelines">
                <h5>
                  Midas COVID-19 staffing support programs are helping
                  hospitals, medical practices, labs and businesses rapidly
                  bolster their resources and capabilities.
                </h5>
                <ul>
                  <li>See Occupational Health/Testing Site & Lab Services</li>
                  <li>See Contact Tracing Services</li>
                  <li>See COVID-19 Vaccinator Services</li>
                </ul>
              </div>
              <div className="col-md-5 approval-image">
                <img
                  src="/images/logob.png"
                  style={{ width: "180px", marginLeft: "50px" }}
                  alt="logo"
                />
                <Link href="/joint-commission">
                  <img
                    src="/images/approval.png"
                    style={{ width: "180px", cursor: "pointer" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container center-info">
        <div className="container info-text">
          <h2>Data has proven it to be true.</h2>
          <h5>
            A stronger candidate pool and greater employment options are
            provided by Midas, a staffing firm. You're all set to begin.
          </h5>
        </div>
        <Link className="info-link" href="/healthcare">
          More About Midas ›
        </Link>
      </div>
      <Bannersquare />
      <Testimonial />
      <Foursquare />
      <Footer />
    </>
  );
}
