import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from './MobileFrame';
import BottomNav from './BottomNav';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isValid = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    navigate('/account-settings');
  };

  return (
    <MobileFrame>
      <form className="login-content" onSubmit={handleSubmit}>
        <h1 className="login-title">Signin to your<br />PopX account</h1>
        <p className="login-subtitle">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
        <div className="form-input-group">
          <label className="form-label">Email Address</label>
          <input className="form-input" type="email" value={email}
            onChange={(e) => setEmail(e.target.value)} placeholder="Enter email address" />
        </div>
        <div className="form-input-group">
          <label className="form-label">Password</label>
          <input className="form-input" type="password" value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!isValid}>Login</button>
      </form>
      <BottomNav chatCount={27} />
    </MobileFrame>
  );
};

export default Login;
