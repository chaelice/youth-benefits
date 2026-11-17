// 청년 혜택 정책 목록 (전국 + 서울시). 화면(index.html)이 이 목록으로 바로 판정해요.
// - criteria: 화면에서 자동 비교하는 조건 (age, region, status, noHouse, housingIn, incomeMax, eitc)
// - verify: 서류·칩으로 알 수 없어서 공고에서 직접 확인할 조건
// - applyStart/applyEnd 를 모르면 null (화면에 '일정 확인'). 지어내지 않아요.
// - 자치구 사업은 여기 없고, 화면에서 구를 고르면 data/gu/ 에 따로 찾아 저장해요.
// - 갱신: Claude Code에서 "정책 목록 갱신해줘"
window.POLICIES_CHECKED = "2026-11-17";
window.POLICIES = [
 {
  "id": "youth-future-savings",
  "name": "청년미래적금",
  "org": "금융위원회",
  "category": "예적금",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "waiting": true,
  "benefit": "청년이 매달 저축하면 정부 기여금을 더해 주는 적금",
  "criteria": [
   {
    "type": "age",
    "min": 19,
    "max": 34
   }
  ],
  "verify": [
   "2차 신규 모집(10/7~16)은 마감됐어요. 지금(11/16~27)은 2차 심사 통과자만 계좌를 열 수 있어요",
   "3차 모집은 2027년 예산 확정 후 발표 예정 (날짜 미정)",
   "개인소득·가구소득 기준은 다음 모집 공고에서 확인",
   "청년도약계좌에서 갈아탈 때는 미래적금 계좌를 먼저 만든 뒤 도약계좌 해지"
  ],
  "howTo": [
   "금융위원회 공고에서 3차 모집 일정 확인",
   "취급 은행 앱에서 가입 신청"
  ],
  "url": "https://www.fsc.go.kr",
  "source": "https://www.fsc.go.kr"
 },
 {
  "id": "national-employment-support",
  "name": "국민취업지원제도 (청년 특례 포함)",
  "org": "고용노동부",
  "category": "일자리",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "Ⅰ유형 구직촉진수당 월 60만원 최대 6개월(부양가족 1인당 10만원 추가, 최대 40만원) + 취업지원서비스. Ⅱ유형은 취업활동비용 지원",
  "criteria": [
   {
    "type": "age",
    "min": 15,
    "max": 69,
    "label": "만 15~69세 (청년은 15~34세, 병역기간 가산 최대 37세)"
   },
   {
    "type": "status",
    "in": [
     "구직 중",
     "비자발 퇴사"
    ],
    "label": "미취업 구직자"
   }
  ],
  "verify": [
   "Ⅰ유형: 가구 중위소득 60% 이하, 재산 4억원 이하 (청년 15~34세는 중위소득 120% 이하, 재산 5억원 이하)",
   "Ⅱ유형: 청년(15~34세, 병역 가산 최대 37세)은 소득과 상관없이 참여 가능",
   "2026.4월부터 취업경험이 부족한 청년도 최대 3만 명까지 Ⅰ유형 지원(청년특화트랙)"
  ],
  "howTo": [
   "고용24에서 국민취업지원제도 온라인 신청 또는 거주지 관할 고용센터 방문",
   "수급자격 결정 후 상담사와 취업활동계획 수립",
   "구직활동 이행 시 구직촉진수당 지급"
  ],
  "url": "https://www.work24.go.kr/ua/z/z/1300/selectEmssRqutIntro.do",
  "source": "https://www.moel.go.kr/news/cardinfo/view.do?bbs_seq=20251201443"
 },
 {
  "id": "naeil-baeum-card",
  "name": "국민내일배움카드",
  "org": "고용노동부",
  "category": "일자리",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "5년간 직업훈련비 300만~500만원 한도 지원",
  "criteria": [
   {
    "type": "status",
    "in": [
     "재직",
     "비자발 퇴사",
     "구직 중",
     "학생",
     "자영업"
    ],
    "label": "실업자·재직자·자영업자·졸업예정 대학생"
   }
  ],
  "verify": [
   "대학 재학생(휴학 포함)은 졸업까지 남은 수업연한 2년 이내만 발급",
   "제외: 공무원, 사립학교 교직원, 75세 이상, 45세 미만 대규모기업 근로자 중 월 임금 300만원 이상, 월 소득 500만원 이상 특고, 생계급여 수급자 등",
   "자영업자는 사업기간·소득 요건 별도",
   "2026년 기준 한도·요건은 고용24 공고 확인"
  ],
  "howTo": [
   "고용24에서 국민내일배움카드 발급 신청",
   "관할 고용센터 승인 후 카드 수령",
   "고용24에서 훈련과정 검색·수강신청"
  ],
  "url": "https://www.moel.go.kr/policyitrd/policyItrdView.do?policy_itrd_sn=216",
  "source": "https://m.work24.go.kr/cm/c/f/1100/selecSystInfo.do?currentPageNo=1&recordCountPerPage=10&systId=SI00000351&systClId=SC00000004"
 },
 {
  "id": "k-digital-training",
  "name": "K-디지털 트레이닝",
  "org": "고용노동부",
  "category": "교육",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "디지털·첨단분야 훈련비 지원 + 훈련장려금 월 최대 20만원(일부 과정 특별훈련수당 추가)",
  "criteria": [],
  "verify": [
   "국민내일배움카드 발급자",
   "훈련장려금: 140시간 이상 훈련, 실업 상태 또는 주 15시간 미만 근로자 등, 출석률 80% 이상",
   "연령 상한은 공식 페이지에서 확인되지 않음 — 과정별 모집요강 확인"
  ],
  "howTo": [
   "국민내일배움카드 발급",
   "고용24에서 'K-디지털 훈련' 과정 검색",
   "과정 신청 및 훈련기관 선발 절차 진행"
  ],
  "url": "https://www.work24.go.kr/hr/a/a/1100/trnnCrsInf2.do?pageId=6",
  "source": "https://moelyouth.work24.go.kr/"
 },
 {
  "id": "k-newdeal-academy",
  "name": "K-뉴딜 아카데미",
  "org": "고용노동부·한국직업능력연구원",
  "category": "교육",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "benefit": "기업이 직접 운영하는 청년 직업훈련(AI·반도체·금융·바이오 등) + 참여수당 수도권 월 30만원, 비수도권 월 50만원",
  "criteria": [],
  "verify": [
   "청년뉴딜 안내상 신청기간 6~11월(아카데미별 모집 마감 상이)",
   "대상 연령·자격은 아카데미별 모집요강 확인"
  ],
  "howTo": [
   "고용24에서 'K-뉴딜 아카데미' 검색",
   "참여 희망 아카데미 확인 후 연계된 기업 모집 사이트에서 신청"
  ],
  "url": "https://moelyouth.work24.go.kr/",
  "source": "https://www.korea.kr/news/policyNewsView.do?newsId=148966694"
 },
 {
  "id": "youth-job-leap-retention-incentive",
  "name": "청년일자리도약장려금 (비수도권 청년 근속 인센티브)",
  "org": "고용노동부",
  "category": "일자리",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "비수도권 기업 취업 후 6개월 이상 근속 시 2년간 최대 720만원(일반 480만, 우대지원지역 600만, 특별지원지역 720만원, 6·12·18·24개월 차 분할)",
  "criteria": [
   {
    "type": "target",
    "label": "비수도권 참여기업에 채용된 청년"
   },
   {
    "type": "status",
    "in": [
     "재직"
    ],
    "label": "참여기업에 정규직 취업한 청년"
   }
  ],
  "verify": [
   "비수도권 소재 참여기업(고용24 승인 기업)에 채용된 청년이어야 함",
   "청년 연령 기준은 사업운영 지침 확인",
   "예산 사정에 따라 요건을 충족해도 지원되지 않을 수 있음(예산 소진 시 마감)",
   "수도권 유형은 기업 지원(취업애로청년 채용 시)이며 청년 직접 인센티브는 비수도권 대상"
  ],
  "howTo": [
   "기업이 고용24에서 도약장려금 참여 신청·승인",
   "청년 채용 후 6개월 이상 근속",
   "고용24에서 청년 근속 인센티브 신청"
  ],
  "url": "https://m.work24.go.kr/cm/c/f/1100/selecSystInfo.do?currentPageNo=1&recordCountPerPage=10&systId=SI00000318&systClId=SC00000117",
  "source": "https://www.korea.kr/news/policyNewsView.do?newsId=148958831"
 },
 {
  "id": "youth-challenge-support",
  "name": "청년도전지원사업",
  "org": "고용노동부",
  "category": "일자리",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "benefit": "구직의욕 회복 프로그램 + 참여수당(단기 50만원, 중·장기 최대 220만~350만원, 취업 인센티브 포함)",
  "criteria": [
   {
    "type": "target",
    "label": "구직단념 청년 (6개월 이상 취업·교육 이력 없음)"
   },
   {
    "type": "age",
    "min": 18,
    "max": 34
   },
   {
    "type": "status",
    "in": [
     "구직 중",
     "비자발 퇴사"
    ],
    "label": "구직단념·미취업 청년"
   }
  ],
  "verify": [
   "최근 6개월간 취업·교육·직업훈련 이력 없음 + 구직단념청년 문답표 21점 이상 등",
   "국민취업지원제도 수혜 중인 사람, 사이버대·대학원 재학생 등 제외",
   "청년뉴딜 안내상 2026년 신청기간 1~11월 — 운영기관(지자체)별 마감 확인"
  ],
  "howTo": [
   "고용24에서 청년도전지원사업 검색 후 신청 또는 지자체 운영기관 방문",
   "참여 상담 및 문답표 작성",
   "프로그램 이수 후 참여수당 수령"
  ],
  "url": "https://www.work24.go.kr/wk/g/b/1100/busiIntro.do",
  "source": "https://moelyouth.work24.go.kr/"
 },
 {
  "id": "future-tomorrow-work-experience",
  "name": "미래내일 일경험 사업",
  "org": "고용노동부",
  "category": "일자리",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "benefit": "기업 인턴·프로젝트 등 4주~6개월 일경험 + 참여수당(인턴형 주 37.5만원 등)",
  "criteria": [
   {
    "type": "age",
    "min": 15,
    "max": 34
   },
   {
    "type": "status",
    "in": [
     "구직 중",
     "학생",
     "비자발 퇴사"
    ],
    "label": "미취업 청년"
   }
  ],
  "verify": [
   "2026년 사업기간(2026.3.1.~2027.2.28.) 중 최대 2회 참여",
   "프로그램별 모집기간 상이(청년뉴딜 안내상 5~11월) — 11월 이후 신규 모집 여부는 포털에서 확인"
  ],
  "howTo": [
   "청년일경험 포털(yw.work24.go.kr)에서 모집 중인 프로그램 검색",
   "프로그램별 신청 및 선발"
  ],
  "url": "https://yw.work24.go.kr/d/a/selectWkexPrgmList.do",
  "source": "https://moelyouth.work24.go.kr/"
 },
 {
  "id": "youth-growth-project",
  "name": "청년성장프로젝트",
  "org": "고용노동부",
  "category": "일자리",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "취업준비 청년 대상 무료 진로·취업 상담, 특강, 멘토링, 청년카페 이용",
  "criteria": [
   {
    "type": "status",
    "in": [
     "구직 중",
     "학생",
     "비자발 퇴사"
    ],
    "label": "취업준비 청년"
   }
  ],
  "verify": [
   "청년뉴딜 안내상 운영기간 1~12월",
   "대상 연령·운영기관은 지역별 공고 확인"
  ],
  "howTo": [
   "고용24에서 '청년성장프로젝트' 검색",
   "가까운 운영기관 프로그램 신청"
  ],
  "url": "https://moelyouth.work24.go.kr/",
  "source": "https://moelyouth.work24.go.kr/"
 },
 {
  "id": "university-job-plus-center",
  "name": "대학일자리플러스센터 (재학생·졸업생·지역청년 취업지원)",
  "org": "고용노동부",
  "category": "일자리",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "전국 대학 내 센터에서 무료 진로·취업상담, 이력서 첨삭, 모의면접, 졸업생 특화프로그램",
  "criteria": [
   {
    "type": "age",
    "min": 15,
    "max": 120,
    "label": "만 15세 이상 (재학·휴학·졸업생, 타대생, 지역 청년)"
   }
  ],
  "verify": [
   "졸업생 특화프로그램은 졸업 후 미취업자·졸업예정자 대상, 운영대학별로 상이",
   "인기 프로그램은 조기 마감 가능"
  ],
  "howTo": [
   "고용24에서 운영대학 목록 확인",
   "센터 방문 또는 고용24로 프로그램 신청"
  ],
  "url": "https://www.work24.go.kr/fs/b/a/0100/selectOperUnivList.do?currentPageNo=1&recordCountPerPage=10",
  "source": "https://m.work24.go.kr/cm/c/f/1100/selecSystInfo.do?currentPageNo=1&recordCountPerPage=10&systId=SI00000337"
 },
 {
  "id": "sunshine-loan-youth",
  "name": "햇살론유스",
  "org": "서민금융진흥원",
  "category": "대출",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "1인당 생애 1,200만원 이내 저금리 대출(일반생활자금 1회 300만원·연 600만원, 특정용도 1회 900만원), 금리 연 5%(사회적 배려대상자 2%)",
  "criteria": [
   {
    "type": "age",
    "min": 19,
    "max": 34
   },
   {
    "type": "incomeMax",
    "max": 35000000,
    "label": "본인 연소득 3,500만원 이하"
   },
   {
    "type": "status",
    "in": [
     "구직 중",
     "학생",
     "재직",
     "자영업"
    ],
    "label": "대학(원)생·미취업청년·사회초년생·창업 1년 이내 청년사업자"
   }
  ],
  "verify": [
   "사회초년생은 중소기업 재직 1년 이하 등 세부 요건 확인",
   "청년 사업자는 창업 1년 이내 저소득 청년",
   "금리 표기가 서민금융진흥원 페이지(4.0%)와 2026 정책브리핑(5%)이 다름 — 신청 시 확인"
  ],
  "howTo": [
   "'서민금융 잇다' 앱에서 신청 또는 서민금융통합지원센터 방문 예약",
   "자격 심사 후 협약 은행에서 대출 실행"
  ],
  "url": "https://mmc.kinfa.or.kr/view/you/KFA_YOU_10000000",
  "source": "https://www.korea.kr/multi/visualNewsView.do?newsId=148956377"
 },
 {
  "id": "youth-financial-counseling",
  "name": "청년 재무진단·재무상담",
  "org": "서민금융진흥원",
  "category": "금융상담·신용",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "무료 온라인 재무진단 + 1:1 재무상담",
  "criteria": [],
  "verify": [
   "청년 누구나(청년뉴딜 안내). 재무진단은 상시, 1:1 상담은 2026년 7월부터"
  ],
  "howTo": [
   "서민금융진흥원 청년 재무상담 페이지(kinfa.or.kr/fill4young) 접속",
   "온라인 재무진단 후 1:1 상담 신청"
  ],
  "url": "https://www.kinfa.or.kr/fill4young",
  "source": "https://moelyouth.work24.go.kr/"
 },
 {
  "id": "soldier-tomorrow-savings",
  "name": "장병내일준비적금",
  "org": "국방부",
  "category": "예적금",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "복무기간 적금 + 만기 시 납입 원금 100% 매칭지원금, 이자소득 비과세 (월 납입한도 55만원)",
  "criteria": [
   {
    "type": "target",
    "label": "현역병 등 군 복무 중인 장병"
   }
  ],
  "verify": [
   "현역·상근예비역·사회복무요원·대체복무요원 등 병 급여 체계 적용 복무자만",
   "만기 전 중도해지 시 비과세·정부지원금 미지급",
   "월 납입한도 55만원은 2026년 기준 국방부 공지로 확인"
  ],
  "howTo": [
   "복무 중 취급 은행 앱·영업점에서 가입",
   "전역 시 만기 해지로 원리금과 매칭지원금 수령"
  ],
  "url": "https://www.mnd.go.kr/mnd/288/subview.do",
  "source": "https://www.mnd.go.kr/mnd/288/subview.do"
 },
 {
  "id": "youth-small-business-loan",
  "name": "청년 소상공인·청년채용 소상공인 융자(청년고용연계자금)",
  "org": "중소벤처기업부·소상공인시장진흥공단",
  "category": "대출",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "benefit": "업체당 최대 7천만원 저리 융자(5년 이내, 2년 거치)",
  "criteria": [
   {
    "type": "target",
    "label": "청년 소상공인 또는 청년을 고용한 소상공인"
   },
   {
    "type": "age",
    "min": 19,
    "max": 39,
    "label": "만 39세 이하 청년 소상공인"
   },
   {
    "type": "status",
    "in": [
     "자영업"
    ],
    "label": "소상공인"
   }
  ],
  "verify": [
   "만 39세 이하 청년 소상공인 또는 청년 근로자를 고용한 소상공인",
   "업력 요건(3년 미만 등) 확인",
   "2026년 7월부터 분기별 접수 — 4분기 접수 일정 미확인, 자금 소진 시 마감",
   "금리는 공고별 상이(2026 융자계획 확인)"
  ],
  "howTo": [
   "소상공인정책자금 누리집(ols.sbiz.or.kr)에서 접수 공고 확인",
   "온라인 신청 및 심사",
   "대리대출 은행에서 대출 실행"
  ],
  "url": "https://ols.sbiz.or.kr",
  "source": "https://www.mss.go.kr/site/smba/supportPolicy/supportPolicyDetailDiv.do?cmm_code=BB020100&searchSeq=ST_000000001066487"
 },
 {
  "id": "eitc-late-2025",
  "name": "근로장려금 기한 후 신청 (2025년 귀속)",
  "org": "국세청",
  "category": "세금",
  "region": "전국",
  "applyStart": "2026-06-02",
  "applyEnd": "2026-12-01",
  "always": false,
  "benefit": "최대 단독 165만원·홑벌이 285만원·맞벌이 330만원 (기한 후 신청은 산정액의 95% 지급)",
  "criteria": [
   {
    "type": "eitc"
   }
  ],
  "verify": [
   "2025년 부부합산 총소득: 단독 2,200만원·홑벌이 3,200만원·맞벌이 4,400만원 미만",
   "가구원 재산 합계 2억4천만원 미만(2025.6.1. 기준, 1억7천만원 이상이면 50% 지급)",
   "근로·사업·종교인 소득이 있어야 함"
  ],
  "howTo": [
   "홈택스(PC·모바일 손택스)에서 근로·자녀장려금 신청",
   "안내문 수령자는 QR코드·ARS(1544-9944)로도 가능",
   "12월 1일 마감, 이후 신청 불가"
  ],
  "url": "https://www.hometax.go.kr",
  "source": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=238977&mi=40397"
 },
 {
  "id": "ctc-late-2025",
  "name": "자녀장려금 기한 후 신청 (2025년 귀속)",
  "org": "국세청",
  "category": "세금",
  "region": "전국",
  "applyStart": "2026-06-02",
  "applyEnd": "2026-12-01",
  "always": false,
  "benefit": "부양자녀 1명당 50만~100만원 (기한 후 신청은 산정액의 95% 지급)",
  "criteria": [
   {
    "type": "target",
    "label": "18세 미만 부양자녀가 있는 가구"
   }
  ],
  "verify": [
   "부양자녀(18세 미만 등)가 있는 가구",
   "2025년 부부합산 총소득 7천만원 미만",
   "가구원 재산 합계 2억4천만원 미만(2025.6.1. 기준, 1억7천만원 이상이면 50% 지급)"
  ],
  "howTo": [
   "홈택스(PC·모바일)에서 근로·자녀장려금 신청",
   "장려금 상담센터 1566-3636"
  ],
  "url": "https://www.hometax.go.kr",
  "source": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=238977&mi=40397"
 },
 {
  "id": "sme-youth-income-tax-reduction",
  "name": "중소기업 취업 청년 소득세 감면",
  "org": "국세청",
  "category": "세금",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "취업일부터 5년간 근로소득세 90% 감면(과세기간별 200만원 한도)",
  "criteria": [
   {
    "type": "target",
    "label": "중소기업에 취업한 청년"
   },
   {
    "type": "age",
    "min": 15,
    "max": 34,
    "label": "근로계약 체결일 기준 15~34세(군복무 최대 6년 차감)"
   },
   {
    "type": "status",
    "in": [
     "재직"
    ],
    "label": "중소기업 재직"
   }
  ],
  "verify": [
   "감면 대상 업종을 주된 사업으로 하는 중소기업 취업자",
   "임원, 최대주주·최대출자자와 그 배우자·특수관계인 등 제외",
   "취업일이 속한 달의 다음 달 말일까지 회사에 감면신청서 제출이 원칙(놓친 경우 경정청구 가능 여부 확인)",
   "제도 적용기한(조세특례제한법 일몰)은 2026년 기준 공고 확인"
  ],
  "howTo": [
   "'중소기업 취업자 소득세 감면신청서'를 회사에 제출",
   "회사가 감면명세서를 관할 세무서에 제출",
   "원천징수·연말정산 시 감면 반영"
  ],
  "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=40632&cntntsId=239023",
  "source": "https://www.korea.kr/news/policyNewsView.do?newsId=148958309"
 },
 {
  "id": "youth-startup-tax-reduction",
  "name": "청년 창업중소기업 세액감면",
  "org": "국세청",
  "category": "세금",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "창업 후 5년간 소득세·법인세 50~100% 감면(수도권과밀억제권역 밖 100%, 안 50%)",
  "criteria": [
   {
    "type": "target",
    "label": "청년 창업자"
   },
   {
    "type": "age",
    "min": 15,
    "max": 34,
    "label": "창업 당시 대표자 15~34세(병역 최대 6년 차감)"
   },
   {
    "type": "status",
    "in": [
     "자영업"
    ],
    "label": "창업자"
   }
  ],
  "verify": [
   "감면 대상 업종으로 창업(도소매업·부동산임대업·일부 전문직 제외)",
   "2025.1.1. 이후 창업분은 감면세액 합계 5억원 초과분 미감면",
   "법인은 최대주주 요건 확인, 2026년 세법개정 반영 여부 확인"
  ],
  "howTo": [
   "종합소득세·법인세 신고 시 세액감면신청서 함께 제출(홈택스)"
  ],
  "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=41127&cntntsId=239082",
  "source": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=41127&cntntsId=239082"
 },
 {
  "id": "national-scholarship-2027-1st",
  "name": "2027학년도 1학기 국가장학금 1차 신청",
  "org": "교육부·한국장학재단",
  "category": "교육",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "benefit": "소득구간별 등록금 지원(2027년부터 5구간 체계 개편, 지방 국립대 신입생은 구간 무관 등록금 전액)",
  "criteria": [
   {
    "type": "target",
    "label": "대학(원) 재학·입학 예정자"
   },
   {
    "type": "status",
    "in": [
     "학생"
    ],
    "label": "대학 신입·재학·편입·복학 예정자"
   }
  ],
  "verify": [
   "한국장학재단 공지상 1차 신청 2026년 11월 말~12월 말(정확한 날짜는 재단 공고 확인)",
   "재학생은 1차 신청이 원칙",
   "학자금 지원구간·성적 기준은 2027학년도 공고 확인",
   "지방 국립대 전액 지원은 2027학년도 신입생부터, 의약학계열 제외"
  ],
  "howTo": [
   "한국장학재단 누리집·앱에서 국가장학금 신청",
   "가구원 정보제공 동의",
   "서류 제출 후 지원구간 산정 결과 확인"
  ],
  "url": "https://www.kosaf.go.kr/ko/scholar.do?pg=scholarship05_12_01_01",
  "source": "https://www.kosaf.go.kr/ko/notice.do?mode=view&seqNo=21272"
 },
 {
  "id": "student-loan-2026-2nd-semester",
  "name": "2026년 2학기 학자금대출 (취업 후 상환·일반 상환)",
  "org": "교육부·한국장학재단",
  "category": "대출",
  "region": "전국",
  "applyStart": "2026-07-01",
  "applyEnd": "2026-11-17",
  "always": false,
  "benefit": "등록금 실소요액 + 생활비 학기당 200만원 한도 대출, 2026년 2학기 금리 연 1.7%",
  "criteria": [
   {
    "type": "target",
    "label": "대학(원) 재학생"
   },
   {
    "type": "status",
    "in": [
     "학생"
    ],
    "label": "대학(원)생"
   }
  ],
  "verify": [
   "취업 후 상환 대출은 학자금 지원구간·성적·연령 등 요건 별도",
   "마감일(11.17.)은 18시까지 신청 가능"
  ],
  "howTo": [
   "한국장학재단 누리집·앱에서 학자금대출 신청",
   "가구원 정보제공 동의 및 서류 제출",
   "심사 후 대출 실행"
  ],
  "url": "https://www.kosaf.go.kr/ko/tuition.do?pg=tuition01",
  "source": "https://www.kosaf.go.kr/ko/tuition.do?pg=tuition01"
 },
 {
  "id": "youth-tech-cert-exam-fee",
  "name": "청년 국가기술자격 응시료 지원",
  "org": "고용노동부·한국산업인력공단",
  "category": "교육",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "국가기술자격 시험 응시료 50% 지원(1인 연 3회)",
  "criteria": [
   {
    "type": "age",
    "min": 15,
    "max": 34,
    "label": "만 34세 이하 청년"
   }
  ],
  "verify": [
   "출생연도 기준은 2026년 공고 첨부파일 확인",
   "한국산업인력공단 시행 종목 대상",
   "예산 소진 시 조기 종료"
  ],
  "howTo": [
   "큐넷(Q-net)에서 시험 접수 시 응시료 지원 선택",
   "할인된 응시료 결제"
  ],
  "url": "https://q-net.or.kr/man004.do?ARTL_SEQ=5251124&BOARD_ID=Q001&gId=&gSite=Q&id=man00402",
  "source": "https://www.moel.go.kr/policyitrd/policyItrdView.do?policy_itrd_sn=100"
 },
 {
  "id": "modu-card-k-pass-youth",
  "name": "K-패스·모두의 카드 (청년 대중교통비 환급)",
  "org": "국토교통부",
  "category": "교통",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "기본형 청년 대중교통비 30% 환급(월 15회 이상, 최대 60회), 또는 모두의 카드 기준금액 초과분 환급 중 유리한 방식 자동 적용",
  "criteria": [
   {
    "type": "age",
    "min": 19,
    "max": 34
   }
  ],
  "verify": [
   "참여 지자체 주민",
   "정액형 기준금액 한시 인하는 종료, 시차 출퇴근 시간대 혜택은 2026.12.31.까지 유지",
   "월 15회 이상 이용해야 환급"
  ],
  "howTo": [
   "K-패스 제휴 카드사에서 카드 발급",
   "K-패스(모두의 카드) 누리집·앱 회원가입 및 카드 등록",
   "다음 달 자동 환급"
  ],
  "url": "https://korea-pass.kr",
  "source": "https://www.korea.kr/news/policyNewsView.do?newsId=148958934"
 },
 {
  "id": "culture-nuri-card-2026",
  "name": "2026년 문화누리카드",
  "org": "문화체육관광부",
  "category": "문화",
  "region": "전국",
  "applyStart": "2026-02-02",
  "applyEnd": "2026-11-30",
  "always": false,
  "benefit": "1인당 연 15만원 문화·여행·체육 이용권(청소년 등 1만원 추가)",
  "criteria": [
   {
    "type": "target",
    "label": "기초생활수급자·차상위계층"
   },
   {
    "type": "age",
    "min": 6,
    "max": 120,
    "label": "만 6세 이상"
   }
  ],
  "verify": [
   "기초생활수급자·차상위계층",
   "마감일 18시까지, 지역별 예산 소진 시 조기 마감",
   "사용기한 2026.12.31."
  ],
  "howTo": [
   "문화누리카드 누리집·앱, ARS 또는 주민센터에서 신청",
   "카드 수령 후 가맹점에서 사용"
  ],
  "url": "https://www.mnuri.kr/card/cardMain/cardIssue_step00.do",
  "source": "https://www.mnuri.kr/notice/userNotice/detail.do?nttId=43151"
 },
 {
  "id": "self-reliance-youth-allowance",
  "name": "자립준비청년 자립수당",
  "org": "보건복지부",
  "category": "생활·복지",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "보호종료 후 5년간 월 50만원(2026년)",
  "criteria": [
   {
    "type": "target",
    "label": "자립준비청년 (보호종료 청년)"
   }
  ],
  "verify": [
   "아동복지시설·가정위탁 보호종료 청년으로 보호종료일 기준 과거 2년 이상 연속 보호받은 사람",
   "보호종료 후 5년 이내"
  ],
  "howTo": [
   "복지로 또는 주민센터에서 신청(보호종료 시 안내)",
   "자립지원전담기관 상담 연계"
  ],
  "url": "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001175&wlfareInfoReldBztpCd=01",
  "source": "https://www.korea.kr/news/policyNewsView.do?newsId=148923585"
 },
 {
  "id": "family-caregiving-youth-self-care",
  "name": "가족돌봄청년 자기돌봄비 (청년미래센터)",
  "org": "보건복지부",
  "category": "생활·복지",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "가족돌봄청년 자기돌봄비 연 최대 200만원 + 고립·은둔청년 단계별 맞춤 프로그램",
  "criteria": [
   {
    "type": "target",
    "label": "가족을 돌보는 청년"
   }
  ],
  "verify": [
   "가족을 돌보는 청년(대상 연령은 공고 확인), 가구 중위소득 100% 이하",
   "고립·은둔 자가진단은 19~39세 누구나",
   "시범지역은 상시, 그 외 지역은 온라인(6월~)·방문(9월~) 접수 — 2026년 기준 공고 확인"
  ],
  "howTo": [
   "청년ON 온라인 신청 또는 청년미래센터·주민센터 방문",
   "자격 확인 후 지원"
  ],
  "url": "https://moelyouth.work24.go.kr/",
  "source": "https://moelyouth.work24.go.kr/"
 },
 {
  "id": "mind-investment-counseling",
  "name": "전국민 마음투자 지원사업 (심리상담 바우처)",
  "org": "보건복지부",
  "category": "건강·마음",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "1:1 대면 전문 심리상담 8회 이용권(소득에 따라 본인부담 0~30%)",
  "criteria": [
   {
    "type": "target",
    "label": "기관 의뢰서·진단서 등이 있는 사람"
   }
  ],
  "verify": [
   "정신건강복지센터·대학 상담센터 등 의뢰서, 정신의료기관 진단서·소견서, 국가건강검진 우울 10점 이상 등",
   "자립준비청년·보호연장아동은 본인부담 면제",
   "2026년 대상 확대(일반 국민) 시행 여부 — 2026년 기준 공고 확인",
   "예산 소진 시 마감 가능"
  ],
  "howTo": [
   "복지로 누리집·앱 또는 주민센터에서 의뢰서 등 첨부해 신청",
   "바우처 발급 후 제공기관에서 상담"
  ],
  "url": "https://mohw.go.kr/board.es?act=view&bid=0027&list_no=1483238&mid=a10503000000",
  "source": "https://www.korea.kr/news/policyNewsView.do?newsId=148934550"
 },
 {
  "id": "youth-mental-health-checkup",
  "name": "청년 국가건강검진 정신건강검사 (우울증·조기정신증)",
  "org": "보건복지부·국민건강보험공단",
  "category": "건강·마음",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "일반건강검진 시 우울증·조기정신증 검사 무료(2년마다)",
  "criteria": [
   {
    "type": "age",
    "min": 20,
    "max": 34
   }
  ],
  "verify": [
   "20·22·24…34세 등 짝수 나이 해당 연도에 검진(해당 연도 12월 31일까지)",
   "일반건강검진 대상자(직장가입자·지역가입자·피부양자 등) 여부는 공단 확인"
  ],
  "howTo": [
   "국민건강보험공단 검진기관 조회",
   "검진기관 예약 후 일반건강검진 받으며 정신건강검사 문진"
  ],
  "url": "https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do",
  "source": "https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do"
 },
 {
  "id": "ccrs-youth-debt-relief",
  "name": "신용회복위원회 청년 채무조정 특례",
  "org": "신용회복위원회·금융위원회",
  "category": "금융상담·신용",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "미취업청년 개인워크아웃: 원금 감면(미상각 최대 30%, 상각 20~70%), 상환유예 최장 5년, 신청비 면제 / 34세 이하 신속채무조정 이용 가능",
  "criteria": [
   {
    "type": "target",
    "label": "채무 연체 중인 청년"
   },
   {
    "type": "age",
    "min": 19,
    "max": 34,
    "label": "만 34세 이하"
   }
  ],
  "verify": [
   "미취업청년 특례: 채권금융회사 채무 90일 이상 연체",
   "신속채무조정: 최근 6개월 내 5일 이상 연체 3회 이상 등",
   "근거 자료가 2024년 이전 — 2026년 기준 공고 확인"
  ],
  "howTo": [
   "신용회복위원회 사이버상담부 또는 '서민금융 잇다' 앱에서 상담·신청",
   "심사 후 채무조정 확정"
  ],
  "url": "https://www.ccrs.or.kr/cms/com/index.do?MENU_ID=520",
  "source": "https://www.ccrs.or.kr/cms/com/index.do?MENU_ID=520"
 },
 {
  "id": "youth-beotimmok-jeonse-loan",
  "name": "청년전용 버팀목전세자금 대출",
  "org": "국토교통부 · 주택도시기금",
  "category": "주거",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "전세자금 최대 1.5억원(임차보증금의 80% 이내) 대출, 연 2.2%~3.3%",
  "criteria": [
   {
    "type": "age",
    "min": 19,
    "max": 34,
    "label": "만 19세 이상 ~ 만 34세 이하 세대주(예비 세대주 포함)"
   },
   {
    "type": "noHouse"
   },
   {
    "type": "incomeMax",
    "max": 50000000,
    "label": "본인 연소득 5천만원 이하 (기혼은 배우자 합산)"
   }
  ],
  "verify": [
   "대출신청인과 배우자의 합산 총소득이 5천만원 이하",
   "합산 순자산가액 3.45억원 이하(2026년도 기준)",
   "세대주를 포함한 세대원 전원이 무주택",
   "임차 전용면적 85㎡ 이하 주택(주거용 오피스텔 포함), 임차보증금 3억원 이하",
   "다른 기금 대출 상품과의 대환 불가 등 수탁은행 심사"
  ],
  "howTo": [
   "주택임대차계약 체결(보증금 5% 이상 지불)",
   "기금e든든 온라인 또는 기금 수탁은행(우리·KB국민·신한·하나·NH농협) 방문 신청",
   "수탁은행 심사 후 대출 실행"
  ],
  "url": "https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020301.jsp",
  "source": "https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020301.jsp"
 },
 {
  "id": "beotimmok-jeonse-loan-general",
  "name": "버팀목전세자금 대출 (일반)",
  "org": "국토교통부 · 주택도시기금",
  "category": "주거",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "전세자금 대출 (일반가구 수도권 최대 1.2억원·수도권 외 8천만원, 전세금의 70% 이내), 연 2.5%~3.5%",
  "criteria": [
   {
    "type": "noHouse"
   },
   {
    "type": "incomeMax",
    "max": 50000000,
    "label": "본인 연소득 5천만원 이하 (기혼은 배우자 합산)"
   }
  ],
  "verify": [
   "민법상 성년인 세대주 (연령 상한 없음 — 만 35세 이상 청년도 가능)",
   "대출신청인과 배우자의 합산 총소득 연 5천만원 이하 (2자녀 가구 6천만원, 신혼부부 7.5천만원)",
   "합산 순자산가액 3.45억원 이하(2026년도 기준)",
   "세대원 전원 무주택",
   "임차 전용면적 85㎡ 이하, 임차보증금 수도권 3억원·수도권 외 2억원 이하(일반가구)",
   "만 34세 이하는 청년전용 버팀목과 비교 후 선택"
  ],
  "howTo": [
   "임대차계약 체결(보증금 5% 이상 지불)",
   "기금e든든 또는 기금 수탁은행 신청",
   "은행 심사 후 대출 실행"
  ],
  "url": "https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020101.jsp",
  "source": "https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020101.jsp"
 },
 {
  "id": "youth-deposit-monthly-rent-loan",
  "name": "청년전용 보증부월세대출",
  "org": "국토교통부 · 주택도시기금",
  "category": "주거",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "보증금 최대 4,500만원(연 1.3%) + 월세금 최대 1,200만원(월 50만원 이내, 20만원까지 연 0%) 대출",
  "criteria": [
   {
    "type": "age",
    "min": 19,
    "max": 34,
    "label": "만 19세 이상 ~ 만 34세 이하 단독세대주(예비 포함)"
   },
   {
    "type": "noHouse"
   },
   {
    "type": "housingIn",
    "in": [
     "월세"
    ],
    "label": "보증부 월세 계약"
   },
   {
    "type": "incomeMax",
    "max": 50000000,
    "label": "본인 연소득 5천만원 이하 (기혼은 배우자 합산)"
   }
  ],
  "verify": [
   "대출신청인과 배우자의 합산 총소득 5천만원 이하",
   "합산 순자산가액 3.45억원 이하(2026년도 기준)",
   "세대원 전원 무주택, 단독세대주(예비세대주 포함)",
   "임차 전용면적 60㎡ 이하, 보증금 6.5천만원·월세 70만원 이하",
   "1년 미만 재직자는 한도 2천만원 이하로 제한될 수 있음"
  ],
  "howTo": [
   "월세 임대차계약 체결",
   "기금e든든 또는 기금 수탁은행 신청",
   "은행 심사 후 대출 실행"
  ],
  "url": "https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020701.jsp",
  "source": "https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020701.jsp"
 },
 {
  "id": "housing-stability-monthly-rent-loan",
  "name": "주거안정월세대출",
  "org": "국토교통부 · 주택도시기금",
  "category": "주거",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "월세자금 호당 최대 1,440만원(월 최대 60만원) 대출, 우대형 연 1.3%·일반형 연 1.8%",
  "criteria": [
   {
    "type": "noHouse"
   },
   {
    "type": "housingIn",
    "in": [
     "월세"
    ],
    "label": "월세 계약(보증금 5% 이상 지불)"
   },
   {
    "type": "incomeMax",
    "max": 50000000,
    "label": "본인 연소득 5천만원 이하 (일반형, 기혼은 부부합산)"
   }
  ],
  "verify": [
   "우대형: 취업준비생(만 35세 이하 무소득, 부모 소득 6천만원 이하), 사회초년생(취업 후 5년 이내 만 35세 이하, 부부합산 연소득 4천만원 이하), 근로·자녀장려금 수급자, 주거급여 수급자 등",
   "일반형: 부부합산 연소득 5천만원 이하",
   "부부합산 순자산가액 3.45억원 이하(2026년도 기준)",
   "성년인 세대주, 세대원 전원 무주택, 공공임대 입주 중이면 불가",
   "전용 85㎡ 이하, 보증금 1억원·월세 60만원 이하"
  ],
  "howTo": [
   "월세 임대차계약 체결",
   "기금e든든 또는 기금 수탁은행 신청",
   "은행 심사 후 대출 실행"
  ],
  "url": "https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020201.jsp",
  "source": "https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020201.jsp"
 },
 {
  "id": "vulnerable-relocation-beotimmok-loan",
  "name": "주거취약계층 이주지원 버팀목전세자금",
  "org": "국토교통부 · 주택도시기금",
  "category": "주거",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "쪽방·고시원 등 비정상거처 거주자의 공공임대 보증금 등 이주 자금 무이자 대출",
  "criteria": [
   {
    "type": "target",
    "label": "쪽방·고시원 등 비정상 거처 거주자"
   },
   {
    "type": "noHouse"
   }
  ],
  "verify": [
   "대출 접수일 현재 비정상거처(쪽방, 고시원, 여인숙, 비닐하우스, 컨테이너, PC방 등) 거주 세대주 (주거상향 유형 확인서로 확인)",
   "세대원 전원 무주택",
   "임대차계약 체결 후 보증금 5% 이상 지불, 잔금일·전입일 중 빠른 날부터 3개월 이내 신청",
   "한도·금리는 공공/민간 유형별로 다름 — 수탁은행 확인",
   "자산심사 문의 1551-3119"
  ],
  "howTo": [
   "주거상향 유형 확인서 발급",
   "임대차계약 체결",
   "수탁은행 영업점 방문 신청(HUG/HF 보증 동시 신청)"
  ],
  "url": "https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05021101.jsp",
  "source": "https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05021101.jsp"
 },
 {
  "id": "youth-housing-dream-savings",
  "name": "청년 주택드림 청약통장",
  "org": "국토교통부 · 주택도시기금",
  "category": "예적금",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "최고 연 4.5% 금리 청약통장, 납입액 40% 소득공제(연 300만원 한도), 이자소득 비과세(요건 충족 시)",
  "criteria": [
   {
    "type": "age",
    "min": 19,
    "max": 34,
    "label": "만 19~34세 (병역기간 최대 6년 차감)"
   },
   {
    "type": "noHouse"
   },
   {
    "type": "incomeMax",
    "max": 50000000,
    "label": "본인 연소득 5천만원 이하"
   }
  ],
  "verify": [
   "직전년도 신고소득(근로·사업·기타소득)이 있어야 함",
   "비과세는 근로소득 3,600만원·종합소득 2,600만원 이하 등 요건",
   "2026년 기준 금리·요건 취급은행 확인 (출시 당시 2024년 자료 기준)"
  ],
  "howTo": [
   "신분증·소득증빙 지참",
   "취급은행(우리·국민·농협·신한·하나·기업·부산·대구·경남) 지점 방문 가입"
  ],
  "url": "https://www.molit.go.kr/2024dreamaccount/main.jsp",
  "source": "https://www.korea.kr/news/policyNewsView.do?newsId=148926066"
 },
 {
  "id": "youth-housing-dream-didimdol-loan",
  "name": "청년 주택드림 디딤돌 대출",
  "org": "국토교통부 · 주택도시기금",
  "category": "주거",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "청년 주택드림 청약통장 가입자가 청약 당첨 시 분양가의 최대 80%까지 저리 주택구입자금 대출",
  "criteria": [
   {
    "type": "target",
    "label": "청년 주택드림 청약통장 가입·청약 당첨자"
   },
   {
    "type": "noHouse"
   }
  ],
  "verify": [
   "청년 주택드림 청약통장 가입 및 청약 당첨자",
   "나이·소득·통장 가입기간·납입액·분양가·면적 요건 — 2026년 기준 공고 확인",
   "내집마련디딤돌대출 하위 상품, 기금 수탁은행 확인"
  ],
  "howTo": [
   "청약 당첨",
   "기금e든든 또는 기금 수탁은행 상담·신청"
  ],
  "url": "https://nhuf.molit.go.kr/FP/FP05/FP0503/FP05030103.jsp",
  "source": "https://www.korea.kr/news/policyNewsView.do?newsId=148926066"
 },
 {
  "id": "jeonse-guarantee-fee-support",
  "name": "전세보증금반환보증 보증료 지원",
  "org": "국토교통부 (시·군·구 접수)",
  "category": "주거",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "납부한 전세보증금반환보증 보증료 최대 40만원 환급 (청년 전액, 2025.3.30 이전 가입건 최대 30만원)",
  "criteria": [
   {
    "type": "target",
    "label": "전세보증금반환보증 가입자"
   },
   {
    "type": "noHouse"
   },
   {
    "type": "housingIn",
    "in": [
     "전세"
    ],
    "label": "전세(반환보증 가입)"
   },
   {
    "type": "incomeMax",
    "max": 50000000,
    "label": "본인 연소득 5천만원 이하 (청년 기준)"
   }
  ],
  "verify": [
   "전세보증금 3억원 이하, 신청일 기준 유효한 전세보증금반환보증(HUG·HF·SGI) 가입 및 보증료 납부",
   "청년 연령 기준은 지자체 조례별 상이 (서울은 만 19~39세)",
   "청년 외 연소득 6천만원(보증료 90% 지원), 신혼부부 7.5천만원",
   "등록임대사업자 임대주택 거주자·법인 임차인 등 제외",
   "지자체별 예산 소진 시 조기 마감"
  ],
  "howTo": [
   "전세보증금반환보증 가입 후 보증료 납부",
   "정부24 또는 안심전세포털 온라인 신청, 또는 주소지 시·군·구청/주민센터 방문",
   "심사 후 본인 계좌로 지급"
  ],
  "url": "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/161300000103",
  "source": "https://housing.seoul.go.kr/site/main/content/sh01_061030"
 },
 {
  "id": "youth-housing-benefit-separate",
  "name": "청년 주거급여 분리지급",
  "org": "국토교통부 · 보건복지부(복지로)",
  "category": "주거",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "주거급여 수급가구의 부모와 따로 사는 청년에게 임차료를 별도 지급",
  "criteria": [
   {
    "type": "target",
    "label": "부모가 주거급여 수급 가구인 청년"
   },
   {
    "type": "age",
    "min": 19,
    "max": 29,
    "label": "만 19세 이상 30세 미만 미혼 자녀"
   },
   {
    "type": "housingIn",
    "in": [
     "월세",
     "전세"
    ],
    "label": "청년 명의 임차"
   }
  ],
  "verify": [
   "부모가 주거급여(임차급여 또는 수선유지급여) 수급가구여야 함",
   "미혼, 청년 명의 임대차계약 및 전입신고",
   "부모와 주민등록상 시·군이 달라야 함 (같은 특별시·광역시 내 분리거주는 원칙적으로 불인정)",
   "온라인 신청은 부모(가구주)만 가능"
  ],
  "howTo": [
   "부모(가구주)가 복지로 온라인 신청 또는 가구주 거주지 주민센터 방문",
   "청년 임대차계약서·분리거주 사유 증빙·임차료 입금확인서 제출"
  ],
  "url": "https://online.bokjiro.go.kr/apl/info/aplInfoApplYthSepHosryView.do",
  "source": "https://m.bokjiro.go.kr/ssis-tem/cms/mob/news/promotion/1210318_1166.html"
 },
 {
  "id": "emergency-welfare-housing-support",
  "name": "긴급복지 주거지원",
  "org": "보건복지부 (시·군·구)",
  "category": "주거",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "위기 상황 가구에 임시거소 제공 또는 주거비 지원",
  "criteria": [
   {
    "type": "target",
    "label": "실직·질병 등 위기 사유가 생긴 가구"
   }
  ],
  "verify": [
   "실직·주소득자 사망/가출·중한 질병·화재 등 고시된 위기사유 발생",
   "소득 기준 중위소득 75% 이하 (2026년 1인 가구 월 1,923,179원)",
   "재산·금융재산 기준 (주거지원은 금융재산 기준에 200만원 가산)",
   "지원 금액은 지역·가구원 수별 상이 — 2026년 기준 공고 확인"
  ],
  "howTo": [
   "시·군·구청 또는 주민센터 방문, 보건복지상담센터 129 신고",
   "현장 확인 후 선지원·사후조사"
  ],
  "url": "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/135200005003",
  "source": "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/135200005003"
 },
 {
  "id": "lh-youth-jeonse-rental",
  "name": "LH 청년 전세임대주택",
  "org": "한국토지주택공사(LH)",
  "category": "주거",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "benefit": "청년이 고른 전셋집을 LH가 계약해 저렴하게 재임대",
  "criteria": [
   {
    "type": "noHouse"
   }
  ],
  "verify": [
   "모집공고 시기 확인 (2026년 1순위 수시모집이 12.31까지라는 2차 자료가 있으나 공식 공고 원문 미확인)",
   "미혼 청년·대학생·취업준비생 등 순위별 자격, 소득·자산 기준은 공고 원문 기준",
   "지원한도·임대조건 2026년 기준 공고 확인"
  ],
  "howTo": [
   "LH청약플러스에서 공고 확인",
   "온라인 신청",
   "자격 심사 후 주택 물색·계약"
  ],
  "url": "https://apply.lh.or.kr",
  "source": "https://youth.seoul.go.kr/content.do?key=2310200006"
 },
 {
  "id": "lh-youth-purchase-rental",
  "name": "LH 청년 매입임대주택",
  "org": "한국토지주택공사(LH)",
  "category": "주거",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "benefit": "LH가 매입한 주택을 청년에게 시세보다 저렴하게 임대",
  "criteria": [
   {
    "type": "age",
    "min": 19,
    "max": 39
   },
   {
    "type": "noHouse"
   }
  ],
  "verify": [
   "모집공고 시기 확인 (지역본부별 수시 공고)",
   "미혼 무주택 청년·대학생·취업준비생, 순위별 소득·자산·자동차 기준은 공고 원문 기준"
  ],
  "howTo": [
   "LH청약플러스 지역별 공고 확인",
   "온라인 청약",
   "서류 제출·자격 심사 후 계약"
  ],
  "url": "https://apply.lh.or.kr",
  "source": "https://apply.lh.or.kr/lhapply/apply/wt/wrtanc/selectWrtancList.do?mi=1026"
 },
 {
  "id": "lh-happy-housing",
  "name": "LH 행복주택 (청년 계층)",
  "org": "한국토지주택공사(LH)",
  "category": "주거",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "benefit": "대학생·청년·신혼부부 등에 시세보다 저렴한 공공임대 공급",
  "criteria": [
   {
    "type": "noHouse"
   }
  ],
  "verify": [
   "모집공고 시기 확인 (단지별 공고 — 2026.11 기준 춘천·철원(~11.27), 포항블루밸리(~12.08), 완주삼례 등 지방 단지 공고 중, 과천주암 C2 행복주택 12월 모집 예정 보도)",
   "청년 계층 나이·소득·자산·자동차 기준은 단지별 공고 원문 기준"
  ],
  "howTo": [
   "LH청약플러스·마이홈포털에서 단지 공고 확인",
   "온라인 청약",
   "서류 제출·심사 후 계약"
  ],
  "url": "https://apply.lh.or.kr",
  "source": "https://apply.lh.or.kr/lhapply/apply/wt/wrtanc/selectWrtancList.do?mi=1026"
 },
 {
  "id": "lh-incheon-sangok-a1-happy-housing-2026-11",
  "name": "인천산곡 A1블록 행복주택(산곡솔마루아파트) 예비입주자 모집",
  "org": "한국토지주택공사(LH)",
  "category": "주거",
  "region": "전국",
  "applyStart": null,
  "applyEnd": "2026-11-25",
  "always": false,
  "benefit": "인천 부평구 산곡 행복주택 예비입주자 선정",
  "criteria": [
   {
    "type": "target",
    "label": "인천 산곡 단지 입주 희망자"
   },
   {
    "type": "noHouse"
   }
  ],
  "verify": [
   "공고 게시 2026-11-11, 목록상 마감 2026-11-25 — 실제 접수 기간·청년 계층 포함 여부 공고 원문 확인",
   "청년 계층 나이·소득·자산·자동차 기준은 공고 원문 기준",
   "인천 소재 단지 (거주지역 요건은 공고 확인)"
  ],
  "howTo": [
   "LH청약플러스 임대주택 공고에서 공고문 확인",
   "온라인 신청",
   "서류 제출·심사"
  ],
  "url": "https://apply.lh.or.kr/lhapply/apply/wt/wrtanc/selectWrtancList.do?mi=1026",
  "source": "https://apply.lh.or.kr/lhapply/apply/wt/wrtanc/selectWrtancList.do?mi=1026"
 },
 {
  "id": "seoul-youth-deposit-interest-support",
  "name": "서울시 청년 임차보증금 이자지원",
  "org": "서울특별시",
  "category": "주거",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "임차보증금 대출(최대 2억원, 보증금 90% 이내, 최장 8년) 이자 최대 연 3.0% 지원 (본인부담 최소 연 1.0%)",
  "criteria": [
   {
    "type": "age",
    "min": 19,
    "max": 39
   },
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "noHouse"
   },
   {
    "type": "incomeMax",
    "max": 50000000,
    "label": "본인 연소득 5천만원 이하 (기혼은 부부합산 6천만원)"
   }
  ],
  "verify": [
   "무주택 세대주(세대주 예정자 포함)",
   "기혼은 부부합산 연소득 6천만원 이하 (2026.6.5 변경 기준)",
   "임차보증금 3억원 이하, 월세 90만원 이하 주택",
   "주거급여 비대상",
   "연중 접수 여부·예산 상황 서울주거포털 확인",
   "기본 2.0% 지원, 한부모가족·자립준비청년 1.0%p 추가"
  ],
  "howTo": [
   "서울주거포털에서 서울시 추천서 발급 신청",
   "하나은행(방문 또는 하나원큐) 대출 사전 상담",
   "임대차계약 체결",
   "하나은행 대출 신청"
  ],
  "url": "https://housing.seoul.go.kr",
  "source": "https://mediahub.seoul.go.kr/archives/2018213"
 },
 {
  "id": "seoul-youth-safe-housing",
  "name": "서울 청년안심주택 (공공·민간임대)",
  "org": "서울특별시 · SH",
  "category": "주거",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "benefit": "역세권 등에 만 19~39세 청년·신혼부부 대상 저렴한 임대주택 공급",
  "criteria": [
   {
    "type": "age",
    "min": 19,
    "max": 39
   },
   {
    "type": "noHouse"
   }
  ],
  "verify": [
   "모집공고 시기 확인 (2026년 1·2차 정기 공고 마감, 단지별 추가모집은 수시)",
   "청년형은 미혼 요건, 소득·자산·자동차가액 기준은 단지별 공고 원문 기준",
   "서울 거주 요건 여부는 공급유형·순위별 공고 확인"
  ],
  "howTo": [
   "청년안심주택 홈페이지·SH·민간사업자 공고 확인",
   "청약 신청",
   "서류 제출·자격 심사 후 계약"
  ],
  "url": "https://soco.seoul.go.kr/youth/main/main.do",
  "source": "https://youth.seoul.go.kr/content.do?key=2310100033"
 },
 {
  "id": "sh-youth-purchase-rental",
  "name": "SH 청년 매입임대주택",
  "org": "서울주택도시개발공사(SH)",
  "category": "주거",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "benefit": "SH가 매입한 서울 시내 주택을 청년에게 시세 30~50% 수준으로 임대",
  "criteria": [
   {
    "type": "age",
    "min": 19,
    "max": 39
   },
   {
    "type": "noHouse"
   }
  ],
  "verify": [
   "모집공고 시기 확인 (2026년 1차 공고 7월 접수 마감, 당첨자 발표 11.20 예정)",
   "무주택·미혼 대학생·취업준비생·청년, 순위별 소득·자산 기준은 공고 원문 기준"
  ],
  "howTo": [
   "SH 인터넷청약시스템에서 공고 확인",
   "인터넷 청약",
   "서류 제출·자격 심사 후 계약"
  ],
  "url": "https://www.i-sh.co.kr",
  "source": "https://housing.seoul.go.kr/site/main/sh/publicLease/list"
 },
 {
  "id": "seoul-housing-voucher",
  "name": "서울형 주택바우처 (일반바우처)",
  "org": "서울특별시",
  "category": "주거",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "수급자가 아닌 저소득 월세 가구에 월 12만원(1인)~17만원(6인) 지원",
  "criteria": [
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "housingIn",
    "in": [
     "월세"
    ],
    "label": "민간 월세 주택·고시원·주거용 오피스텔"
   }
  ],
  "verify": [
   "소득평가액 기준중위소득 60% 이하 (2026년 1인 1,538,543원)",
   "임대보증금 1억 6천5백만원 이하",
   "재산가액 2억원 이하, 금융재산 8,000만원 초과 시 제외",
   "주거급여 수급자 제외",
   "상시 접수 여부 주민센터 확인"
  ],
  "howTo": [
   "신청서·임대차계약서·가족관계증명서 등 준비",
   "주소지 주민센터 제출"
  ],
  "url": "https://housing.seoul.go.kr/site/main/content/sh_061010",
  "source": "https://housing.seoul.go.kr/site/main/content/sh_061010"
 },
 {
  "id": "seoul-single-household-safe-contract-help",
  "name": "서울시 1인가구 전월세 안심계약 도움서비스",
  "org": "서울특별시",
  "category": "주거",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "주거안심매니저(공인중개사)의 무료 계약 상담·집보기 동행·시세 및 불법건축물 확인",
  "criteria": [],
  "verify": [
   "서울시 거주 또는 거주 예정 1인가구(독립가구 예정자 포함), 나이 제한 없음",
   "2026년 운영 시간·자치구 운영 여부 1인가구포털 확인"
  ],
  "howTo": [
   "서울시 1인가구포털에서 신청 (희망일 2~3일 전 권장)",
   "주거안심매니저와 상담·동행"
  ],
  "url": "https://mediahub.seoul.go.kr/archives/2013737",
  "source": "https://mediahub.seoul.go.kr/archives/2013737"
 },
 {
  "id": "seoul-youth-culture-pass",
  "name": "서울청년문화패스",
  "org": "서울특별시 문화본부 문화정책과",
  "category": "문화",
  "region": "서울",
  "applyStart": "2025-12-22",
  "applyEnd": "2026-12-31",
  "always": false,
  "benefit": "공연(뮤지컬·연극·클래식 등)·전시 관람용 문화이용권(카드) 1인당 연 20만원",
  "criteria": [
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "age",
    "min": 21,
    "max": 24,
    "label": "2002~2005년생"
   }
  ],
  "verify": [
   "건강보험료 본인부담금 기준 가구 중위소득 150% 이하 (본인이 피부양자면 부양자 건보료 기준)",
   "2023~2025년 기선정자는 신청 불가 (해당 연령 내 1회 지원)",
   "의무복무 제대군인은 복무기간에 따라 최대 3년 연령 가산",
   "모집기간 11.30 → 12.31로 연장됨(23회차 12.1~12.14, 24회차 12.15~). 예산 소진 시 조기 마감"
  ],
  "howTo": [
   "청년몽땅정보통 로그인 후 '서울청년문화패스' 온라인 신청",
   "신청일 기준 30일 내외 선정 발표(마이페이지·SMS)",
   "신한은행 계좌 개설·체크카드 발급 후 전용 홈페이지(youthcultureseoul.kr)에서 공연 예매"
  ],
  "url": "https://youth.seoul.go.kr/youthConts.do?key=2310200023&sc_pbancSeCd=005&sc_bbsStngSn=2212200001&sc_bbsCtgrySn=2310200005&sc_qnaCtgryCd=&sc_faqCtgryCd=002",
  "source": "https://youth.seoul.go.kr/youthConts.do?key=2310200023&sc_pbancSeCd=005&sc_bbsStngSn=2212200001&sc_bbsCtgrySn=2310200005&tabKind=201&sc_pstSn=2611100005"
 },
 {
  "id": "seoul-youngtech",
  "name": "서울 영테크 (청년 재무상담·금융교육)",
  "org": "서울특별시 미래청년기획관 청년사업담당관",
  "category": "금융상담·신용",
  "region": "서울",
  "applyStart": "2026-03-01",
  "applyEnd": "2026-11-30",
  "always": false,
  "benefit": "무료 맞춤형 재무상담(1:4 그룹 대면, 최대 4회) + 매주 청년 금융교육 클래스",
  "criteria": [
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "age",
    "min": 19,
    "max": 39
   }
  ],
  "verify": [
   "재무상담은 서울 거주 청년 대상 (금융교육 클래스는 공고상 거주요건 명시 없음)",
   "제대군인은 최대 만 42세까지 가능",
   "신청기간 종료일(11.30)은 청년몽땅정보통 정책정보 기준, 사업 종료·조기 마감 여부 확인"
  ],
  "howTo": [
   "서울 영테크 홈페이지에서 재무상담 신청(수시 접수)",
   "금융교육: 매월 1·2주차 교육은 전월 20~25일, 3·4주차 교육은 당월 5~10일 오전 10시부터 신청"
  ],
  "url": "https://youth.seoul.go.kr/youngtech",
  "source": "https://youth.seoul.go.kr/youthConts.do?key=2310100072&sc_pbancSeCd=102&sc_bbsStngSn=2310160002&sc_bbsCtgrySn=0&sc_qnaCtgryCd=001&sc_faqCtgryCd=015"
 },
 {
  "id": "seoul-student-loan-credit-recovery",
  "name": "학자금대출 신용회복 지원사업",
  "org": "서울특별시 미래청년기획관 청년사업담당관",
  "category": "금융상담·신용",
  "region": "서울",
  "applyStart": "2026-02-06",
  "applyEnd": "2026-11-20",
  "always": false,
  "benefit": "분할상환 약정 체결에 필요한 초입금(채무액의 5%) 지원 및 신용유의정보 등록 해제",
  "criteria": [
   {
    "type": "target",
    "label": "학자금대출 신용유의자"
   },
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "age",
    "min": 19,
    "max": 39
   }
  ],
  "verify": [
   "한국장학재단 학자금대출로 신용유의자(신용불량자)가 된 청년",
   "제대군인은 군 복무기간에 따라 최대 만 42세까지",
   "약 260명, 사업비 소진 시 조기 종료 / 접수 마감 11.20(금) 18:00"
  ],
  "howTo": [
   "청년몽땅정보통에서 공고문 확인 후 온라인 신청"
  ],
  "url": "https://youth.seoul.go.kr/youthConts.do?key=2310100075&sc_pbancSeCd=001&sc_bbsStngSn=2212200001&sc_bbsCtgrySn=2310200002&sc_qnaCtgryCd=&sc_faqCtgryCd=007",
  "source": "https://youth.seoul.go.kr/infoData/plcyInfo/view.do?plcyBizId=20261021005400214201&tabKind=002"
 },
 {
  "id": "seoul-youth-hangang-loan",
  "name": "청년 긴급생활안정자금 지원 (서울특별시 한강론)",
  "org": "서울특별시 · 신용회복위원회",
  "category": "대출",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "1인당 최대 1,500만원 긴급생활자금 대출 (연 3%, 최대 60개월)",
  "criteria": [
   {
    "type": "target",
    "label": "채무조정 후 성실 변제 중인 청년"
   },
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "age",
    "min": 19,
    "max": 39
   }
  ],
  "verify": [
   "신용회복위원회 채무조정 확정 후 6개월 이상 성실 변제 중이거나 최근 3년 이내 변제 완료",
   "또는 법원 개인회생 인가 후 12개월 이상 성실 변제 중이거나 최근 3년 이내 변제 완료",
   "대출한도·가능 여부는 별도 심사",
   "2026년 기준 공고 확인 (상시 접수 여부는 신용회복위원회 확인)"
  ],
  "howTo": [
   "신용회복위원회 홈페이지 > 금융과 생활 > 소액금융 > 서울특별시 한강론에서 확인·신청"
  ],
  "url": "https://www.ccrs.or.kr",
  "source": "https://youth.seoul.go.kr/content.do?key=2502130001"
 },
 {
  "id": "seoul-youth-donghaeng-center",
  "name": "청년동행센터 (청년 채무·재무 상담)",
  "org": "서울시복지재단 서울금융복지상담센터",
  "category": "금융상담·신용",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "무료 청년 채무상담(개인회생·파산·면책·워크아웃 등 채무조정 지원)·재무상담·복지서비스 연계",
  "criteria": [
   {
    "type": "target",
    "label": "채무·재무 어려움이 있는 청년"
   },
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "age",
    "min": 0,
    "max": 39,
    "label": "만 39세 이하"
   }
  ],
  "verify": [
   "서울시 금융취약 청년 대상",
   "방문 전 예약 필수"
  ],
  "howTo": [
   "전화(1644-0120) 또는 온라인(sfwc.welfare.seoul.kr)으로 예약",
   "예약 후 방문 상담 (월~금 10~17시, 수요일 야간 18~20시)"
  ],
  "url": "https://sfwc.welfare.seoul.kr",
  "source": "https://youth.seoul.go.kr/content.do?key=2310100073"
 },
 {
  "id": "seoul-isolated-youth-support",
  "name": "고립·은둔청년 지원",
  "org": "서울특별시 미래청년기획관 청년사업담당관 (서울청년기지개센터)",
  "category": "건강·마음",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "심리상담·마음건강 정책 연계, 진로탐색·취업역량 프로그램, 대인관계·활동형 프로그램 (가족 지원 포함)",
  "criteria": [
   {
    "type": "target",
    "label": "고립·은둔 청년"
   },
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "age",
    "min": 19,
    "max": 39
   }
  ],
  "verify": [
   "고립청년(정서적·물리적 고립 6개월 이상) 또는 은둔청년(은둔 6개월 이상, 1개월 내 구직·학업 없음) 기준 충족",
   "의무복무 제대군인은 최대 3년 연령 연장"
  ],
  "howTo": [
   "청년몽땅정보통 고립·은둔청년 지원 페이지에서 온라인 신청",
   "문의: 서울청년기지개센터 02-6953-2520"
  ],
  "url": "https://youth.seoul.go.kr/youthConts.do?key=2310100062&sc_pbancSeCd=008&sc_bbsStngSn=2212200001&sc_bbsCtgrySn=2310200007&sc_qnaCtgryCd=&sc_faqCtgryCd=013",
  "source": "https://youth.seoul.go.kr/youthConts.do?key=2310100062&sc_pbancSeCd=008&sc_bbsStngSn=2212200001&sc_bbsCtgrySn=2310200007&sc_qnaCtgryCd=&sc_faqCtgryCd=013"
 },
 {
  "id": "seoul-family-caregiver-youth",
  "name": "가족돌봄청년 지원 (전담기구 맞춤 상담·서비스 연계)",
  "org": "서울특별시 복지실 복지정책과 · 서울시복지재단",
  "category": "생활·복지",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "개인별 맞춤 상담, 지원 가능 정책 안내 및 서비스 연계 (2026년 자기돌봄비 모집은 마감)",
  "criteria": [
   {
    "type": "target",
    "label": "가족을 돌보는 청년"
   },
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "age",
    "min": 9,
    "max": 39,
    "label": "9~39세 가족돌봄청소년·청년"
   }
  ],
  "verify": [
   "장애·신체 및 정신 질병이 있는 민법상 가족을 직접 돌보거나(가사·간병) 생계를 책임지고 있음",
   "서울시에 주민등록"
  ],
  "howTo": [
   "상담 신청서(URL) 작성 후 전자우편(careyouth@welfare.seoul.kr) 제출",
   "상담 진행 → 맞춤형 서비스 연계 (문의 02-6353-0336~9)"
  ],
  "url": "https://youth.seoul.go.kr/youthConts.do?key=2310100065&sc_pbancSeCd=103&sc_bbsStngSn=0&sc_bbsCtgrySn=0&sc_qnaCtgryCd=001&sc_faqCtgryCd=016",
  "source": "https://youth.seoul.go.kr/youthConts.do?key=2310100065&sc_pbancSeCd=103&sc_bbsStngSn=0&sc_bbsCtgrySn=0&sc_qnaCtgryCd=001&sc_faqCtgryCd=016"
 },
 {
  "id": "seoul-wounded-veteran-youth-center",
  "name": "청년부상제대군인 상담센터",
  "org": "서울특별시 복지실 복지정책과",
  "category": "생활·복지",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "법률상담·보훈대상자 등록 지원, 행정심판·소송 지원, 1:1 심리상담(10회기)·자조모임, 취·창업 연계",
  "criteria": [
   {
    "type": "target",
    "label": "군 복무 중 부상으로 제대한 청년"
   },
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "age",
    "min": 19,
    "max": 39
   }
  ],
  "verify": [
   "군 복무 중 부상을 입고 제대한 청년(또는 그 직계가족)"
  ],
  "howTo": [
   "전화(02-6354-2030) 또는 상담 신청서 URL로 신청",
   "필요 서류(주민등록초본, 진료기록 등) 제출 → 맞춤형 서비스 지원",
   "방문: 서울시청 지하 1층 시민청 (평일 9~18시)"
  ],
  "url": "https://youth.seoul.go.kr/youthConts.do?key=2310100066&sc_pbancSeCd=300&sc_bbsStngSn=2310160001&sc_bbsCtgrySn=0&sc_qnaCtgryCd=&sc_faqCtgryCd=",
  "source": "https://youth.seoul.go.kr/youthConts.do?key=2310100066&sc_pbancSeCd=300&sc_bbsStngSn=2310160001&sc_bbsCtgrySn=0&sc_qnaCtgryCd=&sc_faqCtgryCd="
 },
 {
  "id": "seoul-youth-center",
  "name": "서울청년센터 (청년정책 종합상담·취업지원)",
  "org": "서울특별시 미래청년기획관 청년사업담당관",
  "category": "일자리",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "청년지원매니저 1:1 정책 상담, 직무탐색·교육·일경험·일자리 매칭, 생활권 청년공간 이용 (서울 17개소)",
  "criteria": [
   {
    "type": "age",
    "min": 19,
    "max": 39
   }
  ],
  "verify": [
   "센터별 프로그램은 개별 모집 공고·자격 확인"
  ],
  "howTo": [
   "청년정책 종합상담 온라인 신청 또는 가까운 서울청년센터 방문"
  ],
  "url": "https://youth.seoul.go.kr/content.do?key=2310200003",
  "source": "https://youth.seoul.go.kr/infoData/plcyInfo/view.do?plcyBizId=20261021005400214220&tabKind=002"
 },
 {
  "id": "seoul-sesac",
  "name": "청년취업사관학교 (SeSAC)",
  "org": "서울특별시 미래청년기획관 청년정책담당관 · 서울경제진흥원",
  "category": "교육",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "AI·디지털 직무 교육(3~6개월) + 취·창업 지원",
  "criteria": [
   {
    "type": "age",
    "min": 15,
    "max": 39
   }
  ],
  "verify": [
   "과정·캠퍼스별 모집기간이 따로 있음 (2026.11월 현재 다수 과정 11.24~12.1 마감 모집 중)",
   "과정별 지원자격(거주·취업상태 등)·수강료는 각 과정 공고 확인",
   "자기소개서 제출 → 레벨테스트·면접 선발"
  ],
  "howTo": [
   "SeSAC 홈페이지에서 모집중 과정 선택",
   "자기소개서 제출 후 수강신청 → 레벨테스트·면접"
  ],
  "url": "https://sesac.seoul.kr/sesac/course/offline/courseList.do",
  "source": "https://youth.seoul.go.kr/infoData/plcyInfo/view.do?plcyBizId=20261018005400213990&tabKind=002"
 },
 {
  "id": "seoul-interview-suit-rental",
  "name": "취업날개 (면접정장 무료대여)",
  "org": "서울특별시 미래청년기획관 청년정책담당관",
  "category": "일자리",
  "region": "서울",
  "applyStart": "2026-01-01",
  "applyEnd": "2026-12-31",
  "always": false,
  "benefit": "면접정장·넥타이·벨트·구두 무료 대여 (1회 3박4일, 연 최대 10회)",
  "criteria": [
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "age",
    "min": 18,
    "max": 39,
    "label": "고교 졸업예정자~만 39세"
   },
   {
    "type": "status",
    "in": [
     "구직 중"
    ],
    "label": "면접 예정 구직자"
   }
  ],
  "verify": [
   "제대군인은 복무기간에 따라 최대 3년 연령 연장",
   "체험형 인턴·AI면접·영상면접 준비도 대상"
  ],
  "howTo": [
   "서울시 통합회원 가입",
   "서울일자리포털 '취업날개' 메뉴에서 업체·날짜·시간 예약",
   "첫 이용은 방문(치수 측정), 두 번째부터 온라인 신청·택배 수령 가능"
  ],
  "url": "https://job.seoul.go.kr",
  "source": "https://news.seoul.go.kr/economy/archives/571529"
 },
 {
  "id": "seoul-ai-interview",
  "name": "AI면접체험·역량검사",
  "org": "서울특별시",
  "category": "일자리",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "AI면접체험·역량검사 무료 체험 + 개인별 결과분석 컨설팅",
  "criteria": [
   {
    "type": "age",
    "min": 15,
    "max": 39
   }
  ],
  "verify": [
   "거주요건은 페이지에 명시 없음 (청년 누구나)"
  ],
  "howTo": [
   "seoulyouth.co.kr에서 신청·체험",
   "역량검사 분석 특강·컨설팅도 홈페이지에서 신청"
  ],
  "url": "https://seoulyouth.co.kr",
  "source": "https://youth.seoul.go.kr/content.do?key=2505020001"
 },
 {
  "id": "seoul-youth-hwallyeokso",
  "name": "청년활력소 취업상담 (서울갤러리)",
  "org": "서울특별시 일자리정책과",
  "category": "일자리",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "예약 없이 무료 취업상담, AI면접·자기소개서·면접 컨설팅(컨설팅은 예약제)",
  "criteria": [
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "age",
    "min": 0,
    "max": 39,
    "label": "만 39세 이하"
   },
   {
    "type": "status",
    "in": [
     "구직 중"
    ],
    "label": "취업희망자"
   }
  ],
  "verify": [
   "첫 상담 시 신분증 지참"
  ],
  "howTo": [
   "서울시청 지하 서울갤러리 내 청년활력소 방문 → 번호표 발급 후 상담 (평일 9~18시)",
   "AI면접 컨설팅은 AI 역량검사 체험 후 전화·화상·대면 예약 (문의 1551-1929)"
  ],
  "url": "https://job.seoul.go.kr/hmpg/spct/yuth/yuthPage.do",
  "source": "https://news.seoul.go.kr/economy/archives/572118"
 },
 {
  "id": "seoul-climate-card-youth",
  "name": "기후동행카드 청년할인",
  "org": "서울특별시 교통정책과",
  "category": "교통",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "기후동행카드 일반권 대비 7천원 할인된 청년권",
  "criteria": [
   {
    "type": "age",
    "min": 19,
    "max": 39
   }
  ],
  "verify": [
   "청년 인증 절차·연령 연장(제대군인 등) 세부는 티머니 안내 확인"
  ],
  "howTo": [
   "티머니카드&페이 웹사이트에서 청년 인증",
   "청년할인권 충전 후 사용"
  ],
  "url": "https://pay.tmoney.co.kr/ncs/pct/cardrgt/ReadClmtAcmpCardYthDscd.dev",
  "source": "https://youth.seoul.go.kr/infoData/plcyInfo/view.do?plcyBizId=20261019005400214005&tabKind=002"
 },
 {
  "id": "seoul-the-beautiful-wedding",
  "name": "더 아름다운 결혼식 (서울시 공공예식장)",
  "org": "서울특별시 여성가족실 가족담당관 · 서울시여성가족재단",
  "category": "생활·복지",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "서울시 공공예식장 상담~예식 종합 지원, 신랑 또는 신부가 서울 거주 시 비품비 100만원",
  "criteria": [
   {
    "type": "target",
    "label": "결혼 예정자"
   }
  ],
  "verify": [
   "서울 거주자 또는 생활권자, 또는 예비부부 부모 중 1인이 서울시민",
   "비품비 100만원은 신랑 또는 신부가 서울 거주자인 경우만",
   "연령·소득 기준은 공고에 명시 없음"
  ],
  "howTo": [
   "더 아름다운 결혼식 누리집 온라인 신청 또는 상담(1899-2154)",
   "시 상담사 사전상담 → 협력업체 본상담·계약 → 예식 진행"
  ],
  "url": "https://wedding.seoulwomen.or.kr/",
  "source": "https://news.seoul.go.kr/welfare/archives/577079"
 },
 {
  "id": "seoul-youth-arts-hall",
  "name": "청년예술청 (청년예술인 공간·대관)",
  "org": "서울특별시 문화본부 문화예술과 · 서울문화재단",
  "category": "문화",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "청년예술인 공유오피스 무료 이용, 공연장·갤러리·연습실·미디어실 대관(사전예약)",
  "criteria": [
   {
    "type": "target",
    "label": "청년 예술인"
   },
   {
    "type": "age",
    "min": 19,
    "max": 39
   }
  ],
  "verify": [
   "청년예술인 대상 (39세 이하 청년예술인 중심)",
   "창업지원·커뮤니티 프로그램은 별도 공모"
  ],
  "howTo": [
   "공유오피스는 예약 없이 방문(화~일 13~22시)",
   "대관은 청년예술청 홈페이지에서 사전예약"
  ],
  "url": "https://youth.seoul.go.kr/content.do?key=2310200024",
  "source": "https://youth.seoul.go.kr/content.do?key=2310200024"
 },
 {
  "id": "seoul-youth-social-dining",
  "name": "청년1인가구 소셜다이닝 '건강한 밥상'",
  "org": "서울특별시 복지실 돌봄고독정책관 1인가구지원과",
  "category": "생활·복지",
  "region": "서울",
  "applyStart": "2026-03-01",
  "applyEnd": "2026-11-30",
  "always": false,
  "benefit": "요리교실·소통 프로그램 참여 (식재료비 등 필수경비 지원)",
  "criteria": [
   {
    "type": "target",
    "label": "청년 1인 가구"
   },
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "age",
    "min": 19,
    "max": 39
   }
  ],
  "verify": [
   "청년 1인가구 대상",
   "자치구별 회차·잔여 모집 상이, 자치구에서 선정 후 안내"
  ],
  "howTo": [
   "씽글벙글 서울(서울 1인가구 포털) 접수가능 참여프로그램에서 온라인 신청",
   "자치구 선정 후 개별 안내"
  ],
  "url": "https://1in.seoul.go.kr/front/partcptn/partcptnListPage.do",
  "source": "https://youth.seoul.go.kr/infoData/plcyInfo/view.do?plcyBizId=20261023005400214282&tabKind=002"
 },
 {
  "id": "seoul-youth-civic-supporters-winter",
  "name": "서울시 청년 시정 서포터즈 (겨울, 구 시정체험 아르바이트)",
  "org": "서울특별시",
  "category": "일자리",
  "region": "서울",
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "benefit": "서울시 부서에서 약 4주 근무, 서울형 생활임금 기준 일급 지급 (2026년 겨울 기수: 일 60,605원)",
  "criteria": [
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "age",
    "min": 19,
    "max": 29,
    "label": "일반선발 기준"
   }
  ],
  "verify": [
   "2026년 기준 공고 확인 — 다음(2027년 겨울) 기수 공고는 아직 확인 안 됨 (전년도는 2025.12.15~12.19 접수)",
   "특별선발: 서울 거주 대학 재학·휴학생 중 수급자·차상위·장애인·북한이탈주민·다문화·다자녀·보훈대상자",
   "전산 추첨 선발"
  ],
  "howTo": [
   "서울시 누리집 공고 확인 후 접수기간 내 온라인 신청",
   "직무 유형(특화/일반) 1개 선택 → 전산 추첨 → 서류 제출"
  ],
  "url": "https://news.seoul.go.kr/gov/archives/573311",
  "source": "https://news.seoul.go.kr/gov/archives/573311"
 },
 {
  "id": "unemployment-benefit",
  "name": "실업급여 (구직급여)",
  "org": "고용노동부",
  "category": "일자리",
  "region": "전국",
  "applyStart": null,
  "applyEnd": null,
  "always": true,
  "benefit": "비자발적으로 퇴사한 뒤 재취업 활동 기간에 구직급여 지급",
  "criteria": [
   {
    "type": "status",
    "in": [
     "비자발 퇴사"
    ],
    "label": "권고사직·계약만료 등 비자발적 퇴사"
   }
  ],
  "verify": [
   "퇴사 전 18개월 동안 고용보험 가입 기간(피보험 단위기간) 180일 이상",
   "퇴사 다음 날부터 12개월 안에 신청",
   "자발적 퇴사도 임금체불·통근 곤란 등 정당한 사유가 있으면 인정될 수 있어요"
  ],
  "howTo": [
   "고용24에서 구직 등록",
   "수급자격 신청자 온라인 교육 수강",
   "거주지 관할 고용센터에 수급자격 인정 신청 (상담 1350)"
  ],
  "url": "https://www.work24.go.kr",
  "source": "https://www.work24.go.kr"
 },
 {
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "waiting": true,
  "id": "seoul-hope-double-account",
  "name": "희망두배 청년통장",
  "org": "서울특별시",
  "category": "예적금",
  "region": "서울",
  "benefit": "저축한 금액만큼 서울시가 더해 주는 청년 자산형성 통장",
  "criteria": [
   {
    "type": "region",
    "sido": "서울"
   }
  ],
  "verify": [
   "2026년 모집(5~6월)은 마감됐어요. 다음 모집은 2027년 공고 확인",
   "나이·소득·근로 조건은 다음 모집 공고에서 확인"
  ],
  "howTo": [
   "서울시복지재단 공고 확인",
   "모집 기간에 온라인 신청"
  ],
  "url": "https://youth.seoul.go.kr",
  "source": "https://youth.seoul.go.kr"
 },
 {
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "waiting": true,
  "id": "youth-tomorrow-savings-account",
  "name": "청년내일저축계좌",
  "org": "보건복지부",
  "category": "예적금",
  "region": "전국",
  "benefit": "일하는 저소득 청년이 저축하면 정부지원금을 더해 주는 통장",
  "criteria": [],
  "verify": [
   "2026년 모집(5/4~5/20)은 마감됐어요. 다음 모집은 2027년 공고 확인",
   "근로·사업소득이 있는 청년, 가구 소득·재산 기준은 다음 공고 확인"
  ],
  "howTo": [
   "복지로 공고 확인",
   "모집 기간에 복지로 또는 주민센터에서 신청"
  ],
  "url": "https://www.bokjiro.go.kr",
  "source": "https://www.bokjiro.go.kr"
 },
 {
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "waiting": true,
  "id": "youth-monthly-rent-support",
  "name": "청년월세 지원 (국토교통부)",
  "org": "국토교통부 · 지자체",
  "category": "주거",
  "region": "전국",
  "benefit": "부모님과 따로 사는 무주택 청년의 월세 지원",
  "criteria": [
   {
    "type": "age",
    "min": 19,
    "max": 34
   },
   {
    "type": "noHouse"
   },
   {
    "type": "housingIn",
    "in": [
     "월세"
    ],
    "label": "월세 거주"
   }
  ],
  "verify": [
   "2026년 접수(3/30~5/29)는 마감됐어요. 매년 모집이라 다음 접수는 2027년",
   "부모님과 따로 사는지, 청년 가구·원가구 소득·재산 기준은 공고 확인"
  ],
  "howTo": [
   "복지로 또는 주민센터에서 신청"
  ],
  "url": "https://www.bokjiro.go.kr",
  "source": "https://www.bokjiro.go.kr"
 },
 {
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "waiting": true,
  "id": "seoul-youth-monthly-rent",
  "name": "서울시 청년월세지원",
  "org": "서울특별시",
  "category": "주거",
  "region": "서울",
  "benefit": "서울 거주 무주택 청년의 월세 지원",
  "criteria": [
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "noHouse"
   },
   {
    "type": "housingIn",
    "in": [
     "월세"
    ],
    "label": "월세 거주"
   }
  ],
  "verify": [
   "2026년 접수(5/6~5/19)는 마감됐어요. 다음 모집은 2027년 공고 확인",
   "나이·소득 기준은 다음 공고 확인"
  ],
  "howTo": [
   "청년몽땅정보통에서 신청"
  ],
  "url": "https://youth.seoul.go.kr",
  "source": "https://youth.seoul.go.kr"
 },
 {
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "waiting": true,
  "id": "seoul-youth-moving-fee",
  "name": "서울시 청년 이사비·중개보수 지원",
  "org": "서울특별시",
  "category": "주거",
  "region": "서울",
  "benefit": "이사한 서울 청년의 이사비·부동산 중개보수 지원",
  "criteria": [
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "noHouse"
   }
  ],
  "verify": [
   "2026년 상반기(4월)·하반기(8/18~8/31) 접수 모두 마감됐어요. 다음 모집은 2027년 공고 확인",
   "나이·소득·이사 시기 조건은 다음 공고 확인"
  ],
  "howTo": [
   "청년몽땅정보통에서 신청"
  ],
  "url": "https://youth.seoul.go.kr",
  "source": "https://youth.seoul.go.kr"
 },
 {
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "waiting": true,
  "id": "seoul-youth-allowance",
  "name": "서울시 청년수당",
  "org": "서울특별시",
  "category": "일자리",
  "region": "서울",
  "benefit": "구직 활동 중인 서울 청년에게 활동지원금 지급",
  "criteria": [
   {
    "type": "region",
    "sido": "서울"
   },
   {
    "type": "status",
    "in": [
     "비자발 퇴사",
     "구직 중"
    ],
    "label": "미취업·구직 중"
   }
  ],
  "verify": [
   "2026년 접수(5/27~5/29)는 마감됐어요. 다음 모집은 2027년 공고 확인",
   "나이·소득·졸업 여부 기준은 다음 공고 확인"
  ],
  "howTo": [
   "청년몽땅정보통에서 신청"
  ],
  "url": "https://youth.seoul.go.kr",
  "source": "https://youth.seoul.go.kr"
 },
 {
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "waiting": true,
  "id": "seoul-youth-mind-health",
  "name": "서울 청년 마음건강 지원",
  "org": "서울특별시",
  "category": "건강·마음",
  "region": "서울",
  "benefit": "서울 청년 심리상담 지원",
  "criteria": [
   {
    "type": "region",
    "sido": "서울"
   }
  ],
  "verify": [
   "2026년 마지막 모집(4차, 9/10~9/15)은 마감됐어요. 다음 모집은 2027년 공고 확인"
  ],
  "howTo": [
   "청년몽땅정보통에서 신청"
  ],
  "url": "https://youth.seoul.go.kr",
  "source": "https://youth.seoul.go.kr"
 },
 {
  "applyStart": null,
  "applyEnd": null,
  "always": false,
  "waiting": true,
  "id": "youth-culture-arts-pass",
  "name": "청년 문화예술패스",
  "org": "문화체육관광부",
  "category": "문화",
  "region": "전국",
  "benefit": "청년의 공연·전시 관람비 지원",
  "criteria": [],
  "verify": [
   "2026년 신청(2/25~6/30)은 마감됐어요. 다음 모집은 2027년 공고 확인",
   "대상 나이는 다음 공고 확인"
  ],
  "howTo": [
   "다음 모집 공고 확인 후 신청"
  ],
  "url": "https://www.mcst.go.kr",
  "source": "https://www.mcst.go.kr"
 }
];
