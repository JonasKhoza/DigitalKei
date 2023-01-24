import classes from "./styles/social_media.module.css";

function SocialMedia() {
  return (
    <section className={classes.social_media}>
      <h1>Contact</h1>
      <div className={classes.social_media_platforms}>
        <div className={classes.whatsapp_email}>
          <div className={`${classes.social_item} ${classes.whatsapp}`}>
            <h2>Whatsapp</h2>
            <div className={classes.item_content}>
              <p>
                Are you happy? Are you missing something? Can we improve
                something? We would like to hear it!
              </p>
              <p>076 464 5555</p>
              <p>Every day: 08:00 - 22:30</p>
            </div>
          </div>
          <div className={classes.social_item}>
            <h2>E-mail</h2>
            <p className={classes.email}>service@digitalkei.co.za</p>
          </div>
          <div className={classes.social_item}>
            <h2>Address</h2>
            <div className={classes.item_content}>
              <p>Digital Kei</p>
              <p> Mandela street 44</p>
              <p>Great Kei, 0354</p>
            </div>
          </div>
        </div>
        <div className={classes.facebook_others}>
          {" "}
          <div className={classes.social_item}>
            <h2>
              follow us<span>👉</span>
            </h2>

            <div className={classes.icons}>
              <a href="">
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
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
