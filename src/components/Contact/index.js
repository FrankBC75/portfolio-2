import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ht7y6ke",
        "template_cu7lg46",
        form.current,
        "37WlDq6kPJhxvXt6C"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in all opportunities - especially on ambitious or
            large projects. However, if you have any other requests or
            questions, please don't hesitate to use the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name:" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email:"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject:"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message:"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Frank Corcoran,
          <br />
          79 Dawson's Run, C.B.S.
          <br />
          Newfoundland,Canada <br />
          A1W-3J5 <br />
          <br />
          <span>frank_corcoran1975@hotmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[47.515534, -52.95172]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[47.515534, -52.95172]}>
              <Popup>Frank lives here, come over for a cup of Tea :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
