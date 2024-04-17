import React, { useState } from "react";
import styles from "./BookNow.module.css";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    tel: "",
  });
  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  const handleChangeInput = (identifier, value) => {
    setFormData((prev) => ({
      ...prev,
      [identifier]: value,
    }));
    console.log(formData);
  };

  return (
    <div className={styles.BookNow_page}>
      <div className={styles.bookNow}>
        <img
          src='estimate.jpg'
          alt='clean kitchen'
        />
        <div className={styles.text}>
          <h1>GET THE FREEDOM YOU DESERVE</h1>
          <h1>Get Your Instant Quote Here</h1>
          <h2>Fill out the Form Below to Book Your Cleaner Now</h2>
        </div>
      </div>
      <h1>Fill Out This Form To Get a Free Estimate </h1>

      <form onSubmit={handleSubmitForm}>
        <div className={styles.form_element}>
          <label htmlFor='name'></label>
          <input
            type='text'
            name='name'
            onChange={(event) => handleChangeInput("name", event.target.value)}
          />
        </div>
        <div className={styles.form_element}>
          <label htmlFor='email'></label>
          <input
            type='email'
            name='email'
            onChange={(event) => handleChangeInput("email", event.target.value)}
          />
        </div>
        <div className={styles.form_element}>
          <label htmlFor='tel'></label>
          <input
            type='tel'
            name='tel'
            onChange={(event) => handleChangeInput("tel", event.target.value)}
          />
        </div>
        <div className={styles.form_element}>
          <label htmlFor='address'></label>
          <input
            type='text'
            name='address'
            onChange={(event) => handleChangeInput("address", event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default BookNow;
