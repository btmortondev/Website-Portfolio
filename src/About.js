import './About.css';
import Resume from './Content/BTM-21-Resume.pdf';

const About = () => {
    return ( 
        <div className="about-content">
            <h1>About Me</h1>
            <a href= { Resume } target="_blank" rel="noreferrer">Resume</a>
        </div>
     );
}

export default About;