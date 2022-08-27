import styles from "../assets/css/MyPage.module.css";
import Card from "../components/MembershipCard";

const MyPage = () => {
  return (
    <div className={styles.Mypage}>
      <div className={styles.myCard}>
        <div className={styles.title}>
          <span className={styles.text}>소유하고 있는 멤버십</span>
        </div>
        <div className={styles.card}>
          <Card infoText={"0000"} price={"0.1"} btnName={"sell"} />
        </div>
      </div>
      <div className={styles.myPost}>
        <div className={styles.title}>
          <span className={styles.text}>작성한 게시글 및 답변</span>
        </div>
        <div className={styles.post}>
          <h2>Advanced 작업 예정...</h2>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
