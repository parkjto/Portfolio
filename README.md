# Portfolio Design Front

포트폴리오 웹사이트 프로젝트입니다. React와 Vite를 사용하여 구축되었습니다.

## 주요 기능

- 프로젝트 포트폴리오 섹션 (MyBiz, Naru, IgE)
- PDF 다운로드 기능
- 전체화면 이미지 뷰어
- 슬라이더 컴포넌트

## 기술 스택

- **React 19.2.0**: UI 라이브러리
- **Vite 7.2.2**: 빌드 도구
- **Vitest**: 테스트 프레임워크
- **React Testing Library**: 컴포넌트 테스트

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 테스트 실행

```bash
# 모든 테스트 실행
npm test

# Watch 모드
npm test -- --watch

# 커버리지 리포트
npm run test:coverage
```

### 배포

```bash
npm run deploy
```

## 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Common/         # 공통 컴포넌트
│   ├── MyBiz/          # MyBiz 프로젝트 섹션
│   ├── Naru/           # Naru 프로젝트 섹션
│   └── IgE/            # IgE 프로젝트 섹션
├── hooks/              # 커스텀 훅
│   ├── useSlider.js    # 슬라이더 로직
│   └── useFullScreen.js # 전체화면 로직
├── utils/              # 유틸리티 함수
│   ├── constants.js    # 전역 상수
│   └── helpers.js      # 헬퍼 함수
├── styles/             # CSS 스타일
├── assets/             # 정적 자산
└── test/               # 테스트 파일
```


이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.
