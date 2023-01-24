import { Link } from "react-router-dom";
import profiles from "../../data/profiles";

import classes from "./styles/our_people.module.css";

function OurPeople() {
  return (
    <section className={classes.our_people}>
      <div className={classes.team_profiles}>
        <ul className={classes.profiles_container}>
          {profiles.map((profile) => {
            return (
              <li
                key={profile.id}
                className={!profile.profile && classes.question_list}
              >
                {profile.profile && (
                  <article className={classes.profile_content}>
                    <img src={profile.image} alt={profile.name} />
                    <div className={classes.profile_desc}>
                      <h1>{profile.name}</h1>
                      <p>{profile.position}</p>
                    </div>
                  </article>
                )}
                {!profile.profile && (
                  <div className={classes.join_team}>
                    <h1>{profile.title}</h1>
                    <Link>{profile.summary}</Link>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default OurPeople;
