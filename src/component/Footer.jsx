import { FaArrowCircleUp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid p-0">
      <section>
        <footer class="footer-main">
          <div class="footer-heading">
            <h2>Social Media Flatform</h2>
          </div>
          <div class="footer-icons">
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
          <div class="footer-last">
            <p>Developed By : Atul C Masule</p>
          </div>
          <div class="Home-tab">
            <a href="#Home">
              <span>
                <FaArrowCircleUp />
              </span>
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
