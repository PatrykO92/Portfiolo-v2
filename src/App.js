import { Navbar } from "./components";
import "./css/App.css";

function App() {
  const buttonHandler = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <div className="background1"></div>
      <div className="background2"></div>

      <Navbar />

      <div className="slider">
        <div id="about" className="">
          <div className="about-left">
            <h1>Patryk Orlowski</h1>
            <h2>Frontend Web Developer</h2>

            <p>
              My name is Patryk. I am a frontend web developer with a strong
              foundation in JavaScript and React. I am eager to continue
              learning and growing my skills in order to become an expert in web
              development. I am always looking for new challenges and
              opportunities to improve my skills and make a meaningful
              contribution to web development projects.
            </p>
            <button onClick={() => buttonHandler("https://github.com")}>
              Skills
            </button>
          </div>

          <div className="about-right">
            <img
              src="src/images/monitor.png"
              alt="monitor photo"
              className="background-photo"
            />
            <img
              src="src/images/myPhoto.png"
              alt="PatrykOrlowskiPhoto"
              className="my-photo"
            />
          </div>
        </div>

        <div id="portfolio" className="hidden">
          <div className="portfolio-div">
            <img
              src="src/images/portfolio-projects/1/placeholder-image-high.png"
              alt="portfolio image"
            />
            <h3>Project name</h3>
            <div>
              <button onClick={() => buttonHandler("https://github.com")}>
                GitHub
              </button>
              <button onClick={() => buttonHandler("https://github.com")}>
                Live
              </button>
              <button className="project-link">More info</button>
            </div>
          </div>
          <div className="portfolio-div">
            <img
              src="src/images/portfolio-projects/1/placeholder-image-high.png"
              alt="portfolio image"
            />
            <h3>Project name</h3>
            <div>
              <button onClick={() => buttonHandler("https://github.com")}>
                GitHub
              </button>
              <button onClick={() => buttonHandler("https://github.com")}>
                Live
              </button>
              <button className="project-link">More info</button>
            </div>
          </div>

          <div className="portfolio-div-full">
            <p>
              Those are my two largest projects. Check out of my GitHub for
              smaller projects.
            </p>
            <button onClick={() => buttonHandler("https://github.com")}>
              GitHub
            </button>
          </div>
        </div>

        <div id="contact" className="hidden">
          <form action="https://formspree.io/f/xaykzgna" method="POST">
            <h1>Reach out</h1>
            <input type="email" name="email" placeholder="Email..." />
            <input type="text" name="name" placeholder="Name..." />
            <textarea
              name="message"
              placeholder="Please, enter Your message here..."
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <footer>
        <p>patryk-orlowski.netlify.com</p>
      </footer>
    </>
  );
}

export default App;
