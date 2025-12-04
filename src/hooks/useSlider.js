import { useState, useCallback } from 'react';

/**
 * 슬라이더 기능을 제공하는 커스텀 훅
 * 
 * @param {number} totalItems - 슬라이더 아이템 총 개수
 * @param {number} initialIndex - 초기 인덱스 (기본값: 0)
 * @returns {Object} 슬라이더 상태 및 제어 함수
 * 
 * @example
 * const { currentIndex, goNext, goPrev, goToIndex } = useSlider(5, 0);
 */
export const useSlider = (totalItems, initialIndex = 0) => {
  if (!totalItems || totalItems <= 0) {
    throw new Error('useSlider: totalItems must be greater than 0');
  }

  const [currentIndex, setCurrentIndex] = useState(
    Math.max(0, Math.min(initialIndex, totalItems - 1))
  );

  /**
   * 다음 슬라이드로 이동
   */
  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  }, [totalItems]);

  /**
   * 이전 슬라이드로 이동
   */
  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  }, [totalItems]);

  /**
   * 특정 인덱스로 이동
   * @param {number} index - 이동할 인덱스
   */
  const goToIndex = useCallback(
    (index) => {
      if (index >= 0 && index < totalItems) {
        setCurrentIndex(index);
      }
    },
    [totalItems]
  );

  /**
   * 슬라이드 클래스명 계산
   * @param {number} index - 확인할 인덱스
   * @param {Object} classNames - 클래스명 객체 (active, prev, next, hidden)
   * @returns {string} 클래스명
   */
  const getSlideClass = useCallback(
    (index, classNames = {}) => {
      const {
        active = 'active',
        prev = 'prev',
        next = 'next',
        hidden = 'hidden',
      } = classNames;

      if (index === currentIndex) return active;

      const prevIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
      const nextIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1;

      if (index === prevIndex) return prev;
      if (index === nextIndex) return next;
      return hidden;
    },
    [currentIndex, totalItems]
  );

  return {
    currentIndex,
    goNext,
    goPrev,
    goToIndex,
    getSlideClass,
  };
};

