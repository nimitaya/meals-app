import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen" data-theme="night">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="src/assets/images/about.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h2 className="text-5xl font-bold">About Us</h2>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-secondary"><Link to="/" className="text-xl">
                Go home
              </Link></button>
        </div>
      </div>
    </div>
  );
};
export default About;
