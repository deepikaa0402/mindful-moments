import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginSignUp = () => {
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    //logic
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    //logic
  };

  return (
    <div className="login-page">
    <div className='login'>
      <h2 className='login-heading'>Login / Sign Up</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="User ID"
          value={userid}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </form>
      <form onSubmit={handleSignUp}>
        <button type="submit">Login/Sign Up</button>
      </form>
      <Link to="/mood" className='ques-link'>Proceed to Mood Questionnaire</Link>
    </div>
    </div>
  );
};

export default LoginSignUp;
