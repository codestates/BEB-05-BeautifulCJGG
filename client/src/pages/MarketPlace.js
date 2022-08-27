import Card from "../components/MembershipCard";
import MarketButton from "../components/MarketButton";
import styles from "../assets/css/Market.module.css";

function MarketPlace() {
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "110px",
        height: "100%",
        paddingBottom: "110px",
      }}
    >
      <div className={styles.ButtonBox}>
        <div className={styles.Button1}>
          <MarketButton name={"Mint"} />
        </div>
        <div className={styles.Button2}>
          <MarketButton name={"Sale"} />
        </div>
      </div>

      <div className={styles.CardBox}>
        <div>
          <div className={styles.Card1}>
            <Card infoText={"0001"} price={"0.1"} btnName={"Mint"} />
          </div>
          <div className={styles.Card2}>
            <Card infoText={"0002"} price={"0.1"} btnName={"Mint"} />
          </div>
        </div>
        <div>
          <div className={styles.Card1}>
            <Card infoText={"0003"} price={"0.1"} btnName={"Mint"} />
          </div>
          <div className={styles.Card2}>
            <Card infoText={"0004"} price={"0.1"} btnName={"Mint"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
