import { useNavigate } from 'react-router-dom';
import MobileFrame from './MobileFrame';
import BottomNav from './BottomNav';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <MobileFrame>
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-subtitle">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
        <button className="btn btn-primary" onClick={() => navigate('/create-account')}>
          Create Account
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
      <BottomNav chatCount={99} />
    </MobileFrame>
  );
};

export default Welcome;
