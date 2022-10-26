import React, { useRef, useState } from "react";
// import validateEmail from "../../helpers/contact-helpers";
import "../../styles/contact.css";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [from_name, setName] = useState("");
  const [from_email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [warningMessage, setWarningMessage] = useState("");

  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [emailErrorMessage, setEmailErrorMessage] = useState("");
  // const [nameErrorMessage, setNameErrorMessage] = useState("");
  // const [messageErrorMessage, setMessageErrorMessage] = useState("");

  // const { name, email, message } = formState;

  // function handleChange(e) {
  //   if (e.target.name === "email") {
  //     const isValid = validateEmail(e.target.value);
  //     if (!isValid) {
  //       setEmailErrorMessage("Please enter a valid email address.");
  //     } else {
  //       setEmailErrorMessage("");
  //     }
  //   } else {
  //     if (e.target.name === "name") {
  //       const isValid = e.target.value.length;
  //       if (!isValid) {
  //         setNameErrorMessage("Please enter your name.");
  //       } else {
  //         setNameErrorMessage("");
  //       }
  //     } else {
  //       if (e.target.name === "message") {
  //         const isValid = e.target.value.length;
  //         if (!isValid) {
  //           setMessageErrorMessage("Please enter your message.");
  //         } else {
  //           setMessageErrorMessage("");
  //         }
  //       }
  //     }
  //   }
  // }

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_5g0ynh5",
        "template_n0ebm8f",
        form.current,
        "7oZdiy-5bPQ9ZGN8i"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="container">
      <h2 className="contact-title animate__animated animate__bounceInRight title">
        CONTACT
      </h2>

      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></script>

      <script type="text/javascript">
        (function(){emailjs.init("7oZdiy-5bPQ9ZGN8i")})();
      </script>

      <div className="row">
        <form
          className="col-5 justify-content-left flex-wrap"
          id="contact-form"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="mt-3">
            <label>Name:</label>
            <input
              className="form-control"
              type="text"
              name="from_name"
              // defaultValue={name}
              value={from_name}
              // onBlur={handleChange}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* {nameErrorMessage && (
            <div>
              <p className="error-message">{nameErrorMessage}</p>
            </div>
          )} */}
          <div className="mt-3">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              name="from_email"
              // defaultValue={email}
              value={from_email}
              // onBlur={handleChange}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* {emailErrorMessage && (
            <div>
              <p className="error-message">{emailErrorMessage}</p>
            </div>
          )} */}
          <div className="mt-3">
            <label>Message:</label>
            <textarea
              className="form-control"
              name="message"
              // defaultValue={message}
              value={message}
              // onBlur={handleChange}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
            />
          </div>
          {/* {messageErrorMessage && (
            <div>
              <p className="error-message">{messageErrorMessage}</p>
            </div>
          )} */}

          <div className="mt-3 mb-5">
            <button
              data-testid="button"
              className="btn btn-outline-light"
              type="submit"
              value="Send"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
