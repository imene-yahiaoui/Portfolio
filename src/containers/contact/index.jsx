import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
import SocialMedia from "../../components/socialMedia";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ftu8pss",
        "template_8chj4e7",
        form.current,
        "UBZTusyE5gpEpliK1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id={t("contact_title")} className="contact">
      <h1 className="title">{t("contact_title")}</h1>
      <div className="contact-wrapper">
        <form ref={form} onSubmit={sendEmail} className="form-horizontal">
          <input
            type="text"
            name="user_name"
            className="form-control"
            placeholder="Name"
            required
          />

          <input
            type="email"
            name="user_email"
            className="form-control"
            placeholder="EMAIL"
            required
          />

          <textarea
            name="message"
            className="form-control"
            placeholder="msg"
            rows="10"
          />

          <input type="submit" value="Send" className="send-text" />
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">City, State</span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="tel:1-212-555-5555" title="Give me a call">
                    (212) 555-2368
                  </a>
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:#" title="Send me an email">
                    hitmeup@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>

          <SocialMedia />
        </div>
      </div>
    </section>
  );
};
export default Contact;
