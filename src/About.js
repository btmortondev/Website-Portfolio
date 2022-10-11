import "./About.css";
import Resume from "./Content/BTM-21-ResumeJune.pdf";
import GetAppIcon from "@material-ui/icons/GetApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const About = () => {
  return (
    <div className="about-content">
      <h1 className="about-title">About Me</h1>
      <div className="about-body" >
        <div className="about-first-fold">
          <ul className="about-contact">
            <li className="about-contact-li">
              <a
                href="https://github.com/btmortondev"
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >
                <GitHubIcon fontSize="large"/>
              </a>
            </li>
            <li className="about-contact-li">
              <a
                href="https://www.linkedin.com/in/brandon-morton-551508215/"
                target="_blank"
                rel="noreferrer"
                className="linkedin-link"
              >
                {" "}
                <LinkedInIcon fontSize="large"/>{" "}
              </a>
            </li>
            <li className="about-contact-li">
              Download my resume
              <a
                href={Resume}
                target="_blank"
                rel="noreferrer"
                className="resume-download-icon"
              >
                <GetAppIcon fontSize="large"/>{" "}
              </a>
            </li>
          </ul>
          <p className="about-description">
            I am a software engineer who recently graduated college from
            Youngstown State University. Frontend development is what I'm currently
            looking to do for work. I live in Youngstown, OH and would
            eventually like to move away. I'm open to all opportunites 
            including: remote work, close commute, or relocation depending on location
            and opportunity!
          </p>
        </div>

        <div className="about-second-fold">
          <h2 className="interests-title"> Interests/Passions </h2>
          <ul className="interests-ul">
            <li className="interests-li">
              <p className="interests-items" > Web Development, </p>
              <p className="interests-items" > Mainly frontend </p>
              <p className="interests-items" > Would be interested in learning backend eventually </p>
            </li>
            <li className="interests-li">
              <p className="interests-items" > Game Development, </p>
              <p className="interests-items" > Unity </p>
              <p className="interests-items" > 2D and 3D Animation </p>
              <p className="interests-items" > AI Design </p>
            </li>
          </ul>

          <h2 className="skills-title"> Tools/Skills </h2>
          <ul className="skills-ul">
            <li className="skills-li">
              <p className="skills-items" > React/Redux </p>
              <p className="skills-items" > JavaScript </p>
              <p className="skills-items" > HTML </p>
              <p className="skills-items" > CSS </p>
              <p className="skills-items" > Firebase </p>
              <p className="skills-items" > Drupal </p>
            </li>
            <li className="skills-li">
              <p className="skills-items" > Java </p>
              <p className="skills-items" > Visual Basic and .NET Framework </p>
              <p className="skills-items" > C++ </p>
              <p className="skills-items" > Python </p>
              <p className="skills-items" > MySQL </p>
            </li>
          </ul>

          <h2 className="work-experience-title">Applicable Work Experience</h2>
          <ul className="work-experience-ul">
            <li className="work-experience-li">
              Student Web Developer
              <br />
              @ Youngstown State University
              <br />
              March 2021 - May 2021
              <br />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
