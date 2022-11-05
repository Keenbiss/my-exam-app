import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav className="pry-nav">
      <NavLink style={navLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to="/useCustom">
        Customhook
      </NavLink>
      <NavLink style={navLinkStyle} to="/useReducer">
        Usereducer
      </NavLink>
      <NavLink style={navLinkStyle} to="/Nopage">
        404 page
      </NavLink>
      <NavLink style={navLinkStyle} to="/Errorpage">
        Errorpage
      </NavLink>
      {/* <NavLink style={navLinkStyle} to="/errorboundary">
        Errorpage2
      </NavLink> */}
    </nav>
  );
};
