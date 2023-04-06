import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "./Navbar.css";

const PAGES = [
  { title: "Home", path: "/" },
  { title: "Workshop Format", path: "/format" },
  { title: "Call for Papers", path: "/callForPapers" },
  { title: "Organizers", path: "/organizers" },
];

const Navbar = () => {
  const location = useLocation();

  // This width needs to match what is in the css file
  const isMobile = useMediaQuery({ query: "(max-width: 60rem)" });

  const getLinkStyle = (isSelected: boolean) => {
    if (isSelected)
      return {
        fontWeight: 900,
        fontSize: "1.25rem",
        marginTop: "0.4rem",
      };
    else
      return {
        fontWeight: 400,
        fontSize: "1.1rem",
        marginTop: "0.55rem",
      };
  };

  return (
    <div className="navbarContainer">
      {/* Always write my name in the left corner */}
      {!isMobile && (
        <Link className={"navbarTitle navbarItem"} to="/">
          EDI in EdTech R&D
        </Link>
      )}

      <div className="navbarItemsContainer">
        {PAGES.map((item, idx) => (
          <Link
            className="navbarItem"
            to={PAGES[idx].path}
            style={getLinkStyle(location.pathname === item.path)}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
