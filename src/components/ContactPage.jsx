const ContactPage = () => {
  return (
    <div id="contact">
      <div>
        <span className="title">Hello there!</span>
        <br />
        <p>
          <span className="message">
            I appreciate your interest in my work.{" "}
          </span>
          <br />
          Whether you have a question, a comment, or just want to say hello, I
          am always happy to connect. Thank you for visiting my portfolio.
        </p>
      </div>
      <form action="https://formspree.io/f/xaykzgna" method="POST">
        <h1>Reach out</h1>
        <input type="email" name="email" placeholder="Email..." />
        <input type="text" name="name" placeholder="Name..." />
        <textarea
          rows="5"
          name="message"
          placeholder="Please, enter Your message here..."
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
