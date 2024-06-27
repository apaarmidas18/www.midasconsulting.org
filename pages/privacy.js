import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import React from "react";

const privacy = () => {
  return (
    <>
      <Head>
        <title>Midas Consulting</title>
        <meta name="description" content="Midas Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div className="container ">
        <h2 style={{ marginTop: "50px" }}>Privacy Policy</h2>
        <p>
          <b>Midas Consulting</b> is committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website{" "}
          <b>www.midasconsulting.org</b> , use our services, or engage with us
          in other ways. Please read this policy carefully to understand our
          practices regarding your personal data and how we will treat it.
        </p>
        <h4 className="mb-0">Information We Collect</h4>
        <p className="mb-0">
          We may collect and process the following data about you:
        </p>
        <ul>
          <li>
            <strong>Personal Information</strong> : Name, email address, phone
            number, address, and other contact details.
          </li>
          <li>
            <strong>Transactional Data</strong> : Details about payments to and
            from you and other details of services you have purchased from us.
          </li>
          <li>
            <strong>Technical Data</strong> : Internet protocol (IP) address,
            browser type and version, time zone setting, browser plug-in types
            and versions, operating system and platform, and other technology on
            the devices you use to access this website.
          </li>
          <li>
            <strong>Usage Data</strong> : Information about how you use our
            website, products, and services.
          </li>
          <li>
            <strong>Marketing and Communications Data</strong> : Your
            preferences in receiving marketing from us and your communication
            preferences.
          </li>
        </ul>
        <h4 className="mb-0">How We Use Your Information</h4>
        <p className="mb-0">
          We use your personal data for various purposes, including:
        </p>
        <ul>
          <li>Providing and managing your account.</li>
          <li>Processing your orders and delivering products or services.</li>
          <li>
            Communicating with you, including sending you information about our
            products, services, and promotions
          </li>
          <li>Improving our products, services, and website.</li>
          <li>Complying with legal or regulatory requirements</li>
        </ul>
        <h4 className="mb-0">Disclosure of Your Information</h4>
        <p className="mb-0">
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties unless we provide you with
          advance notice, except as described below. We may share your personal
          data with:
        </p>
        <ul>
          <li>
            Service providers who help us deliver our products and services.
          </li>
          <li>Regulatory or government bodies as required by law.</li>
          <li>
            Other third parties only with your consent or at your direction.
          </li>
        </ul>
        <h4 className="mb-0">Data Security</h4>
        <p>
          We have implemented appropriate technical and organizational security
          measures designed to protect the security of any personal information
          we process. However, please note that no method of transmission over
          the internet or method of electronic storage is completely secure.
        </p>
        <h4 className="mb-0">Your Rights</h4>
        <p className="mb-0">You have the right to:</p>
        <ul>
          <li>Access your personal data.</li>
          <li>Request correction of your personal data.</li>
          <li>Request erasure of your personal data.</li>
          <li>Object to processing of your personal data.</li>
          <li>Request restriction of processing of your personal data.</li>
          <li>Request transfer of your personal data.</li>
        </ul>

        <h4 className="mb-0">How we use cookies?</h4>
        <p>
          If you agree, a website or its service provider may place little files
          called cookies on your computer's hard disc. These files help the
          website's or service provider's systems identify your browser and
          store and retrieve specific data. For example, cookies enable us to
          save and manage the products in your shopping cart. In order to give
          you better services, they are also utilised to assist us in
          understanding your preferences based on past or present site activity.
          In order to provide users with improved site experiences and tools in
          the future, we also utilise cookies to help us gather aggregate data
          about site traffic and site participation. We might enter into
          agreements with outside service providers to help us with
        </p>

        <h4 className="mb-0">How to opt out or modify your information?</h4>
        <p>
          For information removal, modification, or opt-out, send an email to
          removeinfo@midasconsulting.org Please be aware that for record-keeping
          and service purposes, we might preserve information regarding a
          specific sales transaction.
        </p>

        <h4 className="mb-0">Third Party Links</h4>
        <p>
          We might put connections to external websites on our website in an
          effort to give you more value. The privacy policies of these connected
          websites are independent and different. As a result, we disclaim all
          duty and responsibility for the actions and material on any linked
          websites. However, we work hard to maintain the integrity of our
          website and appreciate any comments regarding these linked
          sites—including if a particular link is broken.
        </p>

        <h4 className="mb-0">Questions and feedback</h4>
        <p>
          We appreciate any feedback, queries, and privacy-related worries you
          may have. Kindly provide us with any and all feedback on privacy or
          any other matter.
        </p>

        <h4 className="mb-0">Online Policy Only</h4>

        <p>
          This online privacy statement only relates to data that we collect
          online; it does not apply to data that we gather offline. This online
          privacy statement only relates to data that we collect online; it does
          not apply to data that we gather offline.
        </p>
        <h4 className="mb-0">Your consent</h4>
        <p>By using our site, you consent to our privacy policy.</p>

        <h4 className="mb-0">Contact Us</h4>
        <p className="mb-0">
          If you have any questions about this Privacy Policy or our privacy
          practices, please contact us at:
        </p>
        <p className="mb-0">
          <strong>Address : </strong>9330 Lyndon B Johnson Fwy #900, Dallas, TX,
          75243
        </p>
        <p className="mb-0">
          <strong>Email : </strong>admin@midasconsulting.org
        </p>
        <p>
          <strong>Phone No : </strong>(469) 361-2442
        </p>

        <h4 className="mb-0">Changes to This Privacy Policy</h4>
        <p className="mb-5">
          We may update this Privacy Policy from time to time in order to
          reflect changes to our practices or for other operational, legal, or
          regulatory reasons. We encourage you to review this Privacy Policy
          periodically.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default privacy;
