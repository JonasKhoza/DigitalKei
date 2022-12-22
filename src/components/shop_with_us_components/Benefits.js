import benefits from "../../data/Benefits";

import "./styles/benefits.css";

function Benefits() {
  return (
    <section className="benefits_container">
      <h1 className="benefits_header">Benefits of becoming a seller with us</h1>
      <ol className="benefits">
        {benefits.map((benefit) => {
          return (
            <li key={benefit.id}>
              <div className="image_container">
                <img src={benefit.image} alt={benefit.title} />
              </div>

              <div className="content_container">
                <h2>{benefit.title}</h2>
                <p>{benefit.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default Benefits;
