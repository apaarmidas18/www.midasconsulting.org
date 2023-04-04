import Footer from "../components/Footer";
import React from "react";
import Navbar from "../components/Navbar";

const commission = () => {
  return (
    <>
      <Navbar />
      <div className="container" style={{ padding: "40px 0px" }}>
        <img
          src="/images/approval.png"
          style={{ width: "200px", marginTop: "30px" }}
        />
        <h2 style={{ marginTop: "20px" }}>
          The Joint Commission Certification
        </h2>
        <p>
          As part of our commitment to making a positive difference in people's
          lives, Midas Staffing Solutions is dedicated to offering the best
          calibre services to both clients and employees. As a result, obtaining
          Joint Commission Certification status in 2022 will confirm that we
          have complied with the requirements relating to Healthcare Staffing
          Services' selection, placement, and competency assessments of
          employees as well as our ongoing performance evaluation and
          improvement processes. The Joint Commission is regarded as the
          industry pioneer for accreditation and certification in healthcare. By
          achieving Joint Commission certification, Midas can guarantee that the
          best staff is being used to care for patients and their families.
        </p>

        <h2 style={{ marginTop: "20px" }}>Quality and Safety Concerns</h2>
        <p>
          The Joint Commission standards relate to quality and safety of care
          issues. Clients that have a quality and safety of patient care concern
          regarding the talent should contact the account manager and if needed,
          contact the office regional director.{" "}
        </p>

        <p>
          n individual that has valid information and/or concerns about the
          quality and safety of patient care are encouraged to contact their
          recruiter or the compliance team at midasconsulting.com and a
          corporate representative will work with them to resolve their
          concerns.{" "}
        </p>

        <p>
          If the concerns signify serious patient safety quality and safety
          concerns, the individual is encouraged to contact The Joint
          Commission. To report the details about your concern to The Joint
          Commission, use one of the following options:
        </p>

        <ul>
          <li>
            <strong>Online:</strong>www.jointcommission.org
          </li>
          <li>
            <strong>Phone:</strong>+91-99999999999
          </li>
          <li>
            <strong>Email:</strong>admin@midasconsulting.org
          </li>
        </ul>
        <p>
          Midas demonstrates this commitment of providing a consistent level of
          service by taking no disciplinary or punitive action against employees
          or other individuals who report safety or quality-of-care concerns to
          The Joint Commission.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default commission;
