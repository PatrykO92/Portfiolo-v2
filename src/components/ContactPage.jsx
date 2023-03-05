import { useState } from "react";

const ContactPage = () => {
  const [showMessage, setShowMessage] = useState({ status: false, msg: "" });

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
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formValue }),
    })
      .then((e) => {
        if (e.ok) {
          setShowMessage({ status: true, msg: "Message sent successfuly!" });
          setFormValue({
            name: "",
            email: "",
            message: "",
          });
          setTimeout(() => {
            setShowMessage({ status: false });
          }, 2000);
        } else {
          setShowMessage({
            status: true,
            msg: "Please try again later! Or use Linkedin to contact!",
          });
          setTimeout(() => {
            setShowMessage({ status: false });
          }, 3500);
          throw new Error(e);
        }
      })
      .catch((error) => {
        console.log(error);
      });

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
        {showMessage.status ? (
          <div className="message-approved">
            <span>{showMessage.msg}</span>
          </div>
        ) : (
          <>
            <input type="hidden" name="form-name" value="contact" />
            <h1>Reach out</h1>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email..."
              required
            />
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Name..."
            />
            <textarea
              required
              onChange={handleChange}
              value={message}
              rows="5"
              name="message"
              placeholder="Please, enter Your message here..."
            ></textarea>

            <button type="submit">Send</button>
          </>
        )}
      </form>
    </div>
  );
};

export default ContactPage;
