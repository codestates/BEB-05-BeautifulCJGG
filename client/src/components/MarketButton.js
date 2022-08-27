import styles from "../assets/css/MarketButton.module.css";
import React from "react";

function MarketButton({ name }) {
  return (
    <div>
      <button className={styles.button80}>
        <span>{name}</span>
      </button>
    </div>
  );
}

export default MarketButton;
