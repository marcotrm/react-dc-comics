import navBarFooterTop from "./data/navBarFooterTop";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="FooterNavTop">
            <ul>
              {navBarFooterTop.map((NavFooter) => {
                return (
                  <li key={NavFooter.id}>
                    <img src={NavFooter.url} alt="" />
                    <a href={NavFooter.link}>{NavFooter.text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
