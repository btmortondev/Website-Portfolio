import './About.css';
import Resume from './Content/BTM-21-Resume.pdf';
import GetAppIcon from '@material-ui/icons/GetApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const About = () => {
    return ( 
        <div className="about-content">
            <h1 className="about-title" >About Me</h1>
            <div className="about-first-fold" >
                <ul className="about-contact" >
                    <li className="about-contact-li" >
                        <a href="https://github.com/btmortondev" target="_blank" rel="noreferrer" className="github-link" >
                        <GitHubIcon/>
                        </a>
                    </li>
                    <li className="about-contact-li" >
                        <a href="https://www.linkedin.com/in/brandon-morton-551508215/" target="_blank" rel="noreferrer"
                         className="linkedin-link" > <LinkedInIcon /> </a>
                    </li>
                    <li className="about-contact-li" >
                        Download my resume
                        <a href= { Resume } target="_blank" rel="noreferrer" className="resume-download-icon" >
                        <GetAppIcon /> </a>
                    </li>
                </ul>
                <p className="about-description" >
                    I am a software engineer who recently graduated college from Youngstown State University.
                    Frontend development is what I'm looking to do for work and all of the skills and knowledge I have
                    applicable is self taught.
                    I currently live in Youngstown, OH and would eventually like to move away.
                    Remote work or somewhere that is reasonable to comute would be great!
                </p>
            </div>
            <div className="about-second-fold" >
                <h2 className="interests-title" > Interests/Passions </h2>
                <ul className="interests-ul" >
                    <li className="interests-li" >
                        Web Development,
                        <br/>
                        Mainly frontend
                        <br/>
                        Would be interested in learning backend eventually
                    </li>
                    <li className="interests-li" >
                        Game Development,
                        <br/>
                        Unity
                        <br/>
                        Aseprite 
                        <br/>
                        AI Design
                    </li>
                </ul>

                <h2 className="skills-title" > Tools/Skills </h2>
                <ul className="skills-ul" >
                    <li className="skills-li" >
                        React/Redux
                        <br/>
                        JavaScript
                        <br/>
                        HTML/JSX
                        <br/>
                        CSS
                        <br/>
                        Drupal
                    </li>
                    <li className="skills-li" >
                        Java
                        <br/>
                        Visual Basic and .NET Framework
                        <br />
                        C++
                        <br/>
                        Python
                        <br/>
                        MySQL
                    </li>
                    <li className="skills-li" >
                        C#
                        <br/>
                        Unity
                        <br/>
                        Pixel Art and Animations
                        <br/>
                    </li>
                </ul>
                
                <h2 className="work-experience-title" >Applicable Work Experience</h2>
                <ul className="work-experience-ul" >
                    <li className="work-experience-li" >
                        Student Web Developer
                        <br/>
                        @ Youngstown State University
                        <br/>
                        March 2021 - May 2021
                        <br/>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default About;