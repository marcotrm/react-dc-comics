import navBarFooterTop from "./data/navBarFooterTop";
import footerLinks from "./data/navMiddleFooter";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="FooterNavTop">
            <ul>
              {navBarFooterTop.map((NavFooter) => {
                return (
                  <li key={NavFooter.id} className="link">
                    <img src={NavFooter.url} alt="" />
                    <a href={NavFooter.link}>{NavFooter.text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-middle-container">
            <div className="container">
              <div className="footer-nav-middle">
                {footerLinks.map((section, index) => {
                  return (
                    <div key={index} className="footer-section">
                      <h4>{section.category}</h4>
                      <ul>
                        {section.links.map((link, i) => {
                          return (
                            <li key={i}>
                              <a href={link.url}>{link.text}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
                <img src="src/assets/img/dc-logo-bg.png" alt="logo-bg" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-container">
              <div className="footer-bottom-left">
                <button>SIGN-UP-NOW</button>
              </div>
              <div className="footer-bottom-right">
                <p>FOLLOW US</p>
                <img src="src/assets/img/footer-facebook.png" alt="facebook" />
                <img src="src/assets/img/footer-twitter.png" alt="twitter" />
                <img src="src/assets/img/footer-youtube.png" alt="youtube" />
                <img
                  src="src/assets/img/footer-pinterest.png"
                  alt="pinterest"
                />
                <img
                  src="src/assets/img/footer-periscope.png"
                  alt="periscope"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
