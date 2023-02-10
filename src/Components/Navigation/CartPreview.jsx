import React from "react";
import { Link } from "react-router-dom";
export default function CartPreview() {
  const NumberInCart = 2;
  return (
    <div className="cart-preview-container">
      <Link to="/cart">
        {/* <div className="cart-preview-number">
          <span>{NumberInCart}</span>
        </div> */}
        <div className="cart-preview-circle">
          <svg
            className="cart-svg"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.38648 19.8088C8.88011 19.8088 9.28028 19.4086 9.28028 18.915C9.28028 18.4213 8.88011 18.0212 8.38648 18.0212C7.89284 18.0212 7.49268 18.4213 7.49268 18.915C7.49268 19.4086 7.89284 19.8088 8.38648 19.8088Z"
              stroke="#BBC0C4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.2185 19.8088C18.7121 19.8088 19.1123 19.4086 19.1123 18.915C19.1123 18.4213 18.7121 18.0212 18.2185 18.0212C17.7249 18.0212 17.3247 18.4213 17.3247 18.915C17.3247 19.4086 17.7249 19.8088 18.2185 19.8088Z"
              stroke="#BBC0C4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.23633 1.04248H4.81153L7.20691 13.008C7.28864 13.4194 7.51251 13.789 7.83931 14.052C8.16612 14.315 8.57505 14.4548 8.99451 14.4467H17.6822C18.1017 14.4548 18.5106 14.315 18.8374 14.052C19.1642 13.789 19.3881 13.4194 19.4698 13.008L20.8999 5.51056H5.70533"
              stroke="#BBC0C4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}
