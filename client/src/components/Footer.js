import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>Github 이미지</div>
      <div className="footerLink">
        <h2>Team</h2>
        <div>git link</div>
        <div>git link</div>
        <div>git link</div>
      </div>
    </div>
  );
}
