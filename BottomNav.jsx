import './BottomNav.css';

const BottomNav = ({ chatCount = 21 }) => {
  return (
    <div className="bottom-nav">
      <button className="nav-icon" aria-label="Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 11.5L12 4L21 11.5" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 10V20H19V10" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="nav-icon chat-icon" aria-label="Chat">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 11.5C21 16.19 16.97 20 12 20C10.79 20 9.64 19.78 8.59 19.38L3 20.5L4.62 16.41C3.6 15.07 3 13.35 3 11.5C3 6.81 7.03 3 12 3C16.97 3 21 6.81 21 11.5Z" stroke="#6B6B6B" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
        {chatCount > 0 && <span className="chat-badge">{chatCount > 99 ? '99+' : chatCount}</span>}
      </button>
      <button className="nav-icon" aria-label="Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="5" cy="12" r="1.8" fill="#6B6B6B"/>
          <circle cx="12" cy="12" r="1.8" fill="#6B6B6B"/>
          <circle cx="19" cy="12" r="1.8" fill="#6B6B6B"/>
        </svg>
      </button>
    </div>
  );
};

export default BottomNav;
