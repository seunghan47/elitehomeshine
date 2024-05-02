import React, { useState } from "react";
import styles from "./Careers.module.css";
import Button from "../util/Button";

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
      <div>
        <h2>Join Our Team at EliteHomeShine!</h2>
        <h3>Company and Culture</h3>
        <p>
          EliteHomeShine is a professional cleaning service provider dedicated to delivering the highest standards of
          cleanliness and customer satisfaction. We believe in fostering a positive work environment where our employees
          feel valued and motivated.
        </p>
        <ul>
          <li>Paid Training</li>
          <li>Competitive Pay</li>
          <li>Flexible Schedules</li>
          <li>Career Growth Opportunities</li>
          <li>Supportive Team Atmosphere</li>
        </ul>
        <h3>Job Position Description</h3>
        <p>
          As a cleaner at EliteHomeShine, you'll play a crucial role in maintaining the cleanliness and hygiene of our
          clients' homes.
        </p>
        <h4>Responsibilities</h4>
        <ul>
          <li>Perform professional cleaning services using EliteHomeShine's approved procedures and products</li>
          <li>Use provided equipment efficiently and safely</li>
        </ul>
        <h4>Qualifications</h4>
        <ul>
          <li>Previous experience in professional cleaning preferred</li>
          <li>Strong attention to detail</li>
        </ul>
        <p>
          This Job Description is intended to describe the general nature and level of work performed by those assigned
          to this position. This is not a comprehensive list of all responsibilities, duties, skills, efforts, and
          conditions associated with this position. The Company reserves the right to modify this description in the
          future, with or without notice to the employee. This Job Description does not create an employment contract,
          implied or otherwise, and employment with the Company remains at will. These responsibilities are subject to
          possible modification to reasonably accommodate individuals with disabilities.
        </p>
        <h3>Fill out the form below to submit an application</h3>
      </div>
      <h1 style={{ color: " #ee1154 " }}>Join The Team</h1>
      <p>We're looking for dedicated and experienced cleaners/maids to join our team!</p>
      <form
        onSubmit={handleSubmit}
        className={styles.applicationForm}
      >
        <div className={styles.form_group}>
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
        <div className={styles.form_group}>
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
        <div className={styles.form_group}>
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
        <div className={styles.form_group}>
          <label htmlFor='experience'>Years of experience</label>
          <select
            name='experience'
            onChange={handleChange}
            required
          >
            <option value=''>-- Please select --</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>{`5 or more`}</option>
          </select>
        </div>
        <div className={styles.form_group}>
          <label htmlFor='message'>Additional Message (optional)</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <Button
          className={styles.button}
          type='submit'
        >
          Submit{" "}
        </Button>
      </form>
    </div>
  );
};

export default Careers;
