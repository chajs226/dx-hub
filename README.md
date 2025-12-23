# DX Hub - 디지털정보혁신본부 AI 아카이브

병원 디지털정보혁신본부의 AI 프로젝트 및 연구 성과를 한눈에 보여주는 웹 기반 아카이브 서비스입니다.

## 🎯 주요 기능

- **타임라인 기반 프로젝트 뷰**: 연도별로 그룹화된 프로젝트 목록
- **카테고리 필터링**: 의료영상, 자연어처리, 예측분석 등 기술 영역별 필터
- **연도 필터**: 특정 연도의 프로젝트만 선택적으로 표시
- **블록 기반 컨텐츠**: 텍스트, 이미지, 비디오를 자유롭게 배치
- **미디어 뷰어**: 이미지와 비디오를 전체화면으로 확대
- **반응형 디자인**: 데스크탑, 태블릿, 모바일 모두 지원
- **발표 자료 모드**: 별도 수정 없이 바로 발표 자료로 활용 가능

## 🛠️ 기술 스택

- **프레임워크**: React 18 + Vite + TypeScript
- **스타일링**: Tailwind CSS (의료 테마, Glassmorphism)
- **애니메이션**: Framer Motion
- **아이콘**: Lucide React
- **상태 관리**: React Context API

## 📦 설치 및 실행

### 필수 요구사항

- Node.js 18 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
# 개발 서버 시작 (http://localhost:3000)
npm run dev
```

### 프로덕션 빌드

```bash
# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
dx-hub/
├── src/
│   ├── components/
│   │   ├── layout/          # 레이아웃 컴포넌트
│   │   ├── timeline/        # 타임라인 컴포넌트
│   │   ├── content/         # 컨텐츠 블록 컴포넌트
│   │   ├── filters/         # 필터 컴포넌트
│   │   ├── media/           # 미디어 모달
│   │   └── ui/              # 재사용 UI 컴포넌트
│   ├── context/             # React Context
│   ├── hooks/               # 커스텀 훅
│   ├── utils/               # 유틸리티 함수
│   ├── types/               # TypeScript 타입
│   └── styles/              # 스타일 파일
├── public/
│   └── data/                # 프로젝트 데이터 (JSON)
└── docs/                    # 문서
```

## 📝 프로젝트 데이터 추가

프로젝트 데이터는 `public/data/projects_data.json` 파일에서 관리됩니다.

### 데이터 구조

```json
{
  "id": "AI-2024-001",
  "title": "프로젝트 제목",
  "subtitle": "프로젝트 부제",
  "date": "2024-03-15",
  "categories": ["의료영상", "Deep Learning"],
  "thumbnail": "https://...",
  "kpi": "핵심 성과 지표",
  "content_blocks": [
    {
      "type": "text",
      "value": "텍스트 내용..."
    },
    {
      "type": "image",
      "url": "https://...",
      "caption": "이미지 설명"
    },
    {
      "type": "video",
      "url": "https://...",
      "caption": "비디오 설명"
    }
  ]
}
```

### 블록 타입

- **text**: 일반 텍스트 단락
- **image**: 이미지 (클릭 시 확대)
- **video**: 비디오 (HTML5 video player)

## 🎨 디자인 시스템

### 카테고리 색상

- **의료영상**: Blue (#3b82f6)
- **자연어처리**: Green (#10b981)
- **예측분석**: Purple (#8b5cf6)

### Glassmorphism

투명한 배경 + 백드롭 블러 효과로 현대적이고 전문적인 느낌을 연출합니다.

## 🚀 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### Netlify

```bash
# Netlify CLI 설치
npm i -g netlify-cli

# 배포
netlify deploy --prod
```

## 📄 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다.

## 🤝 기여

버그 리포트나 기능 제안은 GitHub Issues를 통해 제출해주세요.

## 📞 문의

프로젝트에 대한 문의사항은 디지털정보혁신본부로 연락주세요.
