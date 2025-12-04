import { describe, it, expect } from 'vitest';
import { padNumber, isNotEmpty, safeGet, classNames } from '../../utils/helpers';

describe('helpers', () => {
  describe('padNumber', () => {
    it('should pad single digit numbers', () => {
      expect(padNumber(1)).toBe('01');
      expect(padNumber(5)).toBe('05');
      expect(padNumber(9)).toBe('09');
    });

    it('should not pad double digit numbers', () => {
      expect(padNumber(10)).toBe('10');
      expect(padNumber(99)).toBe('99');
    });

    it('should handle zero', () => {
      expect(padNumber(0)).toBe('00');
    });

    it('should throw error for negative numbers', () => {
      expect(() => padNumber(-1)).toThrow();
    });

    it('should throw error for non-number input', () => {
      expect(() => padNumber('1')).toThrow();
      expect(() => padNumber(null)).toThrow();
      expect(() => padNumber(undefined)).toThrow();
    });
  });

  describe('isNotEmpty', () => {
    it('should return true for non-empty arrays', () => {
      expect(isNotEmpty([1, 2, 3])).toBe(true);
      expect(isNotEmpty(['a'])).toBe(true);
    });

    it('should return false for empty arrays', () => {
      expect(isNotEmpty([])).toBe(false);
    });

    it('should return false for non-arrays', () => {
      expect(isNotEmpty(null)).toBe(false);
      expect(isNotEmpty(undefined)).toBe(false);
      expect(isNotEmpty('string')).toBe(false);
      expect(isNotEmpty(123)).toBe(false);
    });
  });

  describe('safeGet', () => {
    const arr = [1, 2, 3, 4, 5];

    it('should return element at valid index', () => {
      expect(safeGet(arr, 0)).toBe(1);
      expect(safeGet(arr, 2)).toBe(3);
      expect(safeGet(arr, 4)).toBe(5);
    });

    it('should return undefined for out of bounds index', () => {
      expect(safeGet(arr, 5)).toBeUndefined();
      expect(safeGet(arr, -1)).toBeUndefined();
      expect(safeGet(arr, 10)).toBeUndefined();
    });

    it('should return undefined for non-array input', () => {
      expect(safeGet(null, 0)).toBeUndefined();
      expect(safeGet(undefined, 0)).toBeUndefined();
      expect(safeGet('string', 0)).toBeUndefined();
    });
  });

  describe('classNames', () => {
    it('should combine string arguments', () => {
      expect(classNames('a', 'b', 'c')).toBe('a b c');
    });

    it('should handle conditional classes', () => {
      expect(classNames('base', { active: true, disabled: false })).toBe('base active');
      expect(classNames({ active: true, disabled: true })).toBe('active disabled');
    });

    it('should ignore falsy values', () => {
      expect(classNames('a', null, 'b', undefined, 'c', false)).toBe('a b c');
      expect(classNames('a', '', 'b')).toBe('a b');
    });

    it('should handle empty input', () => {
      expect(classNames()).toBe('');
      expect(classNames(null, undefined, false)).toBe('');
    });

    it('should handle mixed arguments', () => {
      expect(classNames('base', { active: true }, 'extra', { disabled: false })).toBe('base active extra');
    });
  });
});

