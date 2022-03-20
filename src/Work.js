import "./Work.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import CryptoProject from "./img/workimg/cryptoapi.png";

const Work = () => {
  return (
    <div className="work-content">
      <div className="title-container">
        <p className="work-title"> Some Things I've Built </p>
      </div>
      <section className="project-section">
        <div className="project-image-odd">
          <img
            className="crypto-img"
            src={CryptoProject}
            alt="Crypto API Project"
          />
        </div>
        <div className="project-information-odd">
          <p className="project-team-odd"> Personal Project </p>
          <p className="project-name-odd"> Crypto API Tracker </p>
          <p className="project-description-odd">
            {" "}
            Simple web application that uses a fre API to track different crypto
            coins. This was my first experience working with an API.
          </p>
          <ul className="project-tools-list-odd">
            <li className="project-tools-odd"> VS Code </li>
            <li className="project-tools-odd"> React </li>
            <li className="project-tools-odd"> CoinGecko API </li>
          </ul>
          <div className="project-links-odd">
            <a
              href="https://github.com/btmortondev/react-api-project"
              target="_blank"
              rel="noreferrer"
              className="github-icon-odd"
            >
              {" "}
              <GitHubIcon />{" "}
            </a>
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="project-information-even">
          <p className="project-team-even"> Group College Project </p>
          <p className="project-name-even"> Datcord </p>
          <p className="project-description-even">
            {" "}
            This project was a Discord clone that I made with some of my
            classmates. Used Firebase snapshotting feature for real-time
            messaging. Also added the ability to send image files too.
          </p>
          <ul className="project-tools-list-even">
            <li className="project-tools-even"> VS Code </li>
            <li className="project-tools-even"> Material UI </li>
            <li className="project-tools-even"> Firebase </li>
          </ul>
          <div className="project-links-even">
            <a
              href="https://github.com/btmortondev"
              target="_blank"
              rel="noreferrer"
              className="github-icon-even"
            >
              {" "}
              <GitHubIcon />{" "}
            </a>
          </div>
        </div>
        <div className="project-image-even">
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/OWkF7FSIk6I"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Work;
