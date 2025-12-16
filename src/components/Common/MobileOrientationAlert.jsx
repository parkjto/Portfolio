import React, { useState } from 'react';
import '../../styles/Common/MobileOrientationAlert.css';

const MobileOrientationAlert = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="mobile-orientation-alert">
      <div className="alert-content">
        <div className="phone-icon"></div>
        <div className="alert-message">
          <h2>가로 모드를 권장합니다</h2>
          <p>
            PC 환경에 최적화되어 있습니다.<br />
            화면을 가로로 돌려주세요.
          </p>
        </div>
        <button 
          className="close-alert-btn"
          onClick={() => setIsDismissed(true)}
        >
          그냥 세로로 볼게요
        </button>
      </div>
    </div>
  );
};

export default MobileOrientationAlert;

