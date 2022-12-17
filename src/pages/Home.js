import "./styles/home.css";

import Contact from "../components/home-components/contact";
import Iframe from "../components/home-components/Iframe";
import FAQ from "../components/home-components/FAQ's";
import ExpandBusiness from "../components/home-components/ExpandBusiness";
import Services from "../components/home-components/Services";
function Home() {
  return (
    <div className="home">
      <section className="what-we-do">
        <h1>We empower communities to do big things</h1>
      </section>
      <Services />
      <Iframe />
      <section className="other_container">
        <ExpandBusiness />
        <Contact />
        <FAQ />
      </section>
    </div>
  );
}

export default Home;
