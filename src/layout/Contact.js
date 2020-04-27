import React from "react";
import {
  FaMobileAlt,
  FaAddressCard,
  FaAt,
  FaFacebookSquare
} from "react-icons/fa";
import "../styles/styles.scss";
import Title from "../components/Title";
export const Contact = () => {
  return (
    <>
      <section id="contactSection">
        <Title title="Zapraszamy do kontaktu" />
        <div className="wrapper">
          <div className="iconsContainer">
            <FaAddressCard size="2em" className="footerIcons" />
            <span>MOTOB sp. z o.o.</span>
            <span>ul. Głowackiego 7/1 </span>
            <span> 32-020 Wieliczka</span>
          </div>
          <div className="iconsContainer">
            <FaMobileAlt className="footerIcons" size="2em" />
            <a href="tel: +48571242729" className="footerIcons">
              +48 571 242 729
            </a>
            <a href="tel:  +48508687070" className="footerIcons">
              +48 508 687 070
            </a>
          </div>
          <div className="iconsContainer">
            <FaAt className="footerIcons" size="2em" />
            <a href="mailto: wypozyczalnia.motob@gmail.com">
              wypozyczalnia.motob@gmail.com
            </a>
          </div>
          <div className="iconsContainer">
            <a href="https://www.facebook.com/wypozyczalniamotob/">
              <FaFacebookSquare className="mediaIcon" size="2em" />
            </a>
            <div
              className="fb-like"
              data-href="https://www.facebook.com/wypozyczalniamotob/"
              data-width="15px"
              data-layout="button_count"
              data-action="like"
              data-size="small"
              data-share="true"
            ></div>
          </div>
        </div>
        <p >
          Kontakt telefoniczny czynny całą dobę
        </p>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.6608004089694!2d20.066396315134597!3d49.98021942901682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716416524da6e07%3A0x1278cbd43a3dd580!2smotob.pl!5e0!3m2!1spl!2spl!4v1585740800865!5m2!1spl!2spl"
          width="900"
          height="600"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </section>
    </>
  );
};
export default Contact;
