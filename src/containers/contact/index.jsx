import "./style.css";

const Contact = () => {
  return (
    <div className="container_contact">
      <form method="post" name="contact">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="name" placeholder="Your name.." />

        <label for="email">adresse email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your adresse email.."
        />

        <label for="subject">Subject</label>
        <textarea
          id="subject"
          name="message"
          placeholder="Write something.."
        ></textarea>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
