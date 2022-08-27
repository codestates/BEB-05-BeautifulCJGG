import React from "react";
import GitInfo from "./GitInfo";
import styles from "../assets/css/Footer.module.css";

export default function Footer() {
  return (
    <div
      className={styles.footer}
      style={{
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "rgb(4 17 29 / 25%) 0px 0px 8px 0px",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          marginLeft: "20px",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
      >
        <a
          href="https://github.com/codestates/BEB-05-BeautifulCJGG"
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={require(`../assets/images/github.png`)}
            alt="img"
          />
        </a>
      </div>
      <div
        className="footerLink"
        style={{ height: "80px", display: "flex", alignItems: "center" }}
      >
        <h4 style={{ margin: "0 20px 0 20px" }}>Github Link :</h4>
        <GitInfo
          imgURL={require(`../assets/images/git sj.png`)}
          gitURL={"https://github.com/kimsj3592"}
        />
        <GitInfo
          imgURL={require(`../assets/images/git km.png`)}
          gitURL={"https://github.com/Moshed-Potato"}
        />
        <GitInfo
          imgURL={require(`../assets/images/git cb.png`)}
          gitURL={"https://github.com/BrillaintCB"}
        />
      </div>
      <span style={{ marginRight: "20px" }}>
        Copyright © 2022 BeautifulCJGG
      </span>
    </div>
  );
}
