import React from "react";
import AuthButtons from "./AuthButton";
import CartPreview from "./CartPreview";
import NavLogo from "./NavLogo";
import { Link, useLocation } from "react-router-dom";
import MobileMenuButton from "./MobileMenuButton";
export default function NavBar() {
  const NavLinks = [
    { id: 1, linkTitle: "Puzzle Generator", to: "/" },
    { id: 2, linkTitle: "How To Use", to: "/docs" },
    { id: 3, linkTitle: "Game", to: "/game" },
    { id: 4, linkTitle: "Shop", to: "/shop" },
  ];
  const location = useLocation();

  // The current location.
  let CurrentLocation = location.pathname;
  return (
    <nav className="nav-bar">
      <div className="nav-bar-links-cont">
        <Link to="/">
          <NavLogo />
        </Link>
        {NavLinks.map(({ id, linkTitle, to }) => {
          return (
            <Link
              className={`${
                CurrentLocation !== to ? "nav-link" : "active-nav-link"
              } nav-link`}
              to={to}
              key={id}
            >
              {linkTitle}
            </Link>
          );
        })}
      </div>{" "}
      <CartPreview />
      <MobileMenuButton />
      <AuthButtons />
    </nav>
  );
}
