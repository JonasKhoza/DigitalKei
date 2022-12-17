import { Link } from "react-router-dom";

import "./styles/expandbusiness.css";
function ExpandBusiness() {
  return (
    <section className="expand_business">
      <div className="content">
        <h1>
          Learn new on-demand skills
          <br />
          Expand your business and increase your profits
        </h1>

        <div className="actions">
          <Link to="">Enroll on a course</Link>
          <span>|</span>
          <Link to="">Become a seller</Link>
        </div>
      </div>
      <div className="image">
        <img
          src={`${process.env.PUBLIC_URL}/images/services/welcome-new-employee.png`}
          alt=""
        />
      </div>
    </section>
  );
}

export default ExpandBusiness;
