import './About.css';
import Resume from './Content/BTM-21-Resume.pdf';
import GetAppIcon from '@material-ui/icons/GetApp';

const About = () => {
    return ( 
        <div className="about-content">
            <h1 className="about-title" >About Me</h1>
            <div className="about-first-fold" >
                <ul className="about-contact" >
                    <li className="about-contact-li" >

                    </li>
                    <li className="about-contact-li" >

                    </li>
                    <li  >
                        Download my
                        <a className="resume-link" href= { Resume } target="_blank" rel="noreferrer"> resume </a>
                        <GetAppIcon className="resume-download-icon"/>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default About;