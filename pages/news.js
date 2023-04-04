import Headingbanner from "../components/Headingbanner";
import React from "react";
import Navbar from "../components/Navbar";
import Infocard from "../components/Infocard";
import Lightheading from "../components/Lightheading";
import Newslist from "../components/Newslist";
import Navlink from "../components/Navlink";
import Footer from "../components/Footer";
import Buttonwhite from "../components/Buttonwhite";
import Link from "next/link";
import Head from "next/head";

const news = () => {
  return (
    <>
      <Head>
        <title>Midas Consulting</title>
        <meta name="description" content="Midas Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Headingbanner title="News & Events" />

      <div className="container-fluid">
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-md-4">
            <Infocard
              cardimage="/images/animate.jpg"
              cardalt="illustration"
              cardlink={"#"}
              cardname="Midas Expands East Coast Footprint with New Atlanta and Philadelphia Offices"
            />
          </div>
          <div className="col-md-4">
            <Infocard
              cardimage="/images/animate.jpg"
              cardalt="illustration"
              cardlink={"#"}
              cardname="Midas Technology Rated Among Top Vendors in the 2023 Best in KLAS Report"
            />
          </div>
          <div className="col-md-4">
            <Infocard
              cardimage="/images/animate.jpg"
              cardalt="illustration"
              cardlink={"#"}
              cardname="Midas Wins ClearlyRated’s 2023 Best of Staffing Client"
            />
          </div>
        </div>
      </div>

      <div className="container lightcontainer">
        <Lightheading light="In The News" />
        <div className="row">
          <div className="col-md-6 news-row">
            <Newslist
              news="2022 in Review: Positively Impacting Lives with You"
              date="Dec 12, 2022"
            />
          </div>
          <div className="col-md-6 news-row">
            <Newslist
              news="Midas Workforce Trends Report Shows the Need for Workforce Agility Remains Acute in Healthcare, Technology, and Life Sciences"
              date="Oct 27, 2022"
            />
          </div>
          <div className="col-md-6 news-row">
            <Newslist
              news="Midas Awarded The Joint Commission’s Gold Seal of Approval Certification"
              date="Nov 9, 2022"
            />
          </div>
          <div className="col-md-6 news-row">
            <Newslist
              news="Midas Named to Staffing Industry Analysts’ 2022 List of Fastest-Growing Staffing Firms"
              date="Sep 23, 2022"
            />
          </div>
          <div className="col-md-6 news-row">
            <Newslist
              news="Chicago Tribune Names Midas a Winner of the Chicagoland Top Workplaces 2022 Award"
              date="Nov 7, 2022"
            />
          </div>

          <div className="col-md-6 news-row">
            <Newslist
              news="Midas Announces Recipients of the 2022 Talentomorrow Talent Scholarship"
              date="Sep 15, 2022"
            />
          </div>
        </div>
        <Navlink move={"#"} linktitle="See All" />
      </div>

      <div
        className="container-fluid largecontainer"
        style={{
          backgroundImage: `url("/images/green.svg")`,
        }}
      >
        <h2 className="largeheading">Get in touch.</h2>
        <h3 style={{ color: "white" }}>
          We want to hear from you. We’d love to see you. Let’s get started.
        </h3>
        <Link href="/contact">
          <Buttonwhite buttonTitle="Contact Us" />
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default news;
