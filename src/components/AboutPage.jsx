import myPhoto from "../images/myPhoto.png";

const AboutPage = () => {
  const buttonHandler = (url) => {
    window.location.href = url;
  };

  return (
    <main id="about" key="about">
      <div className="about">
        <div className="description-container">
          <h1>Patryk Orlowski</h1>
          <h2>Frontend Web Developer</h2>

          <p>
            My name is Patryk. I am a frontend web developer with a strong
            foundation in JavaScript and React. I am eager to continue learning
            and growing my skills in order to become an expert in web
            development. I am always looking for new challenges and
            opportunities to improve my skills and make a meaningful
            contribution to web development projects.
          </p>
          <button onClick={() => buttonHandler("https://github.com")}>
            Skills
          </button>
        </div>

        <div className="photo-container">
          <img src={myPhoto} alt="PatrykOrlowskiPhoto" className="my-photo" />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
