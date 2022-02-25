import "./Socialbar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Socialbar = () => {
  return (
    <div className="socialBar">
      <div className="socialBar-container">
        <a
          href="https://twitter.com/btmortondev"
          target="_blank"
          rel="noreferrer"
          className="social-icons"
        >
          {" "}
          <TwitterIcon />{" "}
        </a>
        <a
          href="https://www.youtube.com/channel/UC1E6YyXqxDc6-u8pLJpcqWw/featured"
          target="_blank"
          rel="noreferrer"
          className="social-icons"
        >
          {" "}
          <YouTubeIcon />{" "}
        </a>
        <a
          href="https://www.instagram.com/btmortondev/"
          target="_blank"
          rel="noreferrer"
          className="social-icons"
        >
          {" "}
          <InstagramIcon />{" "}
        </a>
        <a
          href="https://github.com/btmortondev"
          target="_blank"
          rel="noreferrer"
          className="social-icons"
        >
          {" "}
          <GitHubIcon />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/brandon-morton-551508215/"
          target="_blank"
          rel="noreferrer"
          className="social-icons"
        >
          {" "}
          <LinkedInIcon />{" "}
        </a>
      </div>
    </div>
  );
};

export default Socialbar;
