import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

import "./styles/contact.css";

function Contact() {
  return (
    <section className="become_part">
      <div className="content_container">
        <div className="statement">
          <h1>How do I become part of Digital Kei?</h1>
          <p>We would love to invite more producers to grow with us</p>
        </div>
        <div className="contact_form_container">
          <div className="contact_container">
            <div className="contact_us">
              <p>
                <LocalPhoneIcon className="icon" /> +103 476 4376
              </p>
              <p>
                <EmailIcon className="icon" />
                hello@digitalkei.app
              </p>
            </div>
            <form>
              <div className="inputs">
                <div className="inputs_container">
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="inputs_container">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    name="about"
                    placeholder="About"
                    required
                  />
                </div>
              </div>
              <div className="textarea">
                <textarea
                  id="message"
                  name="message"
                  rows="8"
                  placeholder="Type here"
                  required
                ></textarea>
              </div>
              <div className="form_actions">
                {" "}
                <label>
                  <input
                    type="checkbox"
                    name="terms_conditions"
                    className="terms_conditions"
                  />
                  I accept the terms and conditions
                </label>
                <div>
                  <button>Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
