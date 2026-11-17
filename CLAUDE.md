# 청년 혜택 찾기 (로컬 버전) — Claude Code 작업 지침

이 프로젝트는 사용자 PC에서만 돌아가요. 서류(PDF·캡처)를 올리거나 연봉·칩을 입력하면 청년 혜택 자격을 판정해 보여줘요.
정부24 자동 로그인·자동화 브라우저 연동은 하지 않아요(정부24가 자동화 접속을 차단하며, 그 차단을 우회하지 않아요).

## 구조
- 정적 페이지: `public/` (index.html, policies.js, parse.mjs, vendor/, data/). GitHub Pages와 로컬(`src/server.mjs`, 파일만 서빙)이 같은 파일을 써요.
- 판정·서류 읽기는 모두 브라우저 안에서: PDF는 pdf.js legacy, 이미지는 tesseract.js(kor) → `public/parse.mjs` 의 `extract()`.
- 정부24 공공서비스: `scripts/build-data.mjs` 가 `src/sync.mjs`(공공데이터포털 serviceList+supportConditions, 키 DATA_GO_KR_KEY)로 전체를 받고
  `src/gov24.mjs` 로 청년 나이·사람 대상만 거른 뒤 지역별(nat, seoul, seoul-gu-NN, gyeonggi, incheon) JSON을 `public/data/` 에 만들어요.
  정부24 항목은 코드가 맞아도 '기본 조건 맞음 · 원문 확인'으로만 표시해요(코드가 거칠어서 '조건 충족'으로 단정하지 않음).
- 배포: `.github/workflows/pages.yml` 이 push·매주 월요일에 데이터를 새로 만들어 GitHub Pages로 올려요. 키는 Secrets에만.

## 사용자가 “정책 목록 갱신해줘”라고 하면
1. `date` 로 오늘 날짜를 확인하고, 아래 출처를 웹 검색·페이지 열기로 **직접 확인**해서 접수 중이거나 14일 안에 시작하는 청년 정책을 모아요.
2. `public/policies.js` 를 고쳐요(전국·서울시만. 자치구 사업은 화면에서 구를 고를 때 따로 찾아요). 자동 비교 가능한 조건은 `criteria`(age, region, status, noHouse, housingIn, incomeMax, eitc, target — 특정 대상 전용 사업은 `{type:"target",label:"대상"}`),
   나머지는 `verify` 문장으로. 신청 기간을 모르면 `applyStart/applyEnd` 를 null 로 두고 지어내지 않아요.
3. 마감됐지만 매년 열리는 대표 사업(청년월세·희망두배 청년통장·청년수당 등)은 지우지 말고 `waiting: true`(다음 모집 대기)로 두고, 새 공고가 나오면 날짜를 채워 `waiting`을 빼요. 실업급여처럼 청년 전용이 아니어도 청년이 많이 찾는 사업은 넣어요. 그 밖에 마감된 정책은 화면이 자동으로 숨기지만, 오래된 건 지워요. `POLICIES_CHECKED` 날짜를 갱신해요.
4. `url` 은 기관 첫 화면보다 공고 상세나 신청 페이지 주소를 우선해요. 블로그·뉴스는 단서로만 쓰고 기준은 공식 공고예요.

## 확인할 출처
- 통합: 온통청년 youthcenter.go.kr, 정부24 혜택알리미 plus.gov.kr, 복지로 bokjiro.go.kr, 보조금24(공공서비스 정보 API, data.go.kr)
- 서울: 청년몽땅정보통 youth.seoul.go.kr, 서울주거포털 housing.seoul.go.kr, 서울시 고시공고, 사용자 자치구 홈페이지 고시공고
- 경기: 경기청년포털 youth.gg.go.kr, 잡아바 apply.jobaba.net (경기 거주자일 때)
- 주거: SH 인터넷청약 i-sh.co.kr, LH청약플러스 apply.lh.or.kr, 마이홈 myhome.go.kr
- 금융: 금융위원회 fsc.go.kr, 서민금융진흥원 kinfa.or.kr
- 세금: 국세청 홈택스 hometax.go.kr (근로·자녀장려금 정기·반기·기한 후 신청)
- 고용: 고용24 work24.go.kr (실업급여, 국민취업지원제도)
- 교육·교통: 한국장학재단 kosaf.go.kr, K-패스 korea-pass.kr

## 개인정보 규칙
- `data/` 는 git에 올리지 않아요(.gitignore). 사용자가 원하면 작업 후 `data/raw/` 를 지워요.
- 주민등록번호 뒷자리, 계좌번호는 출력·저장하지 않아요(수집 단계에서 이미 가림).
- 로그인 정보나 비밀번호를 묻거나 저장하지 않아요. 인증은 항상 사용자가 폰에서 승인해요.
- 이 도구는 본인 PC·본인 계정 용도예요. 다른 사람의 인증을 대신 처리하는 서버로 바꾸지 않아요.
