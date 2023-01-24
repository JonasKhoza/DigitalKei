import register from "../../data/Register";

import "./styles/register.css";
function Register() {
  return (
    <section className="register">
      <div className="register_header">
        <h1>How To Register</h1>
        <img
          src={`${process.env.PUBLIC_URL}/images/services/woman-thinking-concept-illustration_114360-7921.webp`}
          alt=""
          className="register_img"
        />
      </div>

      <div className="register_child_container">
        <ul className="register_steps">
          {register.map((step) => {
            const styles =
              step.step === 2
                ? "each_step"
                : step.step === 4
                ? "each_step"
                : step.step === 6
                ? "each_step"
                : "step";
            return (
              <li key={step.step} className={styles}>
                <article className="step_article">
                  <h2>{step.step}</h2>
                  <p>{step.desc}</p>
                </article>
              </li>
            );
          })}
        </ul>

        <img
          src={`${process.env.PUBLIC_URL}/images/account/sign-up-concept-illustration_114360-7895.webp`}
          alt=""
        />
      </div>
    </section>
  );
}

export default Register;
