/**
 * 유틸리티 헬퍼 함수 모음
 */

/**
 * 숫자를 두 자리 문자열로 변환 (01, 02, ...)
 * @param {number} num - 변환할 숫자
 * @returns {string} 두 자리 문자열
 */
export const padNumber = (num) => {
  if (typeof num !== 'number' || num < 0) {
    throw new Error('padNumber: num must be a non-negative number');
  }
  return String(num).padStart(2, '0');
};

/**
 * 배열이 비어있지 않은지 확인
 * @param {Array} arr - 확인할 배열
 * @returns {boolean} 배열이 비어있지 않으면 true
 */
export const isNotEmpty = (arr) => {
  return Array.isArray(arr) && arr.length > 0;
};

/**
 * 안전하게 배열 인덱스 접근
 * @param {Array} arr - 배열
 * @param {number} index - 인덱스
 * @returns {*} 배열 요소 또는 undefined
 */
export const safeGet = (arr, index) => {
  if (!Array.isArray(arr)) return undefined;
  if (index < 0 || index >= arr.length) return undefined;
  return arr[index];
};

/**
 * 클래스명을 조건부로 결합
 * @param {...(string|Object)} args - 클래스명 또는 조건부 객체
 * @returns {string} 결합된 클래스명
 * 
 * @example
 * classNames('base', { active: true, disabled: false }) // 'base active'
 */
export const classNames = (...args) => {
  const classes = [];

  args.forEach((arg) => {
    if (!arg) return;

    if (typeof arg === 'string') {
      classes.push(arg);
    } else if (typeof arg === 'object') {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(' ');
};

