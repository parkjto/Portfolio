import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFullScreen } from '../../hooks/useFullScreen';

describe('useFullScreen', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should initialize with false by default', () => {
    const { result } = renderHook(() => useFullScreen());
    expect(result.current.isFullScreen).toBe(false);
  });

  it('should initialize with custom initial value', () => {
    const { result } = renderHook(() => useFullScreen(true));
    expect(result.current.isFullScreen).toBe(true);
  });

  it('should toggle fullscreen state', () => {
    const { result } = renderHook(() => useFullScreen());
    
    act(() => {
      result.current.toggleFullScreen();
    });
    expect(result.current.isFullScreen).toBe(true);

    act(() => {
      result.current.toggleFullScreen();
    });
    expect(result.current.isFullScreen).toBe(false);
  });

  it('should open fullscreen', () => {
    const { result } = renderHook(() => useFullScreen(false));
    
    act(() => {
      result.current.openFullScreen();
    });
    expect(result.current.isFullScreen).toBe(true);
  });

  it('should close fullscreen', () => {
    const { result } = renderHook(() => useFullScreen(true));
    
    act(() => {
      result.current.closeFullScreen();
    });
    expect(result.current.isFullScreen).toBe(false);
  });

  it('should close fullscreen on Escape key', () => {
    const { result } = renderHook(() => useFullScreen(true));
    
    const escapeEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true,
    });

    act(() => {
      window.dispatchEvent(escapeEvent);
    });
    
    expect(result.current.isFullScreen).toBe(false);
  });

  it('should not close fullscreen on other keys', () => {
    const { result } = renderHook(() => useFullScreen(true));
    
    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
    });

    act(() => {
      window.dispatchEvent(enterEvent);
    });
    
    expect(result.current.isFullScreen).toBe(true);
  });

  it('should cleanup event listener on unmount', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { result, unmount } = renderHook(() => useFullScreen(true));

    act(() => {
      result.current.toggleFullScreen();
    });

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function)
    );
  });
});

