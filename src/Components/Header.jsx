import navBArHeader from "./data/navBArHeader";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="src/assets/img/dc-logo.png" alt="logo" />
          </div>
          <div className="col">
            <nav className="HeaderNav">
              <ul>
                {navBArHeader.map((navHeader, index) => {
                  return (
                    <li key={index}>
                      <a href={navHeader.url}>{navHeader.text}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="jumbotron"></div>
    </header>
  );
}
