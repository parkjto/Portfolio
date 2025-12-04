# 테스트 가이드

이 프로젝트는 TDD(Test-Driven Development) 원칙에 따라 작성되었으며, Vitest와 React Testing Library를 사용합니다.

## 테스트 실행

```bash
# 모든 테스트 실행
npm test

# Watch 모드로 실행
npm test -- --watch

# UI 모드로 실행
npm run test:ui

# 커버리지 리포트 생성
npm run test:coverage
```

## 테스트 구조

```
src/
├── test/
│   ├── setup.js              # 테스트 환경 설정
│   ├── hooks/                 # 커스텀 훅 테스트
│   │   ├── useSlider.test.js
│   │   └── useFullScreen.test.js
│   └── utils/                 # 유틸리티 함수 테스트
│       └── helpers.test.js
├── hooks/                     # 커스텀 훅
│   ├── useSlider.js
│   └── useFullScreen.js
└── utils/                     # 유틸리티 함수
    ├── constants.js
    └── helpers.js
```

## 커스텀 훅 테스트

### useSlider
- 초기 인덱스 설정
- 다음/이전 슬라이드 이동
- 특정 인덱스로 이동
- 슬라이드 클래스명 계산

### useFullScreen
- 전체화면 상태 관리
- ESC 키로 닫기
- 이벤트 리스너 정리

## 유틸리티 함수 테스트

### helpers
- `padNumber`: 숫자를 두 자리 문자열로 변환
- `isNotEmpty`: 배열이 비어있지 않은지 확인
- `safeGet`: 안전한 배열 인덱스 접근
- `classNames`: 조건부 클래스명 결합

## 테스트 작성 가이드

1. **테스트 파일명**: `*.test.js` 또는 `*.spec.js`
2. **테스트 구조**: `describe` 블록으로 그룹화
3. **테스트 케이스**: `it` 또는 `test` 사용
4. **Assertions**: `expect` 사용

### 예시

```javascript
import { describe, it, expect } from 'vitest';
import { padNumber } from '../../utils/helpers';

describe('padNumber', () => {
  it('should pad single digit numbers', () => {
    expect(padNumber(1)).toBe('01');
  });
});
```

## 커버리지 목표

- 함수 커버리지: 80% 이상
- 라인 커버리지: 80% 이상
- 브랜치 커버리지: 75% 이상

## 주의사항

- 각 테스트는 독립적으로 실행되어야 합니다
- 테스트 후 cleanup을 수행합니다
- Mock과 Spy를 적절히 활용합니다

