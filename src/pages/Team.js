import IntroStatement from "../components/Team/Intro_Statement";
import OurPeople from "../components/Team/Our_People";

import classes from "./styles/team.module.css";
function Team() {
  return (
    <div className={classes.team}>
      <IntroStatement />
      <OurPeople />
    </div>
  );
}

export default Team;
