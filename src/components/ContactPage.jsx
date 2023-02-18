const ContactPage = () => {
  return (
    <div id="contact">
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
  )
}

export default ContactPage