import Contactform from "../components/Contactform";
import Lightheading from "../components/Lightheading";
import Paragraph from "../components/Paragraph";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const contact = () => {
  return (
    <>
      <Head>
        <title>Midas Consulting</title>
        <meta name="description" content="Midas Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div className="container" style={{ textAlign: "center" }}>
        <Lightheading light="Contact Midas" />
        <Paragraph para="Ready to get to work? Let Midas know how we can help by filling out the form below." />
        <Paragraph para="Contact Us for any query at  (469) 361-2442" />
      </div>
      <Contactform />
      <div className="container">
        <p style={{ color: "#e31f24" }}>
          ** By providing a telephone number and submitting this form you are
          consenting to be contacted by SMS text message. Message & data rates
          may apply. You can reply STOP to opt-out of further messaging.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default contact;
