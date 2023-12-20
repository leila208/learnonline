import React from "react";
import { useState } from "react";
function Contact() {
  const [contactForm, setContactForm] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
 
}
  // const handleInput = (e) => {
  //   setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  // };
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const a = await fetch("", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       full_name: contactForm.username,
  //       email: contactForm.email,
  //       phone_number: contactForm.phoneNumber,
  //       title: contactForm.subject,
  //       message: contactForm.message,
  //     }),
  //   })
  //     .then((a) => a.json())
  //     .then((data) => data);
  //   setContactForm({
  //     username: "",
  //     email: "",
  //     phoneNumber: "",
  //     subject: "",
  //     message: "",
  //   });
  // };

  return (
    <section className="photo">
      <div className="k">
        <p>Contact</p>
      </div>
      <div className="container">
        <div className="contact">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.450130010974!2d49.94873307522994!3d40.39887797144246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030630fb013c713%3A0xbfac60c90dd3294b!2sXalqlar%20Dostlu%C4%9Fu%20metro%20stansiyas%C4%B1!5e0!3m2!1sen!2saz!4v1702559926697!5m2!1sen!2saz"
              width="500"
              height="500"
            ></iframe>
          </div>
          <div className="contact-text">
            <div className="small-text">
              <div className="contact-icon">
                <i class="fa-solid fa-address-book"></i>
                <p className="pcontent">Contact:</p>
              </div>
              <div className="contact-information">
                <p className="pcontent">+994*********</p>
              </div>
            </div>
            <div className="small-text">
              <div className="contact-icon">
                <i className="fa-regular fa-at orange" />
                <p className="pcontent ">E-mail:</p>
              </div>
              <div className="contact-information">
                <p className="pcontent">lorem@gmail.com</p>
              </div>
            </div>
            <div className="small-text">
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
                <p className="pcontent">Location:</p>
              </div>
              <div className="contact-information">
                <p className="pcontent">Education center</p>
              </div>
            </div>
            <div className="small-text">
              <div className="contact-icon">
                <i className="fa-regular fa-calendar orange" />
                <p className="pcontent">We work:</p>
              </div>
              <div className="contact-information">
                <p className="pcontent">Every weekday</p>
              </div>
            </div>
            <div className="small-text">
              <div className="contact-icon">
                <i className="fa-regular fa-clock orange" />
                <p className="pcontent">Work hours:</p>
              </div>
              <div className="contact-information">
                <p className="pcontent">09:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="line">
          <h1>Contact us</h1>
          <form onSubmit={onSubmit}>
            <div className="line-inputs">
              <input
                type="text"
                placeholder="Name"
                // onChange={handleInput}
                name="username"
                autoComplete="off"

                // value={contactForm.username}
              />
              <input
                type="email"
                // onChange={handleInput}
                name="email"
                autoComplete="off"
                // value={contactForm.email}
                placeholder="Email"
              />
              <input
                type="number"
                placeholder="Number"
                // onChange={handleInput}
                name="phoneNumber"
                autoComplete="off"
                // value={contactForm.phoneNumber}
              />
            </div>
            <div className="textareas">
              <textarea
                placeholder="Subject"
                // onChange={handleInput}
                name="subject"
                autoComplete="off"
                // value={contactForm.subject}
              ></textarea>
              <textarea
                placeholder="Message"
                // onChange={handleInput}
                name="message"
                autoComplete="off"
                // value={contactForm.message}
              ></textarea>
            </div>
            <div className="submitDiv">
              <button type="submit" className="submitBtn">
                Submit message
              </button>
            </div>{" "}
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
