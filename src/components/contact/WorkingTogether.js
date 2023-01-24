import classes from "./styles/working_together.module.css";

function WorkingTogether() {
  <section className={classes.working_together}>
    <div className={classes.statement}>
      <h1>Working together?</h1>
      <p>
        We are always open to new products. Especially if they are of good
        origin, and are made without artifice, we would love to hear from you!
      </p>
    </div>
    <div className={classes.form_container}>
      <form>
        <div>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Brand or Company" />
        </div>
        <div>
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Phone" />
        </div>
        <div>
          <textarea rows="8" placeholder="Your Message"></textarea>
        </div>
        <div className={classes.form_actions}>
          <button>Send</button>
        </div>
      </form>
    </div>
  </section>;
}

export default WorkingTogether;
