import React, { useRef, useState } from "react";
import validateEmail from "../../helpers/contact-helpers";
import "../../styles/contact.css";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [formName, setName] = useState("");
  const [formEmail, setEmail] = useState("");
  const [formMessage, setMessage] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setEmailErrorMessage("Please enter a valid email address.");
      } else {
        setEmailErrorMessage("");
      }
    } else {
      if (e.target.name === "name") {
        const isValid = e.target.value.length;
        if (!isValid) {
          setNameErrorMessage("Please enter your name.");
        } else {
          setNameErrorMessage("");
        }
      } else {
        if (e.target.name === "message") {
          const isValid = e.target.value.length;
          if (!isValid) {
            setMessageErrorMessage("Please enter your message.");
          } else {
            setMessageErrorMessage("");
          }
        }
      }
    }
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   handleChange();
  //   setFormState({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });
  //   return;
  // }

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_5g0ynh5",
        "template_n0ebm8f",
        form.current,
        "IIBjjcjGKvHQDurqZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setWarningMessage("Email sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <h2 className="contact-title animate__animated animate__bounceInRight title">
        CONTACT
      </h2>

      <div className="row">
        <form
          className="col-5 justify-content-left flex-wrap"
          id="contact-form"
        >
          <div className="mt-3">
            <label>Name:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          {nameErrorMessage && (
            <div>
              <p className="error-message">{nameErrorMessage}</p>
            </div>
          )}
          <div className="mt-3">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          {emailErrorMessage && (
            <div>
              <p className="error-message">{emailErrorMessage}</p>
            </div>
          )}
          <div className="mt-3">
            <label>Message:</label>
            <textarea
              className="form-control"
              name="message"
              defaultValue={message}
              onBlur={handleChange}
              rows="5"
            />
          </div>
          {messageErrorMessage && (
            <div>
              <p className="error-message">{messageErrorMessage}</p>
            </div>
          )}

          <div className="mt-3 mb-5">
            <button
              data-testid="button"
              className="btn btn-outline-light"
              type="submit"
              onSubmit={sendEmail}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
