import './Home.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';

const Home = () => {
    return (
        <div className="home-content">
          <p className="homepage-greeting" > Hello, </p>
          <p className="homepage-subgreeting" >
            Welcome to my personal portfolio website.
            <br/>
            It's a work in progress so check back often!
          </p>
          <div className="footer-content" >
            <p className="made-with-title" >
              <CodeIcon/>
            </p>
            <ul className="made-with-list" >  
              <li className="made-with-li" >
                React/Redux
              </li>
              <li className="made-with-li" >
                Firebase
              </li>
              <li className="made-with-li" >
                JSX
              </li>
              <li className="made-with-li" >
                CSS
              </li>
              <li className="made-with-li" >
                Material UI Icons
              </li>
            </ul>
          </div>
          <p className="project-signature" > 
            Made by: Brandon Morton <br/>
            <a href="https://twitter.com/btmortondev" target="_blank" rel="noreferrer" className="social-icons" > <TwitterIcon /> </a>
            <a href="https://www.youtube.com/channel/UC1E6YyXqxDc6-u8pLJpcqWw/featured" target="_blank" rel="noreferrer" className="social-icons" > <YouTubeIcon /> </a>
            <a href="https://www.instagram.com/btmortondev/" target="_blank" rel="noreferrer" className="social-icons" > <InstagramIcon /> </a>
            <a href="https://github.com/btmortondev" target="_blank" rel="noreferrer" className="social-icons"> <GitHubIcon /> </a>
            <a href="https://www.linkedin.com/in/brandon-morton-551508215/" target="_blank" rel="noreferrer" className="social-icons" > <LinkedInIcon /> </a>
          </p>
        </div>
      );
}
 
export default Home;