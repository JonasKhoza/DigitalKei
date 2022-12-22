import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

        <motion.div className="actions" animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
            >

          <Link to="">Enroll on a course</Link>
          <span>|</span>
          <Link to="">Become a seller</Link>
        
        
        </motion.div>
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