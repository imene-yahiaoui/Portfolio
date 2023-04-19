import "./style.css";

const Contact = () => {
  return (
    <div className="container_contact">
       <form name="contact" method="post">
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>,
    </div>
  );
};

export default Contact;
