import { useState } from "react";

const ContactPage = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) =>
    setFormValue((oldValue) => ({
      ...oldValue,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    console.log(formValue);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formValue }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const { name, email, message } = formValue;

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
      <form
        onSubmit={handleSubmit}
        netlify="true"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />
        <h1>Reach out</h1>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email..."
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name..."
        />
        <textarea
          onChange={handleChange}
          value={message}
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
