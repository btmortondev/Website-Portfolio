import "./Home.css";
/*import CodeIcon from "@material-ui/icons/Code";*/

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
          I'm passionate about creating sleek and efficiently designed websites.
          My focus and most of my knowledge is on front-end, but would be
          interested in becoming full-stack.
        </p>
      </div>

      <div className="picture-content">
        <div className="slide-container"></div>
      </div>
    </div>
  );
};

export default Home;
