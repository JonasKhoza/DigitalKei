import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import FAQs from "../../data/FAQ's";

import "./styles/faq.css";
function FAQ() {
  const [isOpen, setIsOpen] = useState(null);

  function faqHandler(faqId) {
    setIsOpen(faqId);
  }

  return (
    <div className="faq_container">
      <h1>Frequently Asked Questions</h1>
      {FAQs.map((faq) => {
        return (
          <div className="faq_child" key={faq.id}>
            <div className="question" onClick={() => faqHandler(faq.id)}>
              <span>{isOpen === faq.id ? <RemoveIcon /> : <AddIcon />}</span>
              <h2>{faq.question}</h2>
            </div>
            {isOpen === faq.id && <p>{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
