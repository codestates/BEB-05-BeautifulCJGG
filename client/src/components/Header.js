import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [login, setLogin] = useState(false);

  const onLogin = () => {
    setLogin((invert) => !invert);
  };

  return (
    <div
      className="headerBar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "80px",
        alignItems: "center",
      }}
    >
      <div>
        <div className="logo">로고 자리</div>
      </div>
      <div
        className="navBox"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
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
          <Link style={{ textDecoration: "none" }} to={"/"}>
            Main
          </Link>
        </div>
        <div
          style={{
            padding: "10px",
            margin: "0 20px 0 20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #C8C3FB",
            borderRadius: "10px",
          }}
        >
          Membership Marketplace
        </div>
        <div
          style={{
            padding: "10px",
            margin: "0 20px 0 20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #C8C3FB",
            borderRadius: "10px",
          }}
        >
          My Page
        </div>
      </div>
      <div className="buttonBox">
        <button className="btn" onClick={onLogin} style={{}}>
          {login ? "login" : "logout"}
        </button>
        <button className="btn" style={{ margin: "0 20px 0 20px" }}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
