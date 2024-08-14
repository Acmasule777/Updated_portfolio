import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container-fluid p-0">
      <section class="contact" id="contact">
        <h1>contact</h1>
        <div class="contact-main">
          <div class="contact-forms">
            <label for="Name">Name :</label>
            <input type="text" placeholder="Your Name" class="input" />
            <br />
            <label for="Name">Email Id :</label>
            <input type="text" placeholder="Email Id" class="input" />
            <br />
            <label for="Name">Message :</label>
            <br />
            <textarea placeholder="Your Message" class="input"></textarea>
            <div class="submit-botton">
              <button>Submit</button>
            </div>
          </div>
          <div class="contact-information">
            <h2>I'm Atul Chhagan Masule</h2>
            <p>
              Contact :- 7770021460 <br />
              <br />
              <br />
              Email Id :- atulmasule20@gmail.com
              <br />
            </p>
            <h3>I'm Social Media</h3>
            <div class="Contact-icons">
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaInstagramSquare />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
