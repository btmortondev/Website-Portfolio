import './Work.css';
import GameLogo from './img/FlamingSword.gif';
import CryptoIcons from './img/cryptoicons.png';
import DatcordLogo from './img/datcord.png';
import PathfindLogo from './img/pathfind.png';
import TicTacToeLogo from './img/tictactoe.png';

const Work = () => {
    return ( 
        <div className="page-content">
            <div className="project-content" >
                <ul className="project-list" >
                    <li className="project-item" >
                        <a href="https://github.com/btmortondev" target="_blank" rel="noreferrer" className="project-link" >
                            <img className="game-logo" src= { GameLogo } alt="Unity Game Logo" /> 
                            <div>
                                <strong className="project-title" > Slayer 2D </strong>
                                <br/>
                                <span className="project-purpose" > 2021 Senior Project </span>
                                <br/>
                                <p className="project-type" > Unity 2D Game </p>
                            </div>
                        </a>
                    </li>

                    <li className="project-item" >
                        <a href="https://github.com/btmortondev/react-api-project" target="_blank" rel="noreferrer" className="project-link" >
                            <img className="crypto-icons" src= { CryptoIcons } alt="Cryptocurrency icons" />
                            <div>
                                <strong className="project-title" > Crypto API </strong>
                                <br/>
                                <span className="project-purpose" > 2021 Personal Project </span>
                                <br/>
                                <p className="project-type" > React API Project </p>
                            </div>
                        </a>
                    </li>

                    <li className="project-item" >
                        <a href="https://youtu.be/OWkF7FSIk6I" target="_blank" rel="noreferrer" className="project-link" >
                            <img className="datcord-logo" src= { DatcordLogo } alt="Datcord logo" />
                            <div>
                                <strong className="project-title" > Datcord </strong>
                                <br/>
                                <span className="project-purpose" > 2020 College Group Project </span>
                                <br/>
                                <p className="project-type" > React Real-time Chat Web Application </p>
                            </div>
                        </a>
                    </li>

                    <li className="project-item" >
                        <a href="https://github.com/btmortondev/java-path-planning" target="_blank" rel="noreferrer" className="project-link" >
                            <img className="pathfind-logo" src= { PathfindLogo } alt="Pathfind logo" />
                            <div>
                                <strong className="project-title" > Pathfinding Simulator </strong>
                                <br/>
                                <span className="project-purpose" > 2019 College Project </span>
                                <br/>
                                <p className="project-type" > Pathfinding Simulator Using Written Hueristic in Java  </p>
                            </div>
                        </a>
                    </li>

                    <li className="project-item" >
                        <a href="https://github.com/btmortondev/java-TicTacToe-AI" target="_blank" rel="noreferrer" className="project-link" >
                            <img className="pathfind-logo" src= { TicTacToeLogo } alt="TicTacToe logo" />
                            <div>
                                <strong className="project-title" > TicTacToe Game </strong>
                                <br/>
                                <span className="project-purpose" > 2019 College Project </span>
                                <br/>
                                <p className="project-type" > TicTacToe Game vs Written AI in Java </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Work;