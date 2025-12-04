import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSlider } from '../../hooks/useSlider';

describe('useSlider', () => {
  it('should initialize with default index 0', () => {
    const { result } = renderHook(() => useSlider(5));
    expect(result.current.currentIndex).toBe(0);
  });

  it('should initialize with custom initial index', () => {
    const { result } = renderHook(() => useSlider(5, 2));
    expect(result.current.currentIndex).toBe(2);
  });

  it('should throw error when totalItems is 0 or negative', () => {
    expect(() => renderHook(() => useSlider(0))).toThrow();
    expect(() => renderHook(() => useSlider(-1))).toThrow();
  });

  it('should clamp initial index to valid range', () => {
    const { result: result1 } = renderHook(() => useSlider(5, 10));
    expect(result1.current.currentIndex).toBe(4);

    const { result: result2 } = renderHook(() => useSlider(5, -1));
    expect(result2.current.currentIndex).toBe(0);
  });

  it('should go to next slide', () => {
    const { result } = renderHook(() => useSlider(3, 0));
    
    act(() => {
      result.current.goNext();
    });
    expect(result.current.currentIndex).toBe(1);

    act(() => {
      result.current.goNext();
    });
    expect(result.current.currentIndex).toBe(2);

    act(() => {
      result.current.goNext();
    });
    expect(result.current.currentIndex).toBe(0); // 순환
  });

  it('should go to previous slide', () => {
    const { result } = renderHook(() => useSlider(3, 0));
    
    act(() => {
      result.current.goPrev();
    });
    expect(result.current.currentIndex).toBe(2); // 순환

    act(() => {
      result.current.goPrev();
    });
    expect(result.current.currentIndex).toBe(1);
  });

  it('should go to specific index', () => {
    const { result } = renderHook(() => useSlider(5, 0));
    
    act(() => {
      result.current.goToIndex(3);
    });
    expect(result.current.currentIndex).toBe(3);

    act(() => {
      result.current.goToIndex(0);
    });
    expect(result.current.currentIndex).toBe(0);
  });

  it('should not go to invalid index', () => {
    const { result } = renderHook(() => useSlider(5, 2));
    
    act(() => {
      result.current.goToIndex(10);
    });
    expect(result.current.currentIndex).toBe(2); // 변경되지 않음

    act(() => {
      result.current.goToIndex(-1);
    });
    expect(result.current.currentIndex).toBe(2); // 변경되지 않음
  });

  it('should return correct slide class', () => {
    const { result } = renderHook(() => useSlider(5, 2));
    const classNames = {
      active: 'active',
      prev: 'prev',
      next: 'next',
      hidden: 'hidden',
    };

    expect(result.current.getSlideClass(2, classNames)).toBe('active');
    expect(result.current.getSlideClass(1, classNames)).toBe('prev');
    expect(result.current.getSlideClass(3, classNames)).toBe('next');
    expect(result.current.getSlideClass(0, classNames)).toBe('hidden');
    expect(result.current.getSlideClass(4, classNames)).toBe('hidden');
  });

  it('should handle edge cases for slide class', () => {
    const { result } = renderHook(() => useSlider(3, 0));
    const classNames = {
      active: 'active',
      prev: 'prev',
      next: 'next',
      hidden: 'hidden',
    };

    // 첫 번째 슬라이드에서 이전은 마지막
    expect(result.current.getSlideClass(2, classNames)).toBe('prev');
    expect(result.current.getSlideClass(1, classNames)).toBe('next');

    act(() => {
      result.current.goToIndex(2);
    });

    // 마지막 슬라이드에서 다음은 첫 번째
    expect(result.current.getSlideClass(0, classNames)).toBe('next');
    expect(result.current.getSlideClass(1, classNames)).toBe('prev');
  });
});

