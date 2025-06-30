import { Article, Category } from '../types';

export const categories: Category[] = [
  { id: 'all', name: '전체', description: '모든 디지털헬스케어 소식' },
  { id: 'ai', name: 'AI/머신러닝', description: '인공지능 및 머신러닝 기술' },
  { id: 'telemedicine', name: '원격의료', description: '원격진료 및 텔레헬스' },
  { id: 'iot', name: 'IoT/웨어러블', description: 'IoT 기기 및 웨어러블 디바이스' },
  { id: 'blockchain', name: '블록체인', description: '의료 데이터 보안 및 블록체인' },
  { id: 'digital-therapeutics', name: '디지털치료제', description: '디지털 치료솔루션' }
];

export const articles: Article[] = [
  {
    id: '1',
    title: '서울아산병원, AI 기반 폐암 조기진단 시스템 도입',
    summary: '딥러닝 기술을 활용한 폐암 조기진단 정확도 95% 달성',
    content: '서울아산병원이 AI 기반 폐암 조기진단 시스템을 성공적으로 도입했습니다...',
    category: 'ai',
    publishDate: '2024-01-15',
    featured: true
  },
  {
    id: '2',
    title: '원격의료 플랫폼으로 환자 만족도 향상',
    summary: '코로나19 이후 원격진료 시스템 구축으로 의료 접근성 개선',
    content: '원격의료 플랫폼 도입으로 환자들의 의료 접근성이 크게 향상되었습니다...',
    category: 'telemedicine',
    publishDate: '2024-01-10',
    featured: true
  },
  {
    id: '3',
    title: '스마트 병원 시스템, IoT 기반 환자 모니터링',
    summary: '실시간 환자 상태 모니터링으로 응급상황 대응 시간 단축',
    content: 'IoT 센서를 활용한 스마트 병원 시스템으로 환자 안전성을 높였습니다...',
    category: 'iot',
    publishDate: '2024-01-08',
    featured: true
  },
  {
    id: '4',
    title: '블록체인 기반 의료데이터 보안 시스템 구축',
    summary: '환자 개인정보 보호를 위한 차세대 보안 기술 적용',
    content: '블록체인 기술을 활용하여 의료데이터의 보안성을 강화했습니다...',
    category: 'blockchain',
    publishDate: '2024-01-05'
  },
  {
    id: '5',
    title: '디지털치료제 임상시험 성공적 완료',
    summary: '우울증 치료용 디지털치료제의 효과성 입증',
    content: '자체 개발한 디지털치료제가 임상시험에서 우수한 결과를 보였습니다...',
    category: 'digital-therapeutics',
    publishDate: '2024-01-03'
  },
  {
    id: '6',
    title: 'AI 의료영상 분석 시스템 업그레이드',
    summary: 'CT, MRI 영상 분석 속도 50% 향상',
    content: '최신 AI 알고리즘 적용으로 의료영상 분석 성능이 크게 개선되었습니다...',
    category: 'ai',
    publishDate: '2023-12-28'
  },
  {
    id: '7',
    title: '웨어러블 디바이스 연동 건강관리 서비스',
    summary: '24시간 생체신호 모니터링으로 예방의학 강화',
    content: '웨어러블 기기와 연동된 건강관리 서비스를 통해 예방의학을 실현하고 있습니다...',
    category: 'iot',
    publishDate: '2023-12-25'
  },
  {
    id: '8',
    title: '원격수술 로봇 시스템 시범 운영',
    summary: '5G 네트워크 기반 원격수술의 새로운 가능성 제시',
    content: '5G 통신망을 활용한 원격수술 로봇 시스템의 시범 운영을 시작했습니다...',
    category: 'telemedicine',
    publishDate: '2023-12-20'
  }
];