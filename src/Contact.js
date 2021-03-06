import "./Contact.css";
import { useState } from "react";
import { db } from "./Firebase";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted!");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="contact-content">
      <h1 className="page-title"> Get In Touch </h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="form-label-first">First Name: </label>
        <input
          className="form-input"
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className="form-label-last">Last Name: </label>
        <input
          className="form-input"
          placeholder="last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="form-label-email">Email: </label>
        <input
          className="form-input"
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form-label-phone">Phone</label>
        <input
          className="form-input"
          placeholder="(123) 456-7890"
          onChange={(e) => setPhone(e.target.value)}
        />
        <label className="form-label-message">Message</label>
        <textarea
          className="form-message"
          placeholder="message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="form-submit"
          style={{ background: loader ? "var(--website-background)" : "none" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
