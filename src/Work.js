import './Work.css';
import GameLogo from './img/FlamingSword.gif'

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
                        <a href="https://github.com/btmortondev" target="_blank" rel="noreferrer" className="project-link" >
                            <img className="game-logo" src= { GameLogo } alt="Unity Game Logo" />
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

                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Work;