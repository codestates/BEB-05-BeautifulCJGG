import styles from "../assets/css/MyPage.module.css";
import Card from "../components/MembershipCard";

const MyPage = () => {
  return (
    <div className={styles.Mypage}>
      <Card infoText={"0000"} price={"0.1"} />
    </div>
  );
};

export default MyPage;
