import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
import SocialMedia from "../../components/socialMedia";
import { useTranslation } from "react-i18next";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import useMediaQuery from "../../helpers/MediaQuery";
const Contact = () => {
  const lang = localStorage.getItem("i18nextLng");
  const { t } = useTranslation();
  const form = useRef();
  // const matches = useMediaQuery("(max-width:767px)");
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
          alert(` ${form.current.user_name.value} ${t("email_envoyer")} `);
          console.log(result.text);
          // delet  inputs
          form.current.user_name.value = "";
          form.current.user_email.value = "";
          form.current.message.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // useEffect(() => {
  //   AOS.init({ duration: 2000 });
  // }, []);
  return (
    <section
      id={t("contact_id")}
      className=" contact"
      itemScope
      itemType="http://schema.org/Person"
    >
      <h1 className="title">{t("contact_title")}</h1>
      <div
        style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }}
        className=" contact-wrapper"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="form-horizontal"
          // data-aos="fade-left"
          style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
        >
          <label htmlFor="name">{t("Name")}</label>
          <input
            style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
            type="text"
            name="user_name"
            className="form-control"
            placeholder={t("Name")}
            id="name"
            required
          />

          <label htmlFor="email">{t("Email")}</label>
          <input
            style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
            type="email"
            id="email"
            name="user_email"
            className="form-control"
            placeholder={t("Email")}
            required
          />
          <label htmlFor="message">{t("Message")}</label>
          <textarea
            style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
            name="message"
            id="message"
            className="form-control"
            placeholder={t("Message")}
            rows="10"
            required
          />

          <input type="submit" value={t("Send")} className="send-text" />
        </form>

        <div
          className="direct-contact-container"
          // data-aos="fade-right"
        >
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x"></i>
              <span itemProp="location" className="contact-text place">
                Ile de France , Paris
              </span>
            </li>

            <li className="list-item">
              <i className="fa fa-phone fa-2x"></i>
              <span className="contact-text phone">
                <a itemProp="telephone" href="tel:0033612218389">
                  (33) 6 12 21 83 89
                </a>
              </span>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-2x"></i>
              <span className="contact-text gmail">
                <a itemProp="email" href="mailto:Imaniman4848@gmail.com">
                  Imaniman4848@gmail.com
                </a>
              </span>
            </li>
          </ul>

          <SocialMedia />
        </div>
      </div>
    </section>
  );
};
export default Contact;
