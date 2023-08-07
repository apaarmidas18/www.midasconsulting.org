import InputField from "../../components/InputField";
import moment from "moment-timezone";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Form, Formik, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { DateRange, DateRangePicker } from "react-date-range";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { host } from "../../static";

const Url = ({ url }) => {
  const router = useRouter();

  const [active, setActive] = useState(false);
  const [html, setHTML] = useState("");
  const [dob, setDob] = useState(false);
  const [sign, setSign] = useState("");
  const [dateofBirth, setDateOfBirth] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState("");
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    phoneno: "",
    email: "",
    dob: "",
    ssn: "",
    address: "",
  });
  const [showDate, setShowDate] = useState(false);
  const [references, setReferenes] = useState([
    {
      name: "",
      phoneno: "",
      email: "",
    },
    {
      name: "",
      phoneno: "",
      email: "",
    },
  ]);
  const [state, setState] = useState([
    {
      startDate: "",
      endDate: "",
      key: "selection",
    },
  ]);

  //Validation*************************************************

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phoneno: "",
      email: "",
      dob: "",
      ssn: "",
      address: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
      phoneno: Yup.string().required("Required"),
      ssn: Yup.number()
        .required("Social Security Number is required")
        .min(4, "Social Security Number Must be 4 Digits long")
        .max(4, "Social Security Number Must be 5 Digits long"),
      email: Yup.string().email("Invalid email address").required("Required"),
      dob: Yup.string()
        .required("Contact-Number is required")
        .min(10, "Contact Number should not be long less than 10 digits")
        .max(10, "Contact Number should not be long more than 10 digits"),
      // address: Yup.string().required("Required"),
    }),
    onSubmit: (values, e) => {
      submitData(values, e);
    },
  });

  //Validation*************************************************
  const newDate = moment().tz("US/Central").format("YYYY-MM-DD");

  const from =
    state[0].startDate === ""
      ? ""
      : moment(state[0].startDate).format("MM/DD/YYYY");
  const to =
    state[0].endDate === ""
      ? ""
      : moment(state[0].endDate).format("MM/DD/YYYY");
  function renderTable(datas, title) {
    // Start building the table markup

    let tableHTML = `<div class="container" style="width: 400px; text-align: center; margin-top: 20px; ">`;
    tableHTML = `<div class="row">`;
    tableHTML = `<div  class="col-md-6">`;
    tableHTML = `<form>`;
    tableHTML = `<table class="table table-bordered" style="width: 50vh; text-align: center; margin-left:160px;">`;

    tableHTML += `<thead class="health-table">`;
    tableHTML += "<tr>";

    tableHTML += `<th class="health-row" colspan="4">${title}</th>`;
    tableHTML += `<th  class="health-row small" scope="col" style="width: 100px; text-align: center;">1</th>`;
    tableHTML += `<th  class="health-row small" scope="col" style="width: 100px; text-align: center;">2</th>`;
    tableHTML += `<th  class="health-row small" scope="col" style="width: 100px; text-align: center;">3</th>`;
    tableHTML += `<th  class="health-row small" scope="col" style="width: 100px; text-align: center;">4</th>`;

    tableHTML += "</tr>";
    tableHTML += "</thead>";

    datas.map((ite, index) => {
      tableHTML += "<tbody>";

      tableHTML += "<tr>";

      tableHTML += `<th class="table-data" colspan="4" scope="row">${ite.name}</th>`;

      tableHTML += `<td class="table-data">${
        ite.value1 === "checked"
          ? `<div style = "height: 15px; width: 15px; background: #0f875b;  border-radius: 50px; margin-left: 25px" class ="circle-box"></div>`
          : `<input class="form-check-input" type="radio" name=${ite.name}
                        required disabled > `
      } </td>`;
      tableHTML += `<td class="table-data">${
        ite.value2 === "checked"
          ? `<div style = "height: 15px; width: 15px; background: #0f875b;  border-radius: 50px; margin-left: 25px" class ="circle-box"></div>`
          : `<input class="form-check-input" type="radio" name=${ite.name}
                        required id="flexRadioDefault" disabled >`
      } </td>`;
      tableHTML += `<td class="table-data">${
        ite.value3 === "checked"
          ? `<div style = "height: 15px; width: 15px; background: #0f875b;  border-radius: 50px; margin-left: 25px" class ="circle-box"></div>`
          : `<input class="form-check-input" type="radio" name=${ite.name}
                        required id="flexRadioDefault" disabled >`
      } </td>`;
      tableHTML += `<td class="table-data">${
        ite.value4 === "checked"
          ? `<div style = "height: 15px; width: 15px; background: #0f875b;  border-radius: 50px; margin-left: 25px" class ="circle-box"></div>`
          : `<input class="form-check-input" type="radio" name=${ite.name}
                        required id="flexRadioDefault" disabled >`
      } </td>`;
      tableHTML += "</tbody>";
    });

    // Generate the table header
    // Generate the table body
    // Finish the table markup

    tableHTML += "</table>";
    tableHTML += "</form>";
    tableHTML += "</div>";
    tableHTML += "</div>";
    tableHTML += "</div>";

    return tableHTML;
  }

  const capitalized = url.charAt(0).toUpperCase() + url.slice(1);
  const date = `${from}-${to}`;

  const StringDate = JSON.stringify(date);

  const submitData = (e, values) => {
    const dateofbith = moment(values.dob).format("MM/DD/YYYY");
    console.log(values.dob);
    const inputDate = JSON.stringify(dateofbith);
    e.preventDefault();
    const th =
      data === undefined || data.length === 0
        ? "WAIT"
        : data.list.map((item, index) => {
            const { items, title } = item;
            return { items, title };
          });

    const Html = `<!DOCTYPE html>
<html>
   <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
         integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
         integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
         crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
         integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
         crossorigin="anonymous"></script>
      <style>
         .table-bordered {
         border: 0.5px solid gray !important;
         }
         .health-row {
         padding: 0px 5px !important;
         background-color: yellow !important;
         }
         .health-row .small {
         padding: 0 !important;
         }
         .table-data {
         font-weight: 400;
         font-size: 12px;
         }
         #text{
         display : none;
         }
      </style>
   </head>
   <body>


   
   <form>
        <div class="container checklist-head mt-5">
        <div class="text-center">
          <h2> ${capitalized} Skills Checklist</h2>
          </div>
          <div class="col-md-12 p-1">
            <div class="row">
              <div class="form-group row mb-3 d-flex align-items-center bg-light border rounded p-2">
                <div class="form-group row mb-3 d-flex align-items-center">
                  <div class="col-md-4">
                    <label class="m-2 text-dark">First Name</label>
                    <span class="form-control" style="background-color: #e9ecef;">${
                      values.firstname
                    }</span>
                  </div>
                  <div class="col-md-4">
                    <label class="m-2 text-dark">Last Name</label>
                    <span class="form-control" style="background-color: #e9ecef;">${
                      values.lastname
                    }</span>
                  </div>
                  <div class="col-md-4">
                    <label class="m-2 text-dark">Phone number</label>
                    <span class="form-control" style="background-color: #e9ecef;">${
                      values.phoneno
                    }</span>
                  </div>
                  <div class="col-md-4">
                    <label class="m-2 text-dark">E-mail</label>
                    <span class="form-control" style="background-color: #e9ecef;">${
                      values.email
                    }</span>
                  </div>
                  <div class="col-md-4">
                    <label class="m-2 text-dark">Date of Birth</label>
                    <input
                      type="text"
                      class="form-control"
                      id="dob"
                      name="dob"
                      value=${inputDate === "Invalid date" ? "" : inputDate}
                    disabled
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="m-2 text-dark">Last four SSN digit</label>
                   <span class="form-control" style="background-color: #e9ecef;">${
                     values.ssn
                   }</span>
                  </div>
                 
                  <div class="col-md-4">
                    <label class="m-2 text-dark">Request Time Off</label>
                    <input
                      class="form-control"
                      required=""
                      disabled=""
                      value=${
                        StringDate == "Invalid date-Invalid date"
                          ? ""
                          : StringDate
                      }
                    />
                  </div>
                   <div class="col-md-6">
                    <label class="m-2 text-dark">Address</label>
                   
                     <span class="form-control" style="background-color: #e9ecef;">${
                       values.address
                     }</span>
                   
                  </div>
                </div>        
                <div class="form-group row mb-3 d-flex align-items-center">
                  <div class="col-md-4">
                    <label class="m-2 text-dark"> Referre's Name</label>
                     <span class="form-control" style="background-color: #e9ecef;">${
                       references[0].name
                     }</span>
                   
                  </div>
                  <div class="col-md-4">
                    <label class="m-2 text-dark"> Referre's Phone</label>
                     <span class="form-control" style="background-color: #e9ecef;">${
                       references[0].phoneno
                     }</span>
                  </div>
                  <div class="col-md-4">
                    <label class="m-2 text-dark">Referre's E-mail</label>
                     <span class="form-control" style="background-color: #e9ecef;">${
                       references[0].email
                     }</span>
                  </div>
                    ${
                      references[1]
                        ? `  
         <div class="col-md-4">
                    <label class="m-2 text-dark">Referee's Name</label>
                      <span class="form-control" style="background-color: #e9ecef;">${references[1].name}</span>
                   
                  </div>
                  
                  <div class="col-md-4">
                    <label class="m-2 text-dark">Referee's Phone </label>
                      <span class="form-control" style="background-color: #e9ecef;">${references[1].phoneno}</span>
                  </div>
                  <div class="col-md-4">
                    <label class="m-2 text-dark">Referee's E-mail</label>
                     <span class="form-control" style="background-color: #e9ecef;">${references[1].email}</span>
                  </div>
              
            `
                        : ""
                    }
                 
                </div>
                <div class="form-group row mt-3 ">
                  <div class="col-md-11">
                    <p>
                      <strong>Instructions:</strong>
                      <span class="text-muted text-sm declare-para">
                        This checklist is meant to serve as a general guideline
                        for our client facilities as to the level of your skills
                        within your nursing specialty. Please use the scale
                        below to describe your experience/expertise in each area
                        listed below.
                      </span>
                    </p>
                  </div>
                  <div class="col-md-11">
                       <p>1 = No Experience</p>
               <p>2 = Need Training</p>
               <p>3 = Able to perform with supervision</p>
               <p>4 = Able to perform independently</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      
      ${
        th === undefined || th === "Wait"
          ? ""
          : th.map((item, index) => {
              const tab = renderTable(item.items, item.title);
              return tab;
            })
      }
   
      <div>
         <div class="form-group row mt-3 d-flex mx-5">
            <div className="col-md-11">
               <p className="declare-para">
                  I hereby certify that ALL information I have provided on this
                  skills checklist and all other documentation, is true and
                  accurate. I understand and acknowledge that any
                  misrepresentation or omission may result in disqualification
                  from employment and/or immediate termination.
               </p>
            </div>
         </div>
         <div 
            style="margin-top: 10px;  justify-content: space-between;  display: flex; flex-direction:row;"
              class="mx-5">
            <div className="date-box">
               <p>Date signed-:</p>
               <strong>
               <span>${newDate}</span>
               </strong>
            </div>
            <div className="sign-box" style= "display: flex; flex-direction:column;">
               <strong>
               <span>Signature</span>
               </strong>
                <span class="form-control" style="background-color: #e9ecef; padding : 5px; width: 180px;  margin-top :10px;">${sign}</span>
            </div>
         </div>
      </div>
   </body>
</html>`;
    setHTML(Html);

    const formatDob = moment(formValues.dob).format("MM/DD/YYYY");

    const options = {
      method: "POST",
      url: `${host}list/submitCheckList`,
      headers: { "Content-Type": "application/json" },
      data: {
        firstname: values.firstname,
        lastname: values.lastname,
        phoneno: values.phoneno,
        email: values.email,
        dob: formatDob,
        ssn: values.ssn,
        references: references,
        list: data.list,
        htmlData: Html,
        listName: data.Listname,
        address: values.address,
        requestTimeOffDate: { startDate: from, endDate: to },
        categoryname: url,
      },
    };
    setLoading(true);
    axios
      .request(options)
      .then(function (response) {
        console.log(response);
        setLoading(true);
        if (response.data.baseResponse.status === 1) {
          swal({
            title: "Response received.",
            text: "Thank you! Your response has been received.",
            icon: "success",
          });
          setLoading(false);
          window.location.reload();
        }
      })
      .catch(function (error) {
        alert(error);
      });
  };

  const handleReferences = (e, index) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(value, "value");
    if (name === "phoneno") {
      const list = [...references];
      list[index][name] = parseInt(value);
      setReferenes(list);
    } else {
      const list = [...references];
      list[index][name] = value;
      setReferenes(list);
    }
  };

  const tableData = () => {
    const options = { method: "GET" };

    fetch(`${host}list/getCheckList/${url}`, options)
      .then((response) => response.json())
      .then((response) => {
        if (response.baseResponse.status === 1) {
          setData(response.response);
        } else {
          router.push("/404");
        }
      });
  };

  useEffect(() => tableData(), []);

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
  } = formik;
  console.log("values:", values);
  return (
    <>
      {url !== "" || url !== undefined || url !== null ? (
        <>
          <div
            className={loading ? "loader-container-show" : "loader-container"}
          >
            <div id="loading-bar-spinner" class="spinner">
              <div class="spinner-icon">
                <div class="spinner-icon2"></div>
              </div>
            </div>
          </div>
          <form>
            <div className="container checklist-head">
              <div className="midas-logo">
                <img src="/images/logo.webp" />
              </div>
              <div className="circle-box"></div>

              {url == undefined ? (
                <h2>Wait While we fetch data for you</h2>
              ) : (
                <h2>{capitalized} Skills Checklist</h2>
              )}

              <div className="col-md-12 p-1">
                <div className="row">
                  <div class="form-group row mb-3 d-flex align-items-center bg-light border rounded p-2">
                    <div className="form-group row mb-3 d-flex align-items-center">
                      <InputField
                        label={"Enter First Name*"}
                        value={values.firstname}
                        type={"text"}
                        placeholder={"First Name"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id={"validationCustom03"}
                        required={true}
                        name={"firstname"}
                        error="firstname"
                        touch="firstname"
                        errors={errors}
                        touched={touched}
                      />

                      <InputField
                        label={"Enter Last Name*"}
                        value={values.lastname}
                        type={"text"}
                        placeholder={"Last Name"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id={"validationCustom03"}
                        required={true}
                        name={"lastname"}
                      />

                      <InputField
                        label={"Enter Phone number*"}
                        value={values.phoneno}
                        type={"number"}
                        placeholder={"Enter Phone number"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id={"validationCustom03"}
                        required={true}
                        name={"phoneno"}
                      />

                      <InputField
                        label={"Enter E-mail*"}
                        value={values.email}
                        type={"email"}
                        placeholder={"Enter E-mail"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id={"validationCustom03"}
                        required={true}
                        name={"email"}
                      />

                      <InputField
                        label={"Date Of Birth*"}
                        value={values.dob}
                        type={"date"}
                        id={"dob"}
                        required={true}
                        name={"dob"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      <InputField
                        label={"Last four SSN digit"}
                        value={values.ssn}
                        type={"number"}
                        placeholder={"Last four SSN digit"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id={"validationCustom03"}
                        required={true}
                        name={"ssn"}
                      />

                      <InputField
                        label={"Enter Your Address"}
                        value={values.address}
                        placeholder={"Enter Your Address"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id={"validationCustom03"}
                        required={true}
                        name={"address"}
                      />

                      {from && to == "Invalid date" ? (
                        ""
                      ) : (
                        <>
                          <InputField
                            label={"Request Time Off"}
                            value={`${from} -  ${to}`}
                            disabled={true}
                          />
                        </>
                      )}
                      <div className="col-md-1" style={{ marginTop: "40px" }}>
                        <span
                          className="btn bg-danger text-white border rounded "
                          onClick={() => setShowDate(true)}
                        >
                          <i class="fa-solid fa-plus"></i>
                        </span>
                      </div>
                      {/* ------------------------------------------------------------------------- */}
                      {showDate === true ? (
                        <div
                          className={`modal ${showDate}`}
                          style={{ display: "block", position: "initial" }}
                        >
                          <Modal.Dialog>
                            <Modal.Header>
                              <Modal.Title>Select Request Time Off</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                              <DateRange
                                onChange={(item) => setState([item.selection])}
                                ranges={state}
                              />
                            </Modal.Body>

                            <Modal.Footer>
                              <Button
                                variant="secondary"
                                onClick={() => setShowDate(false)}
                              >
                                Close
                              </Button>
                            </Modal.Footer>
                          </Modal.Dialog>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    {/* ------------------------------------------------------------------------- */}
                    <div class="form-group row mt-3">
                      <div className="col-md-11">
                        <span
                          className="btn  btn-danger"
                          onChange={() => setActive(!active)}
                        >
                          2 professional References. (One must be supervisor)
                        </span>
                      </div>
                      <div className="col-md-11"></div>
                    </div>

                    <div className="refences-div">
                      {references.map((item, index) => (
                        <div className="form-group row mb-3 d-flex align-items-center">
                          <InputField
                            label={"Enter Referre's Name"}
                            value={item.name}
                            type={"text"}
                            placeholder={"Full Name"}
                            onChange={(e) => handleReferences(e, index)}
                            id={"validationCustom03"}
                            name={"name"}
                            required={false}
                          />
                          <InputField
                            label={"Enter Referre's Phone"}
                            value={item.phoneno}
                            type={"number"}
                            placeholder={"Enter Phone number"}
                            onChange={(e) => handleReferences(e, index)}
                            id={"validationCustom03"}
                            name={"phoneno"}
                            required={false}
                          />
                          <InputField
                            label={"Enter Referre's E-mail"}
                            value={item.email}
                            type={"text"}
                            placeholder={"Enter Referre's E-mail"}
                            onChange={(e) => handleReferences(e, index)}
                            id={"validationCustom03"}
                            name={"email"}
                            required={false}
                          />
                        </div>
                      ))}
                    </div>

                    <div class="form-group row mt-3 ">
                      <div className="col-md-11">
                        <p>
                          <strong style={{ color: "#cb1829" }}>
                            Instructions:
                          </strong>{" "}
                          <span className="text-muted text-sm declare-para">
                            This checklist is meant to serve as a general
                            guideline for our client facilities as to the level
                            of your skills within your nursing specialty. Please
                            use the scale below to describe your
                            experience/expertise in each area listed below.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group row mb-3">
                  <div className="col-md-3">
                    <p>
                      <strong style={{ color: "#cb1829" }}>
                        Proficiency Scale:
                      </strong>
                    </p>
                  </div>
                  <div className="col-md-6 profiency-level">
                    <p>1 = No Experience</p>

                    <p>2 = Need Training</p>

                    <p>3 = Able to perform with supervision</p>

                    <p>4 = Able to perform independently</p>
                  </div>
                </div>
              </div>
            </div>

            {data?.list === undefined ||
            data?.list === {} ||
            data?.list === null ||
            data?.list === [] ? (
              <>Wait</>
            ) : (
              <div className="container">
                <div className="row">
                  {data.list.map((list, index) => {
                    const ItemsVariable =
                      list.title === "CERTIFICATIONS"
                        ? list.items.pop()
                        : list.items;

                    return (
                      <>
                        {list.title == "CERTIFICATIONS" ? (
                          <>
                            <div
                              className="col-md-4"
                              style={{ display: "inherit" }}
                              key={index}
                            >
                              <table className="table table-bordered">
                                <thead className="health-table">
                                  <tr>
                                    <th className="health-row" colspan="4">
                                      {list.title}
                                    </th>
                                    <th
                                      className="health-row small"
                                      style={{
                                        width: "20px",
                                        textAlign: "center",
                                      }}
                                      scope="col"
                                    >
                                      1
                                    </th>
                                    <th
                                      className="health-row small"
                                      style={{
                                        width: "20px",
                                        textAlign: "center",
                                      }}
                                      scope="col"
                                    >
                                      2
                                    </th>
                                    <th
                                      className="health-row small"
                                      style={{
                                        width: "20px",
                                        textAlign: "center",
                                      }}
                                      scope="col"
                                    >
                                      3
                                    </th>
                                    <th
                                      className="health-row small"
                                      style={{
                                        width: "20px",
                                        textAlign: "center",
                                      }}
                                      scope="col"
                                    >
                                      4
                                    </th>
                                  </tr>
                                </thead>

                                <tbody key={index}>
                                  <tr>
                                    <th
                                      className="table-data"
                                      colspan="4"
                                      scope="row"
                                    >
                                      {ItemsVariable.name}
                                    </th>
                                    <td class="table-data">
                                      <input
                                        type="radio"
                                        value={"checked"}
                                        onChange={(e) => {
                                          ItemsVariable.value1 = e.target.value;
                                          ItemsVariable.value2 === "checked" ||
                                          ItemsVariable.value3 === "checked" ||
                                          ItemsVariable.value4 === "checked"
                                            ? (ItemsVariable.value1 = "")
                                            : null;
                                        }}
                                        name={ItemsVariable.name}
                                        required={true}
                                      />
                                    </td>
                                    <td class="table-data">
                                      <input
                                        type="radio"
                                        value={"checked"}
                                        onChange={(e) => {
                                          ItemsVariable.value2 = e.target.value;
                                          ItemsVariable.value1 === "checked" ||
                                          ItemsVariable.value3 === "checked" ||
                                          ItemsVariable.value4 === "checked"
                                            ? (ItemsVariable.value2 = "")
                                            : null;
                                        }}
                                        name={ItemsVariable.name}
                                        required
                                      />
                                    </td>
                                    <td class="table-data">
                                      <input
                                        type="radio"
                                        value={"checked"}
                                        onChange={(e) => {
                                          ItemsVariable.value3 = e.target.value;
                                          ItemsVariable.value1 === "checked" ||
                                          ItemsVariable.value2 === "checked" ||
                                          ItemsVariable.value4 === "checked"
                                            ? (ItemsVariable.value3 = "")
                                            : null;
                                        }}
                                        name={ItemsVariable.name}
                                        required
                                      />
                                    </td>

                                    <td class="table-data">
                                      <input
                                        type="radio"
                                        value={"checked"}
                                        onChange={(e) => {
                                          ItemsVariable.value4 = e.target.value;
                                          ItemsVariable.value1 === "checked" ||
                                          ItemsVariable.value2 === "checked" ||
                                          ItemsVariable.value3 === "checked"
                                            ? (ItemsVariable.value4 = "")
                                            : null;
                                        }}
                                        name={ItemsVariable.name}
                                        required
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div
                              className="col-md-6"
                              style={{ display: "inherit" }}
                              key={index}
                            >
                              <table className="table table-bordered">
                                <thead className="health-table">
                                  <tr>
                                    <th className="health-row" colspan="4">
                                      {list.title}
                                    </th>

                                    <th>
                                      <span>Expiry Date</span>
                                    </th>
                                  </tr>
                                </thead>
                                {list.items.map((item, index) => (
                                  <tbody key={index}>
                                    <tr>
                                      <th
                                        className="table-data"
                                        colspan="3"
                                        scope="row"
                                      >
                                        <input
                                          type="checkbox"
                                          value=""
                                          id="certification"
                                          style={{ marginRight: "10px" }}
                                          required
                                        />
                                      </th>
                                      <th>{item.name}</th>
                                      <th>
                                        <td>
                                          <input
                                            type="date"
                                            class="form-control"
                                            aria-describedby="date"
                                            placeholder="Select date"
                                          />
                                        </td>
                                      </th>
                                    </tr>
                                  </tbody>
                                ))}

                                <tbody>
                                  <tr>
                                    <th colSpan={4}>
                                      Other:Specify
                                      <textarea
                                        class="form-control"
                                        id="floatingTextarea2"
                                      ></textarea>
                                    </th>
                                    <th>
                                      <input
                                        type="date"
                                        class="form-control"
                                        aria-describedby="date"
                                        placeholder="Select date"
                                      />
                                    </th>
                                  </tr>
                                  <tr>
                                    <th colSpan={4}>
                                      Other : Specify
                                      <textarea
                                        class="form-control"
                                        id="floatingTextarea2"
                                      ></textarea>
                                    </th>
                                    <th>
                                      <input
                                        type="date"
                                        class="form-control"
                                        aria-describedby="date"
                                        placeholder="Select date"
                                      />
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </>
                        ) : (
                          <div
                            className="col-md-6"
                            style={{ display: "inherit" }}
                            key={index}
                          >
                            <table className="table table-bordered">
                              <thead className="health-table">
                                <tr>
                                  <th className="health-row" colspan="4">
                                    {list.title}
                                  </th>
                                  <th
                                    className="health-row small"
                                    style={{
                                      width: "20px",
                                      textAlign: "center",
                                    }}
                                    scope="col"
                                  >
                                    1
                                  </th>
                                  <th
                                    className="health-row small"
                                    style={{
                                      width: "20px",
                                      textAlign: "center",
                                    }}
                                    scope="col"
                                  >
                                    2
                                  </th>
                                  <th
                                    className="health-row small"
                                    style={{
                                      width: "20px",
                                      textAlign: "center",
                                    }}
                                    scope="col"
                                  >
                                    3
                                  </th>
                                  <th
                                    className="health-row small"
                                    style={{
                                      width: "20px",
                                      textAlign: "center",
                                    }}
                                    scope="col"
                                  >
                                    4
                                  </th>
                                </tr>
                              </thead>
                              {list.items.map((item, index) => {
                                return (
                                  <tbody key={index}>
                                    <tr>
                                      <th
                                        className="table-data"
                                        colspan="4"
                                        scope="row"
                                      >
                                        {item.subcat ? (
                                          <strong>{item.subcat} </strong>
                                        ) : (
                                          item.name
                                        )}
                                      </th>
                                      {item.subcat ? (
                                        <>
                                          <td class="table-data"></td>
                                          <td class="table-data"></td>
                                          <td class="table-data"></td>
                                          <td class="table-data"></td>
                                        </>
                                      ) : (
                                        <>
                                          <td class="table-data">
                                            <input
                                              type="radio"
                                              value={"checked"}
                                              onChange={(e) => {
                                                item.value1 = e.target.value;
                                                item.value2 === "checked" ||
                                                item.value3 === "checked" ||
                                                item.value4 === "checked"
                                                  ? (item.value1 = "")
                                                  : null;
                                              }}
                                              name={item.name}
                                              required
                                            />
                                          </td>
                                          <td class="table-data">
                                            <input
                                              type="radio"
                                              value={"checked"}
                                              onChange={(e) => {
                                                item.value2 = e.target.value;

                                                item.value1 === "checked" ||
                                                item.value3 === "checked" ||
                                                item.value4 === "checked"
                                                  ? (item.value2 = "")
                                                  : null;
                                              }}
                                              name={item.name}
                                              required
                                            />
                                          </td>
                                          <td class="table-data">
                                            <input
                                              type="radio"
                                              value={"checked"}
                                              onChange={(e) => {
                                                item.value3 = e.target.value;
                                                item.value1 === "checked" ||
                                                item.value2 === "checked" ||
                                                item.value4 === "checked"
                                                  ? (item.value1 = "")
                                                  : null;
                                              }}
                                              name={item.name}
                                              required
                                            />
                                          </td>
                                          <td class="table-data">
                                            <input
                                              type="radio"
                                              value={"checked"}
                                              onChange={(e) => {
                                                item.value4 = e.target.value;
                                                item.value1 === "checked" ||
                                                item.value2 === "checked" ||
                                                item.value3 === "checked"
                                                  ? (item.value1 = "")
                                                  : null;
                                              }}
                                              name={item.name}
                                              required
                                            />
                                          </td>
                                        </>
                                      )}
                                    </tr>
                                  </tbody>
                                );
                              })}
                            </table>
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
                <div>
                  <div class="form-group row mt-3 d-flex ">
                    <div className="col-md-1">
                      <input type="checkbox" id="declare" required />
                    </div>
                    <div className="col-md-11">
                      <p className="declare-para">
                        I hereby certify that ALL information I have provided on
                        this skills checklist and all other documentation, is
                        true and accurate. I understand and acknowledge that any
                        misrepresentation or omission may result in
                        disqualification from employment and/or immediate
                        termination.
                      </p>
                    </div>
                  </div>
                  <div
                    className="container declare-box"
                    style={{ marginTop: "10px" }}
                  >
                    <div className="date-box">
                      <p>Date signed-:</p>
                      <strong>
                        <span>{newDate}</span>
                      </strong>
                    </div>
                    <div className="sign-box">
                      <strong>
                        <span>Signature</span>
                      </strong>
                      <input
                        style={{ marginTop: "10px" }}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Your Signature"
                        onChange={(e) => setSign(e.target.value)}
                        value={sign}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      style={{ marginTop: "20px", marginBottom: "20px" }}
                      className="btn btn-primary"
                      type="submit"
                      disabled={loading}
                      onClick={(e) => submitData(e, values)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </>
      ) : (
        "Please wait while we fetch checklist for you"
      )}
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
    </>
  );
};

export default Url;

export async function getServerSideProps(context) {
  const { url } = context.query;

  return {
    props: { url: url },
  };
}
