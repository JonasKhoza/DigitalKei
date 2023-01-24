import classes from "./styles/working_together.module.css";

function WorkingTogether() {
  return (
    <section className={classes.working_together}>
      <div className={classes.statement}>
        <h1>Working together?</h1>
        <p>
          We are always open to new products. Especially if they are of good
          origin, and are made without artifice, we would love to hear from you!
        </p>
      </div>
      <div className={classes.contact_form_container}>
        <div className={classes.contact_container}>
          <form>
            <div className={classes.inputs}>
              <div className={classes.inputs_container}>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Name"
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Brand or Company"
                  required
                />
              </div>
              <div className={classes.inputs_container}>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />
                <input type="tel" name="phone" placeholder="Phone" required />
              </div>
            </div>
            <div className="textarea">
              <textarea
                id="message"
                name="message"
                rows="8"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className={classes.form_actions}>
              {" "}
              <label>
                <input
                  type="checkbox"
                  name="terms_conditions"
                  className={classes.terms_conditions}
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
    </section>
  );
}

export default WorkingTogether;
