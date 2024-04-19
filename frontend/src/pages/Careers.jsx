import React, { useState } from "react";
import styles from "./Careers.module.css";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      message: "",
    });
  };

  return (
    <div className={styles.careerPage}>
      <h1>Join The Team</h1>
      <p>We're looking for dedicated and experienced cleaners/maids to join our team!</p>
      <form
        onSubmit={handleSubmit}
        className={styles.applicationForm}
      >
        <div className={styles.formGroup}>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='phone'>Your Phone Number</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='experience'>Your Cleaning Experience (in years)</label>
          <input
            type='text'
            id='experience'
            name='experience'
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='message'>Additional Message (optional)</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type='submit'>Submit Application</button>
      </form>
    </div>
  );
};

export default Careers;
