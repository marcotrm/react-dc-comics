import navBArHeader from "./data/navBArHeader";

export default function Header() {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <img src="public/img/dc-logo.png" alt="logo" />
        </div>
        <div className="col">
          <nav className="HeaderNav">
            <ul>
              {navBArHeader.map((navHeader) => {
                return (
                  <li key={navBArHeader.id}>
                    <a href={navHeader.url}>{navHeader.text}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
