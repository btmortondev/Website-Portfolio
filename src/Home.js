import "./Home.css";
import SelfieImage from "./img/bmorton21hs.jpg";

const Home = () => {
  return (
    <div className="greeting-content">
      <div className="introBox">
        <p className="homepage-greeting"> Hi there, I'm </p>
        <p className="nameBanner"> Brandon Morton </p>
        <p className="roleBanner"> Web Developer </p>
      </div>

      <div className="homepage-subgreeting">
        <p className="homepage-summary">
          {" "}
          I'm passionate about creating and designing differnt websites and web
          applications. My focus and most of my knowledge is on front-end, but I
          would be interested in becoming full-stack.
        </p>
      </div>

      <div className="picture-content">
        <div className="slide-container">
          <img
            className="image-container"
            src={SelfieImage}
            alt="selfie for slide"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
