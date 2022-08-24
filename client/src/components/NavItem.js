import React from "react";
import { Link } from "react-router-dom";

function NavItem({ title, nav }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        margin: "0 20px 0 0",
        fontSize: "16px",
        border: "1px solid #C8C3FB",
        borderRadius: "10px",
      }}
    >
      <Link style={{ textDecoration: "none" }} to={nav}>
        {title}
      </Link>
    </div>
  );
}

export default NavItem;
//header 부분 페이지 이동 부분
