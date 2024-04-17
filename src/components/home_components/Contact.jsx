import React from "react";
import styles from "./Contact.module.css";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const formSubmit = (event) => {
    event.preventDefault();

    /**
     * send the form to the backend and send a confirmation email after.
     */
  };

  const updateField = (identifier, value) => {
    setForm((prev) => ({
      ...prev,
      [identifier]: value,
    }));
    console.log(form);
  };

  return (
    <div className={styles.form}>
      <h1>Contact Us</h1>
      <form onSubmit={formSubmit}>
        <div className={styles.formElement}>
          <label htmlFor='name'>Enter your name: </label>
          <input
            type='text'
            name='name'
            onChange={(event) => updateField("name", event.target.value)}
          />
        </div>
        <div className={styles.formElement}>
          <label htmlFor='email'>Enter your email: </label>
          <input
            type='email'
            name='email'
            onChange={(event) => updateField("email", event.target.value)}
          />
        </div>
        <div className={styles.formElement}>
          <label htmlFor='phone'>Enter your phone: </label>
          <input
            type='tel'
            name='phone'
            onChange={(event) => updateField("phone", event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='message'>Write your message here:</label>
          <br />
          <textarea
            type='text'
            placeholder='Send any messages here!'
            name='message'
            onChange={(event) => updateField("message", event.target.value)}
          />
        </div>
        <button className={styles.button}>Submit!</button>
      </form>
    </div>
  );
};

export default Contact;
