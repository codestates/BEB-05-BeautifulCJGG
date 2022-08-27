import React from "react";
import styles from "../assets/css/MembershipCard.module.css";

function Card({ infoText, price, btnName }) {
  return (
    <div className={styles.nftBox}>
      <div className={styles.nftImgBox}>
        <img
          className={styles.nftimg}
          src={require("../assets/images/unnamed.gif")}
          alt="test"
        />
      </div>
      <div className={styles.nftInfoBox}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "500px",
          }}
          className={styles.nftInfo}
        >
          <div className={styles.infoNum}>'#' {infoText} Membership</div>
          <button className={styles.button}>{btnName}</button>
        </div>
        <div className={styles.nftInfoPrice}>
          <div className={styles.infoText}>Price</div>
          <div className={styles.price}>
            <div className={styles.priceImg}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={require("../assets/images/eth.png")}
                alt="test"
              />
            </div>
            <div>
              <div className={styles.priceText}>{price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
