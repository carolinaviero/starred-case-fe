import React, { useState } from 'react';

export const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedLogin, setFailedLogin] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error(response.status);

      const data = await response.json();

      setUser(data.user);
      setFailedLogin(false);
    } catch (error) {
      console.error('Login failed:', error.message);
      setFailedLogin(true)
    }
  };

  return (
    <>
        <div>
            <h1>Login</h1>
            {!user && <div className='login-form'>
                <input placeholder='Email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>}
            {user && <p>You're logged in!</p>}
            {!user && <button className='login-button' onClick={handleLogin}>Login</button>}
            {failedLogin && <p>Email or password don't match</p>}
        </div>
    </>
  );
};
