import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";

import "./styles/footer.css";
function Footer() {
  return (
    <footer>
      <section className="top_content">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <div>
          <h1>
            get empowered, <br />
            for the future
          </h1>
        </div>
      </section>
      <hr className="horizontal_line" />
      <section className="bottom_content">
        <div className="first_part">
          <div className="contact_us">
            <h1>Contact us </h1>
            <div>
              <p>Whatsapp 083 464 6775</p>
              <p>Every day: 08:00 - 22:30</p>
            </div>
          </div>

          <div className="social_media">
            <h1>Follow us</h1>
            <div className="icons">
              <a href="">
                {" "}
                <img
                  src={`${process.env.PUBLIC_URL}/images/social-media/instagram-6-256.png`}
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src={`${process.env.PUBLIC_URL}/images/social-media/linkedin-256.png`}
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src={`${process.env.PUBLIC_URL}/images/social-media/facebook-xxl.png`}
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="polocies">
            <p>
              <a href="">Privacy statement</a>
            </p>
            <p>
              {" "}
              <a href="">Terms and conditions</a>
            </p>
            <p>
              <a href="">Cookie policy</a>
            </p>
          </div>
        </div>

        <div className="copyright">
          <p>
            Copyright © digitalkei <span>{new Date().getFullYear()}</span>
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
