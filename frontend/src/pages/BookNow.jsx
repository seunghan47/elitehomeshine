import React, { useState } from "react";
import styles from "./BookNow.module.css";
import Button from "../util/Button";

const BookNow = () => {
  // const url = "http://localhost:8080/booking/totalCost";

  const [totalCost, setTotalCost] = useState();

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

      <div className={styles.form_container}>
        <h1>Get a Free Estimate</h1>

        <div>
          <label htmlFor=''>Cost: </label>
          <h1>{totalCost}</h1>
        </div>
      </div>
    </div>
  );
};

export default BookNow;

// long id;
// private int bedNum;
// private int bahtNum;
// private int electronicNums;
// private boolean hasPet;
// private boolean electronics;
// private boolean laundry;
// const fetchtotal = async () => {
//   const response = await fetch(url);
//   if (!response) {
//     throw new Error("Error retreiving totalCost");
//   } else {
//     const responseData = await response.json();
//     setTotalCost(responseData);
//   }
// };

// fetchtotal();
// console.log(totalCost);

// const [formData, setFormData] = useState({
//   name: "",
//   email: "",
//   address: "",
//   tel: "",
// });
// {
/* <form onSubmit={handleSubmitForm}>
          <div className={styles.form_element}>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              onChange={(event) => handleChangeInput("name", event.target.value)}
              value={formData.name}
            />
          </div>
          <div className={styles.form_element}>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name='email'
              onChange={(event) => handleChangeInput("email", event.target.value)}
              value={formData.email}
            />
          </div>
          <div className={styles.form_element}>
            <label htmlFor='tel'>Phone:</label>
            <input
              type='tel'
              name='tel'
              onChange={(event) => handleChangeInput("tel", event.target.value)}
              value={formData.tel}
            />
          </div>
          <div className={styles.form_element}>
            <label htmlFor='address'>Address:</label>
            <input
              type='text'
              name='address'
              onChange={(event) => handleChangeInput("address", event.target.value)}
              value={formData.address}
            />
          </div>
          <Button className={styles.btn}>Get Instant Quote</Button>
        </form> */
// }
