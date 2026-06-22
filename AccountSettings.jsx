import MobileFrame from './MobileFrame';
import BottomNav from './BottomNav';
import './AccountSettings.css';

const AccountSettings = () => {
  return (
    <MobileFrame noPadding>
      <div className="settings-header">
        <h1>Account Settings</h1>
      </div>
      <div className="settings-body">
        <div className="profile-row">
          <div className="avatar-wrap">
            <div className="avatar-placeholder">MD</div>
            <button className="camera-badge" aria-label="Change photo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M4 8H7L9 5H15L17 8H20C20.5523 8 21 8.44772 21 9V18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18V9C3 8.44772 3.44772 8 4 8Z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round"/>
                <circle cx="12" cy="13.5" r="3.2" stroke="#fff" strokeWidth="1.8"/>
              </svg>
            </button>
          </div>
          <div className="profile-info">
            <p className="profile-name">Marry Doe</p>
            <p className="profile-email">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        <div className="dashed-divider" />
      </div>
      <BottomNav chatCount={68} />
    </MobileFrame>
  );
};

export default AccountSettings;
