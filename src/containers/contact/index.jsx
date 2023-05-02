import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
import SocialMedia from "../../components/socialMedia";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const lang = localStorage.getItem("i18nextLng");
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
          // suprime les inputs
          form.current.user_name.value = "";
          form.current.user_email.value = "";
          form.current.message.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id={t("contact_title")} className=" contact">
      <h1 className="title">{t("contact_title")}</h1>
      <div
        style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }}
        className="card_contact contact-wrapper"
      >
        <form ref={form} onSubmit={sendEmail} className="form-horizontal">
          <input
            style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
            type="text"
            name="user_name"
            className="form-control"
            placeholder={t("Name")}
            required
          />

          <input
            style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
            type="email"
            name="user_email"
            className="form-control"
            placeholder={t("Email")}
            required
          />

          <textarea
            style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
            name="message"
            className="form-control"
            placeholder={t("Message")}
            rows="10"
            required
          />

          <input type="submit" value={t("Send")} className="send-text" />
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">
                  Ile de France , Paris
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="tel:0033612218389">(33) 6 12 21 83 89</a>
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:Imaniman4848@gmail.com">
                    Imaniman4848@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>
          <hr/> 
          <SocialMedia />
          <hr/> 
        </div>
      </div>
    </section>
  );
};
export default Contact;
