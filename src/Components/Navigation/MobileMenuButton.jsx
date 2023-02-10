import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthButton from "./AuthButton";

export default function MobileMenuButton() {
  const [Open, setOpen] = useState(false);
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
    <div className="mobile-menu-container">
      {Open ? (
        <div>
          <>
            <svg
              onClick={() => setOpen(() => !Open)}
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5H19.5"
                stroke="#454545"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M1.5 13.5H19.5"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
          <div className="mobile-menu-link-container">
            {" "}
            {NavLinks.map(({ id, linkTitle, to }) => {
              return (
                <Link
                  reloadDocument={true}
                  className={`${
                    CurrentLocation !== to
                      ? "mobile-nav-link"
                      : "active-nav-link"
                  } mobile-nav-link`}
                  to={to}
                  key={id}
                >
                  <span>{linkTitle}</span>
                </Link>
              );
            })}
            <Link className={` mobile-nav-link`}>
              <span>Login</span>
            </Link>
          </div>
        </div>
      ) : (
        <svg
          onClick={() => setOpen(() => !Open)}
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 7.5H19.5"
            stroke="#454545"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.5 1.5H19.5"
            stroke="#454545"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.5 13.5H19.5"
            stroke="#454545"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}
