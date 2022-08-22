import React, { useState } from 'react';
import signup from '../apis/signup';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const onChange = (event) => {
    const {target: {name, value}} = event;
    if(name === 'email'){
      setEmail(value);
    } else if(name === 'password'){
      setPassword(value);
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const user = await signup(email, password, setError);
    console.log(user);
  };

  return (
    <div>
      <div>
        <h2>Sign up</h2>
        <form onSubmit={onSubmit}>
          <input name='email' type='text' placeholder='Email' required value={email} onChange={onChange}></input>
          <input name='password' type='password' placeholder='Password' required value={password} onChange={onChange}></input>
          <input type='submit' value="Sign up"></input>
        </form>
      </div>
      <p>
        {error}
      </p>
      <a href='/'>GO TO LOGIN</a>
    </div>
  );
}