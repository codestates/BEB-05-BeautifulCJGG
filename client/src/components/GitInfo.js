function GitInfo({ imgURL, gitURL }) {
  return (
    <div>
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          justifyContent: "center",
          margin: "0 20px 0 20px",
        }}
      >
        <a href={gitURL} target={"_blank"} rel={"noopener noreferrer"}>
          <img
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            src={imgURL}
            alt="img"
          />
        </a>
      </div>
    </div>
  );
}

export default GitInfo;
// footer 부분 개인 github link, Img 입니다.
