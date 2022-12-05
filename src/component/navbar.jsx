import { useContext } from "react";
import ProductContext from "../context/products";
import { Outlet, NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const productContext = useContext(ProductContext);
  const state = productContext.state;
  return (
    <>
      <nav
        id="z-index"
        className="navbar navbar-expand-lg p-2 bg-color bg-gradient position-fixed"
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
              <li>
                <h1 className="text-success">Zay</h1>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shope">
                  Shope
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " to="/login">
                  Contact
                </NavLink>
              </li>

              <li className="nav-item floatR">
                <NavLink className="nav-link position-relative" to="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
                  </svg>
                  <span className="position-absolute  start-50 top-40  badge rounded-pill bg-danger">
                    {state.length}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
