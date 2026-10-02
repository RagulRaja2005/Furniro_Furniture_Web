import "./Footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <h2>Furino.</h2>

          <p>
            400 University Drive Suite 200 Coral
            <br />
            Gables,
            <br />
            FL 33134 USA
          </p>

        </div>

        {/* Links */}

        <div className="footer-links">

          <h4>Links</h4>

          <ul>

            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Shop</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>

          </ul>

        </div>

        {/* Help */}

        <div className="footer-help">

          <h4>Help</h4>

          <ul>

            <li>
              <a href="#">Payment Options</a>
            </li>

            <li>
              <a href="#">Returns</a>
            </li>

            <li>
              <a href="#">Privacy Policies</a>
            </li>

          </ul>

        </div>

        {/* Newsletter */}

        <div className="footer-newsletter">

          <h4>Newsletter</h4>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="newsletter-input"
            />

            <button
              type="submit"
              className="newsletter-button"
            >
              SUBSCRIBE
            </button>

          </form>

        </div>

        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            2023 furino. All rights reserved
          </p>

        </div>

      </div>

    </footer>

  );
}

export default Footer;