import "./Socialbar.css";
// import TwitterIcon from "@material-ui/icons/Twitter";
import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from "@material-ui/icons/YouTube";
import YouTubeIcon from '@mui/icons-material/YouTube';
// import InstagramIcon from "@material-ui/icons/Instagram";
import InstagramIcon from '@mui/icons-material/Instagram';
// import GitHubIcon from "@material-ui/icons/GitHub";
import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
          <TwitterIcon fontSize="large"/>{" "}
        </a>
        <a
          href="https://www.youtube.com/channel/UC1E6YyXqxDc6-u8pLJpcqWw/featured"
          target="_blank"
          rel="noreferrer"
          className="social-icons"
        >
          {" "}
          <YouTubeIcon fontSize="large"/>{" "}
        </a>
        <a
          href="https://www.instagram.com/btmortondev/"
          target="_blank"
          rel="noreferrer"
          className="social-icons"
        >
          {" "}
          <InstagramIcon fontSize="large"/>{" "}
        </a>
        <a
          href="https://github.com/btmortondev"
          target="_blank"
          rel="noreferrer"
          className="social-icons"
        >
          {" "}
          <GitHubIcon fontSize="large"/>{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/brandon-morton-551508215/"
          target="_blank"
          rel="noreferrer"
          className="social-icons"
        >
          {" "}
          <LinkedInIcon fontSize="large"/>{" "}
        </a>
      </div>
    </div>
  );
};

export default Socialbar;
