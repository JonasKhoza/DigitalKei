import React from "react";

import classes from "./styles/intro_statement.module.css";

function IntroStatement() {
  return (
    <React.Fragment>
      <section className={classes.team_intro}>
        <div className={classes.intro_content}>
          <h1>We make Digital Kei</h1>
          <div className={classes.intro_desc}>
            <p>
              Get to work! We work hard every day to ensure that you only have
              to open the door to have the tastiest product in your home.
            </p>
            <p>
              We work to ensure that your future is secured. We empower you for
              tomorrow. Fortunately we know how to make it happen.
            </p>
          </div>
        </div>

        <h2>All our people in a row</h2>
      </section>
    </React.Fragment>
  );
}

export default IntroStatement;
