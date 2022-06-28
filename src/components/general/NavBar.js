import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  const { cartItemsCount, getSwitchAdmin } = props;
  const [switchAdmin, setSwitchAdmin] = useState(false);

  useEffect(() => {
    getSwitchAdmin(switchAdmin);
    // eslint-disable-next-line
  }, [switchAdmin]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="/#"
                >
                  Shop by Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/#">
                      Women
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Men
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Kids
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light text-white me-5">
                Search
              </button>
            </form>
          </div>
          {switchAdmin ? (
            <></>
          ) : (
            <button type="button" className="btn btn-primary btn-sm me-5">
              <Link className="nav-link active" to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cart4 me-2 mb-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
                View Cart
                {cartItemsCount ? (
                  <span className="badge bg-danger ms-2">{cartItemsCount}</span>
                ) : (
                  ""
                )}
              </Link>
            </button>
          )}

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              value={switchAdmin}
              onChange={(e) => setSwitchAdmin(e.target.checked)}
            />
            <label
              className="form-check-label text-white"
              htmlFor="flexSwitchCheckDefault"
            >
              Switch to Admin View
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
