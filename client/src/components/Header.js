import React from "react";
import styles from "../assets/css/btn.module.css";
import { logout } from "../apis/logout";
import NavItem from "./NavItem";

export default function Header(props) {
  const onLogin = (e) => {
    if (e.target.name === "login") {
      window.location.href = "/login";
    } else if (e.target.name === "logout") {
      logout();
    } else if (e.target.name === "signup") {
      window.location.href = "/signup";
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
        boxShadow: "rgb(4 17 29 / 25%) 0px 0px 8px 0px",
      }}
    >
      <div>
        <div className="logo" style={{ height: "50px", marginLeft: "10px" }}>
          <img
            style={{ height: "100%" }}
            src={require(`../assets/images/CJGG Logo.png`)}
          />
        </div>
      </div>
      <div
        className="navBox"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <NavItem title={"Main"} nav={"/"} />
        <NavItem
          title={"Membership Marketplace"}
          nav={"/Membership Marketplace"}
        />
        <NavItem title={"My Page"} nav={"My Page"} />
      </div>
      <div className="buttonBox">
        {props.init === false ? (
          "로딩중"
        ) : props.isLoggedIn === false ? (
          <button className={`${styles.Button}`} name="login" onClick={onLogin}>
            Login
          </button>
        ) : (
          <button
            className={`${styles.Button}`}
            name="logout"
            onClick={onLogin}
          >
            LogOut
          </button>
        )}
        {props.isLoggedIn === false && props.init === true ? (
          <button
            className={`${styles.Button}`}
            name="signup"
            style={{ margin: "0 20px 0 20px" }}
            onClick={onLogin}
          >
            Sign Up
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
