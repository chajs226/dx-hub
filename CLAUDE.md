# 프로젝트: dx-hub

## 프로젝트 설명
디지털정보혁신본부의 AI 프로젝트를 발표 자료로 바로 사용 가능한 웹 아카이브 구축

## 개발 명령어

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# 린트 검사
npm run lint
```

## 아키텍처

### 기술 스택
- React 18 + Vite + TypeScript
- Tailwind CSS (의료 테마, Glassmorphism)
- Framer Motion (애니메이션)
- Lucide React (아이콘)
- Context API (상태 관리)

### 주요 컴포넌트
- **FilterBar**: 상단 필터 (카테고리, 연도)
- **TimelineSidebar**: 좌측 타임라인 (프로젝트 목록)
- **ContentViewer**: 우측 컨텐츠 영역 (프로젝트 상세)
- **MediaModal**: 미디어 확대 뷰어

### 데이터 구조
- 프로젝트 데이터: `public/data/projects_data.json`
- 블록 기반 컨텐츠 시스템 (text/image/video)

## 새 프로젝트 추가하기

1. `public/data/projects_data.json` 파일 열기
2. 새 프로젝트 객체 추가:
```json
{
  "id": "AI-2025-XXX",
  "title": "프로젝트 제목",
  "subtitle": "프로젝트 부제",
  "date": "2025-01-01",
  "categories": ["의료영상"],
  "thumbnail": "https://...",
  "kpi": "핵심 성과",
  "content_blocks": [
    {"type": "text", "value": "내용..."},
    {"type": "image", "url": "https://...", "caption": "설명"},
    {"type": "video", "url": "https://...", "caption": "설명"}
  ]
}
```
3. 저장 후 자동으로 반영됨

## 컨텍스트 참조
@~/.claude/common.md
@~/.claude/stacks/react.md