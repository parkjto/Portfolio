import { useState, useEffect } from 'react';

/**
 * 전체화면 모달 기능을 제공하는 커스텀 훅
 * ESC 키로 닫기 기능 포함
 * 
 * @param {boolean} initialValue - 초기 전체화면 상태 (기본값: false)
 * @returns {Object} 전체화면 상태 및 제어 함수
 * 
 * @example
 * const { isFullScreen, toggleFullScreen, openFullScreen, closeFullScreen } = useFullScreen();
 */
export const useFullScreen = (initialValue = false) => {
  const [isFullScreen, setIsFullScreen] = useState(initialValue);

  /**
   * 전체화면 토글
   */
  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  };

  /**
   * 전체화면 열기
   */
  const openFullScreen = () => {
    setIsFullScreen(true);
  };

  /**
   * 전체화면 닫기
   */
  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  // ESC 키로 전체화면 닫기
  useEffect(() => {
    if (!isFullScreen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' || event.key === 'Esc') {
        closeFullScreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullScreen]);

  return {
    isFullScreen,
    toggleFullScreen,
    openFullScreen,
    closeFullScreen,
  };
};

