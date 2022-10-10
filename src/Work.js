import "./Work.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import CryptoProject from "./img/workimg/cryptoapi.png";
import InspectionProject from "./img/workimg/mjbinspectionwebsite.jpg";
import FolderOutlined from "@material-ui/icons/FolderOpenOutlined";
import OpenInNewOutlined from "@material-ui/icons/OpenInNewOutlined";

const Work = () => {
  return (
    <div className="work-content">
      <div className="title-container">
        <p className="work-title"> Some Things I've Built </p>
      </div>

      <section className="project-section">
        <div className="project-information-even">
          <p className="project-team-even"> Freelance Project </p>
          <p className="project-name-even"> Home Inspection Website </p>
          <p className="project-description-even">
            {" "}
            This was a professional home inspection website I built for 
            a new business. One of my first freelance projects I've completed.
          </p>
          <ul className="project-tools-list-even">
            <li className="project-tools-even"> React </li>
            <li className="project-tools-even"> CSS </li>
            <li className="project-tools-even"> Font Awesome Icons </li>
            <li className="project-tools-even"> Firebase Hosting </li>
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

            <a
              href="https://mjbhomeinspection.com/"
              target="_blank"
              rel="noreferrer"
              className="github-icon-even"
            >
              {" "}
              <OpenInNewOutlined />{" "}
            </a>
          </div>
        </div>
        <div className="project-image-even">
        <img
            className="crypto-img"
            src={InspectionProject}
            alt="Inspection Website Freelance Project"
          />
        </div>
      </section>

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
      <p className="other-projects-title">Other Projects</p>
      <section className="project-section">
        <div className="other-project-container">
          <div className="other-projects">
            <div className="oproject-top-container">
              <div className="folder-icon-container">
                <a
                  href="https://github.com/btmortondev"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FolderOutlined />{" "}
                </a>
              </div>
              <div className="openwith-icon-container">
                {" "}
                <OpenInNewOutlined />{" "}
              </div>
            </div>
            <div className="oproject-title-container">
              <p className="oproject-title"> 2D Unity Project </p>
            </div>
            <div className="oproject-description-container">
              <p className="oproject-description">
                {" "}
                One of my senior projects from college. Simple Unity 2D game
                that focused on scripting objects and desgining AI.
              </p>
            </div>
            <ul className="oproject-tools-list">
              <li className="oproject-tool"> Visual Studio </li>
              <li className="oproject-tool"> Aesprite </li>
              <li className="oproject-tool"> Unity </li>
            </ul>
          </div>

          <div className="other-projects">
            <div className="oproject-top-container">
              <div className="folder-icon-container">
                <a
                  href="https://github.com/btmortondev"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FolderOutlined />{" "}
                </a>
              </div>
              <div className="openwith-icon-container">
                {" "}
                <OpenInNewOutlined />{" "}
              </div>
            </div>
            <div className="oproject-title-container">
              <p className="oproject-title"> Theme Selector </p>
            </div>
            <div className="oproject-description-container">
              <p className="oproject-description">
                {" "}
                Simple project that worked on selecting and changing themes of a
                website.
              </p>
            </div>
            <ul className="oproject-tools-list">
              <li className="oproject-tool"> VS Code </li>
              <li className="oproject-tool"> JS </li>
              <li className="oproject-tool"> HTML </li>
              <li className="oproject-tool"> CS </li>
            </ul>
          </div>

          <div className="other-projects">
            <div className="oproject-top-container">
              <div className="folder-icon-container">
                <a
                  href="https://github.com/btmortondev"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FolderOutlined />{" "}
                </a>
              </div>
              <div className="openwith-icon-container">
                {" "}
                <OpenInNewOutlined />{" "}
              </div>
            </div>
            <div className="oproject-title-container">
              <p className="oproject-title"> TicTacToe AI </p>
            </div>
            <div className="oproject-description-container">
              <p className="oproject-description">
                {" "}
                Design an AI that would be smart enough to beat a real player.
                AI would make decisions based on possible moves and weighted
                costs based on the board.
              </p>
            </div>
            <ul className="oproject-tools-list">
              <li className="oproject-tool"> Visual Studio </li>
              <li className="oproject-tool"> Java </li>
              <li className="oproject-tool"> AI Design </li>
            </ul>
          </div>

          <div className="other-projects">
            <div className="oproject-top-container">
              <div className="folder-icon-container">
                <a
                  href="https://github.com/btmortondev"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FolderOutlined />{" "}
                </a>
              </div>
              <div className="openwith-icon-container">
                {" "}
                <OpenInNewOutlined />{" "}
              </div>
            </div>
            <div className="oproject-title-container">
              <p className="oproject-title"> Pathfinding Simulator </p>
            </div>
            <div className="oproject-description-container">
              <p className="oproject-description">
                {" "}
                Create a heuristic that would be better than Manhattan distance
                based on the start point and end point given by the user.
              </p>
            </div>
            <ul className="oproject-tools-list">
              <li className="oproject-tool"> Visual Studio </li>
              <li className="oproject-tool"> Java </li>
              <li className="oproject-tool"> Algorithms </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
