import { fqas } from "../../assects";
import "./fqa.css";
import { useState } from "react";
const FQA = () => {
  const [session, setsession] = useState(0);

  return (
    <div className="fqa-sec">
      <h1>Frequently Asked Questions</h1>
      <div className="para">
        {fqas.map((val, idx) => (
          <div
            className={`session ${idx == session ? "show" : ""}`}
            key={idx}
            onClick={() => setsession(idx)}
          >
            <div className="question">
              <span>{val.question}</span>
              <div className="icon">
                <i className="fa-solid fa-circle-chevron-down"></i>
              </div>
            </div>
            <div className="answer">{val.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FQA;
