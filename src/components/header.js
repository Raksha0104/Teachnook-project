import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="container navbar navbar-expand-lg">
        <div className="bg-white container-fluid">
          <a href="index.html" class="logo navbar-brand d-lg-none">
            <h1 class="fw-bold m-0">DigiTech</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav main-links me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <button
              type="button"
              class="ms-auto d-none d-lg-block btn btn-primary rounded-pill py-2 px-3"
            >
              Get A Quote
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
