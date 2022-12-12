// import icon
// import LocalIcon from "../components/icons/service/local";
import LocalIcon from '../public/icons/app-publish/local.svg'
// import CreativeIcon from "../components/icons/service/creative";
// import MarketAnalysisIcon from "../components/icons/service/market-analysis";
// import MarketPlanIcon from "../components/icons/service/market-plan";
// import MarketServiceIcon from "../components/icons/service/market-service";
// import MediaIcon from "../components/icons/service/media";
// import PerformanceIcon from "../components/icons/service/performance";
// import StrategyIcon from "../components/icons/service/strategy";
// export const businessData = {
//   "en-US": [
//     {
//       sid: "app-developing",
//       title: "App Developing",
//       header: [
//         "Original idea",
//         "Business analysis",
//         "Development service",
//         "Maintenance & update service",
//       ],
//       content: [
//         [
//           "Competent dev team consisted of iOS & AOS native developer, AI & Backend developer, crypto currency developer",
//         ],
//         ["Function list", "BM model"],
//         [
//           "Development timeline and service plan",
//           "In cooperate latest tech-stack",
//         ],
//       ],
//     },
//     {
//       sid: "market-analysis",
//       title: "Market analysis",
//       content: [
//         {
//           title: "Market analysis",
//           icon: "",
//           description: ["Market & Trend Research", "Market suitability"],
//         },
//         {
//           title: "Market analysis",
//           icon: "",
//           description: ["Market & Trend Research", "Market suitability"],
//         },
//         {
//           title: "Market analysis",
//           icon: "",
//           description: ["Market & Trend Research", "Market suitability"],
//         },
//       ],
//     },
//   ],
//   "kr-KR": [
//     {
//       sid: "app-developing",
//       title: "App Developing",
//       header: [
//         "Original idea",
//         "Business analysis",
//         "Development service",
//         "Maintenance & update service",
//       ],
//       content: [
//         [
//           "Competent dev team consisted of iOS & AOS native developer, AI & Backend developer, crypto currency developer",
//         ],
//         ["Function list", "BM model"],
//         [
//           "Development timeline and service plan",
//           "In cooperate latest tech-stack",
//         ],
//       ],
//     },
//     {
//       sid: "market-analysis",
//       title: "Market analysis",
//       content: [
//         {
//           title: "Market analysis",
//           icon: "",
//           description: ["Market & Trend Research", "Market suitability"],
//         },
//         {
//           title: "Market analysis",
//           icon: "",
//           description: ["Market & Trend Research", "Market suitability"],
//         },
//         {
//           title: "Market analysis",
//           icon: "",
//           description: ["Market & Trend Research", "Market suitability"],
//         },
//       ],
//     },
//   ],
// };

export const business = [
  {
    sid: 'app-developing',
    'en-US': {
      title: 'App Developing',
      header: [
        'Original idea',
        'Business analysis',
        'Development service',
        'Maintenance & update service',
      ],
      content: [
        [
          'Competent dev team consisted of iOS & AOS native developer, AI & Backend developer, crypto currency developer',
        ],
        [
          ['Function list', 'BM model'],
          [
            'Development timeline and service plan',
            'In cooperate latest tech-stack',
          ],
        ],
      ],
    },
    'kr-KR': {
      title: 'App Developing Korean',
      header: ['사업 아이디어', '사업 분석', '앱 개발', '유지보수 & 업데이트'],
      content: [
        [
          'iOS, Android, Web 및 백엔드 개발자, AI, 블록체인 개발자 등으로 구성된 유능한 개발팀과 소프트웨어 설계',
        ],
        [
          ['기능 목록 분석', '비즈니스 모델 설계'],
          ['개발 일정 및 서비스 계획 공유', '최신 개발 기술을 활용한 협력'],
        ],
      ],
    },
  },
  {
    sid: 'app-publishing',
    'kr-KR': [
      {
        icon: '/',
        title: '시장 분석',
        content: ['시장 조사 및 최신 동향 조사', '시장 적합성 판단'],
      },
      {
        icon: '/',
        title: '시장 진출 계획 수립',
        content: ['비즈니스 분석', '마케팅 계획 수립'],
      },
      {
        icon: '/',
        title: '현지화 작업',
        content: ['필요 허가서 획득', '현지화 작업 (언어, 컨텐츠 등)'],
      },
      {
        icon: '/',
        title: '서비스 시작',
        content: ['현지 결제 모듈 적용', '고객 서비스 운용'],
      },
    ],
    'en-US': [
      {
        icon: '/images/service/business/icons/market-analyze.png',
        title: 'Market analysis',
        content: ['Market & Trend Research', 'Market suitability'],
      },
      {
        icon: '/images/service/business/icons/market-plan.png',
        title: 'Market penetration plan',
        content: ['Business analysis', 'Marketing campaign plan'],
      },
      {
        icon: '/images/service/business/icons/local.png',
        title: 'Localization & Local permit documents',
        content: ['Vietnamese localization', 'Marketing campaign plan'],
      },
      {
        icon: '/images/service/business/icons/market-service.png',
        title: 'Market service',
        content: ['Local payment integration', 'Customer service'],
      },
    ],
  },
]
