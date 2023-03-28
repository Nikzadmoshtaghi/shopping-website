import { useContext} from "react";
import ProductContext from "../context/products";
import { Outlet, NavLink } from "react-router-dom";
import "./navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const productContext = useContext(ProductContext);
  const state = productContext.state;
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <h1 className="text-success">Zay</h1>
        <nav ref={navRef}>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            className="nav-link "
            aria-current="page"
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            className="nav-link"
            to="/shope"
          >
            Shope
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            className="nav-link "
            to="/login"
          >
            Contact
          </NavLink>

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
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
