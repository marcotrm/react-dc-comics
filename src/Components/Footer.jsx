import navBarFooterTop from "./data/navBarFooterTop";

export default function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="FooterNavTop">
          <ul>
            {navBarFooterTop.map((NavFooter) => {
              return (
                <li key={NavFooter.id}>
                  <img src={NavFooter.img} />
                  <a href={NavFooter.url}>{NavFooter.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
