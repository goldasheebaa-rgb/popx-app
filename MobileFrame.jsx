import './MobileFrame.css';

const MobileFrame = ({ children, noPadding }) => {
  return (
    <div className="mobile-frame-outer">
      <div className={`mobile-frame ${noPadding ? 'no-padding' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default MobileFrame;
