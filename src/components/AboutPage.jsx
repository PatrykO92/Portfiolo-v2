import myPhoto from "../images/myPhoto.png";
import { useState } from "react";

const AboutPage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <main id="about" key="about">
      <div className="about">
        <div className="description-container">
          <h1>Patryk Orlowski</h1>
          <h2>Front-end web developer</h2>

          <p>
            Hey there <span className="wave-animation">✋</span>
            <br /> I'm Patryk! I'm a front-end web developer who loves working
            with JavaScript and React. I'm always hungry for more knowledge and
            eager to level up my skills to become an expert in the field. I'm
            constantly on the lookout for new challenges and exciting
            opportunities to enhance my abilities.
          </p>
          <button
            className="more-button"
            onClick={() => setShowMore(!showMore)}
          >
            {!showMore ? "Show more..." : "Hide..."}
          </button>
          <div className={`more ${showMore ? "show" : ""}`}>
            <span>Short about me</span>
            <p>
              I was born in Poland, I have raised in small village called
              "Straszewo". Recently I have moved to Germany. My favorite movie
              is Pulp Fiction, and my favorite sport is football. I am a huge
              fan of Juventus FC! In my free time, I enjoy reading books and
              developing myself in every possible way!
            </p>

            <span>Programing</span>
            <p>
              I wrote my first HTML when I was 13. It was a simple website
              dedicated to Metallica. My first exposure to programming was in
              school when I was 16. Back then I wrote this code:
              <code>
                program HelloWorld;
                <br />
                uses crt;
                <br />
                <br />
                begin <br />
                &nbsp;&nbsp;&nbsp;&nbsp;writeln('Hello, world.');
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;readln;
                <br />
                end.
                <br />
              </code>
              Do you know, what language it is? 😊
              <br />
              <br />
              When I was 18 I had small contact with C++. After school, I
              totally forget about programming and focused on other things. I
              come back to programming at beginning of 2022. I started with
              Python. I wrote a few small programs, and learned about basics
              like OOP, FP, data structures, etc. Finally I moved to Django and
              soaked in creating nice-looking templates. I had far more
              satisfaction from doing front-end than back-end, so I decided to
              learn more about HTML, CSS, and JavaScript. <br />
              Do you want to know more? <a href="#contact">Contact me!</a>
            </p>
          </div>
        </div>

        <div className="photo-container">
          <img src={myPhoto} alt="Patryk Orlowski" className="my-photo" />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
