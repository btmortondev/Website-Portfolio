import './Home.css';
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
              Made With
            </p>
            <ul className="made-with-list" >  
              <li className="made-with-li" >
                React/Redux
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
          <p className="project-signature" > Made by: Brandon Morton </p>
        </div>
      );
}
 
export default Home;