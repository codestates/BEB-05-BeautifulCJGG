import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../apis/logout";

export default function Header(props) {

  const onLogin = (e) => {
    if(e.target.name === 'login'){
      window.location.href = '/login';
    }
    else if(e.target.name === 'logout'){
      logout();
    }
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
        {
          props.init === false
          ? "로딩중"
          : props.isLoggedIn === false
            ? <button className="btn" name="login" onClick={onLogin}>Login</button>
            : <button className="btn" name="logout" onClick={onLogin}>LogOut</button>
        }
        {
          (props.isLoggedIn === false) && (props.init === true)
          ? <button className="btn" style={{ margin: "0 20px 0 20px" }}>Sign Up</button>
          : ""
        }
      </div>
    </div>
  );
}
