import React, { useState } from "react";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const [expandItems, setExpandedItems] = useState({});
  const toggleItem = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className={styles.faqPage}>
      <h1 style={{ textAlign: "center" }}>FAQ Page</h1>
      {FAQlist.map((item, index) => (
        <div className={styles.faq}>
          <div
            className={styles.faq_container}
            onClick={() => toggleItem(index)}
          >
            <h3>{item.question}</h3>
            <p style={{ fontSize: "32px" }}>+</p>
          </div>
          {expandItems[index] && <p>{item.answer}</p>}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FAQ;

const FAQlist = [
  {
    question: "What services does EliteHomeShine offer?",
    answer:
      "EliteHomeShine provides a wide range of cleaning services for both commercial and residential properties. Our services include but are not limited to regular house cleaning, deep cleaning, office cleaning, carpet cleaning, window cleaning, and post-construction cleaning.",
  },
  {
    question: "How can I book a cleaning service with EliteHomeShine?",
    answer:
      "Booking a cleaning service with EliteHomeShine is simple. You can visit our website and fill out the online booking form, specifying your cleaning requirements, preferred date, and time. Alternatively, you can contact our customer support team via phone or email to assist you with the booking process.",
  },
  {
    question: "Are your cleaning products environmentally friendly?",
    answer:
      "Yes, at EliteHomeShine, we prioritize using eco-friendly and non-toxic cleaning products to ensure the safety of our clients, their families, and the environment. We strive to minimize our ecological footprint while delivering exceptional cleaning results.",
  },
  {
    question: "Do I need to provide cleaning equipment and supplies?",
    answer:
      "No, you don't need to worry about providing cleaning equipment and supplies. Our professional cleaners come fully equipped with all the necessary tools, detergents, and machinery to carry out the cleaning tasks efficiently.",
  },
  {
    question: "How are your cleaners selected and trained?",
    answer:
      "We have a rigorous selection process to ensure that only the most qualified and experienced cleaners join our team. All our cleaners undergo thorough background checks and training programs to meet our high standards of quality and professionalism.",
  },
  {
    question: "What safety measures do you have in place during the COVID-19 pandemic?",
    answer:
      "EliteHomeShine adheres to strict health and safety protocols to protect both our clients and our staff during the COVID-19 pandemic. Our cleaners wear masks, gloves, and other protective gear, practice social distancing, and follow enhanced cleaning and disinfection procedures according to CDC guidelines.",
  },
  {
    question: "What if I need to reschedule or cancel my cleaning appointment?",
    answer:
      "If you need to reschedule or cancel your cleaning appointment, please contact our customer support team as soon as possible. We understand that circumstances may change, and we will do our best to accommodate your request and find an alternative appointment that suits your schedule.",
  },
  {
    question: "Is there a satisfaction guarantee?",
    answer:
      "Yes, customer satisfaction is our top priority at EliteHomeShine. If for any reason you are not satisfied with the cleaning service provided, please let us know within 24 hours, and we will arrange for a re-clean at no additional cost.",
  },
  {
    question: "Are your cleaning services available on weekends and holidays?",
    answer:
      "Yes, we offer flexible scheduling options, including weekends and holidays, to accommodate our clients' busy lifestyles and preferences. You can book our cleaning services at your convenience, and we will ensure timely and reliable service delivery.",
  },
  {
    question: "How do I pay for the cleaning service?",
    answer:
      "We accept various payment methods, including credit/debit cards, online payment gateways, and cash. Payment is due upon completion of the cleaning service, and our team will provide you with an invoice for your records.",
  },
];
