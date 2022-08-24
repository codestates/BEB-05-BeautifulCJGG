import React, { useState } from "react";
import signup from "../apis/signup";
import styles from "../assets/css/SignUp.module.css";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const user = await signup(email, password, setError);
    console.log(user);
  };

  return (
    <div className={`${styles.signup}`}>
      <div className={`${styles.signup_box}`}>
        <div className={`${styles.left}`}>
          <div className={`${styles.contact}`}>
            <form onSubmit={onSubmit}>
              <h2>Sign Up</h2>
              <input
                name="email"
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={onChange}
              ></input>
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={onChange}
              ></input>
              <input type="submit" value="Sign Up"></input>
            </form>
          </div>
        </div>
        <div className={`${styles.right}`}>
          <div className={`${styles.right_text}`}>
            <h2>BeautifulCJGG</h2>
          </div>
        </div>
      </div>
      <p>{error}</p>
    </div>
  );
}
