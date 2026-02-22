/* =========================
   DATA
========================= */

// 서비스 링크 12개
const serviceLinks = [
  { label: "2027년판 정오표", url: "https://license.youngjin.com/artyboard/mboard.asp?strBoardID=Errata_l&intPage=1" },
  { label: "정오표 이벤트", url: "https://license.youngjin.com/artyboard/Mboard.asp?Action=view&strBoardID=notice&intSeq=130825" },
  { label: "수험서 커뮤니티", url: "https://license.youngjin.com/" },
  { label: "또기적 학습자료집", url: "https://cafe.naver.com/f-e/cafes/19039057/menus/384?viewType=I" },
  { label: "1:1 독자문의", url: "https://cafe.naver.com/f-e/cafes/19039057/menus/349" },
  { label: "스터디 카페", url: "https://cafe.naver.com/yjbooks" },
  { label: "무료 동영상 강의", url: "https://youtube.com/playlist?list=PL6i7rGeEmTvrn8f0iwt7Ki9INiog4Dmfs&si=bIEptPgF6qTZam3P" },
  { label: "이기적 유튜브 채널", url: "https://youtube.com/@ydot0789?si=ajRMl0nWWeUiruoN" },
  { label: "기출 복원 이벤트", url: "https://license.youngjin.com/artyboard/mboard.asp?Action=view&strBoardID=event&intPage=1&intCategory=0&strSearchCategory=|s_name|s_subject|&strSearchWord=&intSeq=115423" },
  { label: "도서 구매하기", url: "https://shop.youngjin.com/goods/view?no=1184" },
  { label: "시행처 바로가기", url: "https://license.korcham.net/co/examguide.do?mm=34&cd=0202" },
  { label: "감수자&베타테스터", url: "https://cafe.naver.com/yjbooks/47482" },
];

// 오늘의 개념 한 줄 10개
const concepts = [
  "화장품은 인체 청결·미화 및 피부·모발 건강 유지를 목적으로 하며 작용이 경미해야 한다.",
  "맞춤형화장품 조제관리사는 자격 취소 시 3년 동안 재응시가 불가능한 엄격한 전문가 자격이다.",
  "UVA는 사계절 내내 피부 깊숙이 침투하여 주름과 탄력 저하(광노화)를 유발한다.",
  "천연보습인자(NMF)는 각질층에서 수분을 끌어당겨 피부의 촉촉함을 유지하는 핵심 성분이다.",
  "CGMP 4대 기준서는 제품표준서, 제조관리, 품질관리, 제조위생관리기준서로 구성된다.",
  "민감정보는 유전정보, 범죄경력 등 정보주체의 사생활을 현저히 침해할 수 있는 정보다.",
  "물리적 자외선 차단제는 빛을 반사시키는 원리로 징크옥사이드 등이 대표적이다.",
  "미생물 안전을 위해 영유아용 및 눈 화장용 제품은 일반 제품보다 2배 더 엄격한 기준을 적용받는다.",
  "선입선출(FIFO)은 재고의 노후화를 방지하기 위해 먼저 들어온 원료를 먼저 사용하는 원칙이다.",
  "위해성 '가' 등급은 금지 원료 사용 등 국민 건강에 즉각적이고 중대한 위해가 우려될 때 부여된다."
];

// 퀴즈: OX 10문제
const quizOX = [
  { q: "화장품은 인체에 대한 작용이 강력하여 질병의 치료를 목적으로 한다.", a: "X", exp: "화장품은 인체에 대한 작용이 경미해야 하며, 의약품과 의약외품은 제외됩니다." },
  { q: "맞춤형화장품 조제관리사 자격이 취소된 자는 취소일로부터 1년이 지나면 다시 자격을 취득할 수 있다.", a: "X", exp: "자격 취소 후 다시 자격을 취득하려면 3년이 경과해야 합니다." },
  { q: "천연화장품은 천연 원료 및 천연 유래 원료의 함량이 전체의 95% 이상이어야 한다.", a: "O", exp: "해설: (제공 없음)" },
  { q: "표피의 과립층은 빛을 산란시켜 자외선을 흡수하는 역할을 한다.", a: "O", exp: "해설: (제공 없음)" },
  { q: "영유아용 화장품의 미생물 허용한도(총호기성생균수)는 1,000개/g 이하이다.", a: "X", exp: "영유아 및 눈 화장용 제품은 500개/g 이하로 더 엄격합니다." },
  { q: "에탄올은 청정·살균 및 수렴 효과가 있어 가용화제 등으로 사용된다.", a: "O", exp: "해설: (제공 없음)" },
  { q: "기밀용기는 기체나 미생물의 침입을 방지하는 용기이다.", a: "X", exp: "기체나 미생물 침입을 방지하는 것은 밀봉용기입니다." },
  { q: "UVA는 장파장 자외선으로 피부의 광노화를 일으키는 주요 원인이다.", a: "O", exp: "해설: (제공 없음)" },
  { q: "아데노신은 피부의 미백에 도움을 주는 기능성 고시 성분이다.", a: "X", exp: "아데노신은 주름 개선에 도움을 주는 성분입니다." },
  { q: "선한선출(FEFO) 방식은 유효기간이 가까운 것부터 먼저 사용하는 재고관리 원칙이다.", a: "O", exp: "해설: (제공 없음)" },
];

// 퀴즈: 빈칸 10문제 (정답 여러 개 가능)
const quizBlank = [
  { q: "맞춤형화장품판매업은 제조·수입된 화장품 내용물에 다른 내용물이나 원료를 (_____)하거나 내용물을 (_____)하여 판매하는 영업이다.", answers: ["혼합", "소분"], exp: "정답: 혼합, 소분" },
  { q: "주민등록번호, 여권번호 등 개인을 구별하기 위해 부여된 정보를 (__________)정보라고 한다.", answers: ["고유식별"], exp: "정답: 고유식별" },
  { q: "표피의 각질층은 (__________)(NMF)를 통해 10~20%의 수분을 함유한다.", answers: ["천연보습인자"], exp: "정답: 천연보습인자" },
  { q: "진피 내에서 콜라겐과 엘라스틴을 생산하는 세포는 (__________)이다.", answers: ["섬유아세포"], exp: "정답: 섬유아세포" },
  { q: "맞춤형화장품 판매 시 원료의 제조번호와 혼합 기록을 추적할 수 있도록 부여한 번호를 (________)라고 한다.", answers: ["식별번호"], exp: "정답: 식별번호" },
  { q: "사생활을 현저히 침해할 우려가 있는 건강, 성생활, 사상 등에 관한 정보를 (_____)정보라고 한다.", answers: ["민감"], exp: "정답: 민감" },
  { q: "물리적 자외선 차단 성분인 징크옥사이드와 티타늄디옥사이드의 최대 배합 한도는 각각 (_____)%이다.", answers: ["25"], exp: "정답: 25" },
  { q: "액상 화장품의 안전관리 기준상 pH 범위는 (_____)이다.", answers: ["3.0~9.0"], exp: "정답: 3.0~9.0" },
  { q: "화장품책임판매업자는 안전성 정보를 알게 된 날부터 (_____)일 이내에 식약처장에게 신속보고해야 한다.", answers: ["15"], exp: "정답: 15" },
  { q: "보관 온도 기준 중 (_____)온도는 20℃를 의미한다.", answers: ["표준"], exp: "정답: 표준" },
];

// 퀴즈: 합답형 10문제 (ㄱ~ㅁ 5개 항목 선택)
const quizMulti = [
  {
    q: "화장품법 및 정의: 다음 중 옳은 설명을 모두 고르시오.",
    items: {
      "ㄱ": "화장품은 인체 미화 및 청결을 목적으로 한다.",
      "ㄴ": "의약외품은 화장품의 범위에 포함된다.",
      "ㄷ": "기능성화장품은 11가지 범위가 있다.",
      "ㄹ": "천연화장품의 천연 함량 기준은 95% 이상이다.",
      "ㅁ": "액체비누는 화장품의 유형 중 목욕용 제품에 해당한다."
    },
    correct: ["ㄱ","ㄷ","ㄹ"],
    exp: "해설: ㄴ-의약외품 제외, ㅁ-액체비누는 세정용"
  },
  {
    q: "조제관리사 결격사유: 다음 중 옳은 설명을 모두 고르시오.",
    items: {
      "ㄱ": "정신질환자(전문의 인정 시 제외)",
      "ㄴ": "마약류 중독자",
      "ㄷ": "피성년후견인",
      "ㄹ": "금고 이상의 형을 선고받고 집행 중인 자",
      "ㅁ": "자격 취소 후 2년이 경과한 자"
    },
    correct: ["ㄱ","ㄴ","ㄷ","ㄹ"],
    exp: "해설: ㅁ-3년이 경과해야 함"
  },
  {
    q: "계면활성제의 특징: 다음 중 옳은 설명을 모두 고르시오.",
    items: {
      "ㄱ": "음이온성 - 세정력이 가장 우수함",
      "ㄴ": "양이온성 - 살균 및 소독 작용",
      "ㄷ": "비이온성 - 기초 화장품에 주로 사용",
      "ㄹ": "자극성 순서 - 비이온성 > 양쪽성 > 음이온성 > 양이온성",
      "ㅁ": "양쪽성 - 저자극으로 베이비용에 사용"
    },
    correct: ["ㄱ","ㄴ","ㄷ","ㅁ"],
    exp: "해설: ㄹ-자극성은 양이온성이 가장 높음"
  },
  {
    q: "표피의 층별 특징: 다음 중 옳은 설명을 모두 고르시오.",
    items: {
      "ㄱ": "각질층 - 약산성(pH 4.5~5.5) 유지",
      "ㄴ": "투명층 - 엘라이딘 성분 함유",
      "ㄷ": "과립층 - 각화 과정이 시작됨",
      "ㄹ": "유극층 - 표피에서 가장 얇은 층",
      "ㅁ": "기저층 - 멜라닌 형성 세포 존재"
    },
    correct: ["ㄱ","ㄴ","ㄷ","ㅁ"],
    exp: "해설: ㄹ-유극층은 가장 두꺼운 층임"
  },
  {
    q: "기능성 고시 성분 한도: 다음 중 옳은 설명을 모두 고르시오.",
    items: {
      "ㄱ": "에틸헥실메톡시신나메이트 - 7.5%",
      "ㄴ": "살리실릭애시드 - 0.5%",
      "ㄷ": "아데노신 - 0.04%",
      "ㄹ": "나이아신아마이드 - 2.0~5.0%",
      "ㅁ": "페녹시에탄올(보존제) - 5.0%"
    },
    correct: ["ㄱ","ㄴ","ㄷ","ㄹ"],
    exp: "해설: ㅁ-페녹시에탄올은 1.0%"
  },
  {
    q: "유통화장품 안전관리(미생물 및 함량): 다음 중 옳은 설명을 모두 고르시오.",
    items: {
      "ㄱ": "대장균 - 모든 화장품에서 불검출",
      "ㄴ": "녹농균 - 모든 화장품에서 불검출",
      "ㄷ": "황색포도상구균 - 모든 화장품에서 불검출",
      "ㄹ": "기타 화장품 총호기성생균수 - 1,000개/g 이하",
      "ㅁ": "내용량 기준 - 제품 3개 평균이 표기량의 90% 이상"
    },
    correct: ["ㄱ","ㄴ","ㄷ","ㄹ"],
    exp: "해설: ㅁ-내용량 기준은 97% 이상"
  },
  {
    q: "위해성 등급 분류: 다음 중 옳은 설명을 모두 고르시오.",
    items: {
      "ㄱ": "'가' 등급 - 사용할 수 없는 원료를 사용한 경우",
      "ㄴ": "'나' 등급 - 안전용기 포장 위반",
      "ㄷ": "'다' 등급 - 이물이 혼입된 경우",
      "ㄹ": "'가' 등급 - 유통기한을 위조한 경우",
      "ㅁ": "'다' 등급 - 기능성 주성분 함량 부적합"
    },
    correct: ["ㄱ","ㄴ","ㄷ","ㅁ"],
    exp: "해설: ㄹ-유통기한 위조는 '다' 등급"
  },
  {
    q: "맞춤형화장품 1차 포장 기재사항: 다음 중 옳은 설명을 모두 고르시오.",
    items: {
      "ㄱ": "화장품의 명칭",
      "ㄴ": "맞춤형화장품판매업자의 상호",
      "ㄷ": "식별번호(제조번호)",
      "ㄹ": "사용기한",
      "ㅁ": "전성분 표시"
    },
    correct: ["ㄱ","ㄴ","ㄷ","ㄹ"],
    exp: "해설: ㅁ-전성분은 1차 필수항목 아님"
  },
  {
    q: "플라스틱 포장재의 특성: 다음 중 옳은 설명을 모두 고르시오.",
    items: {
      "ㄱ": "LDPE - 유연성 및 광택성 우수",
      "ㄴ": "PP - 내약품성 및 내충격성 우수",
      "ㄷ": "PS - 투명하고 딱딱함",
      "ㄹ": "PET - 투명성 및 내약품성 우수",
      "ㅁ": "PVC - 환경 문제로 천연·유기농 화장품 용기 사용 금지"
    },
    correct: ["ㄱ","ㄴ","ㄷ","ㄹ","ㅁ"],
    exp: "해설: 모두 옳은 설명임"
  },
  {
    q: "온도 및 수온 기준: 다음 중 옳은 설명을 모두 고르시오.",
    items: {
      "ㄱ": "냉소 - 15℃ 이하",
      "ㄴ": "상온 - 15~25℃",
      "ㄷ": "실온 - 1~30℃",
      "ㄹ": "표준온도 - 20℃",
      "ㅁ": "온탕 - 40~50℃"
    },
    correct: ["ㄱ","ㄴ","ㄷ","ㄹ"],
    exp: "해설: ㅁ-온탕은 60~70℃"
  },
];

// 퀴즈: 연결형 10문제 (3쌍 연결)
const quizLink = [
  { q: "영업의 종류", left:["A) 제조업","B) 책임판매업","C) 맞춤형판매업"], right:["1) 혼합·소분","2) 직접·위탁 제조","3) 수입 화장품 유통"], ans:{A:"2",B:"3",C:"1"}, exp:"정답: A-2, B-3, C-1" },
  { q: "표피 세포", left:["A) 멜라닌형성세포","B) 랑게르한스세포","C) 머켈세포"], right:["1) 면역 기능","2) 촉각 감지","3) 피부색 결정"], ans:{A:"3",B:"1",C:"2"}, exp:"정답: A-3, B-1, C-2" },
  { q: "자외선 영향", left:["A) UVA","B) UVB","C) UVC"], right:["1) 살균·피부암","2) 광노화","3) 홍반·일광화상"], ans:{A:"2",B:"3",C:"1"}, exp:"정답: A-2, B-3, C-1" },
  { q: "계면활성제", left:["A) 음이온성","B) 양이온성","C) 비이온성"], right:["1) 살균 작용","2) 세정 작용 우수","3) 기초 화장품 사용"], ans:{A:"2",B:"1",C:"3"}, exp:"정답: A-2, B-1, C-3" },
  { q: "기능성 고시 성분", left:["A) 알부틴","B) 아데노신","C) 살리실릭애시드"], right:["1) 주름 개선","2) 여드름 완화","3) 미백 도움"], ans:{A:"3",B:"1",C:"2"}, exp:"정답: A-3, B-1, C-2" },
  { q: "포장 용기", left:["A) 밀폐용기","B) 기밀용기","C) 차광용기"], right:["1) 수분·증발 방지","2) 이물 유입 방지","3) 광선 투과 방지"], ans:{A:"2",B:"1",C:"3"}, exp:"정답: A-2, B-1, C-3" },
  { q: "개인정보 분류", left:["A) 고유식별정보","B) 민감정보","C) 개인정보 아님"], right:["1) 사상·신념","2) 주민등록번호","3) 사망자 정보"], ans:{A:"2",B:"1",C:"3"}, exp:"정답: A-2, B-1, C-3" },
  { q: "비의도적 오염물 한도", left:["A) 납","B) 비소","C) 수은"], right:["1) 1㎍/g 이하","2) 10㎍/g 이하","3) 20㎍/g 이하"], ans:{A:"3",B:"2",C:"1"}, exp:"정답: A-3, B-2, C-1" },
  { q: "작업장 위생(소독)", left:["A) 에탄올","B) 크레졸","C) 차아염소산나트륨"], right:["1) 실내 바닥 소독","2) 강한 살균력(락스)","3) 신속한 살균(70%)"], ans:{A:"3",B:"1",C:"2"}, exp:"정답: A-3, B-1, C-2" },
  { q: "재고 관리 원칙", left:["A) 선입선출","B) 선한선출","C) 정기재고조사"], right:["1) 유효기간 우선","2) 입고 순서 우선","3) 신뢰성 확보"], ans:{A:"2",B:"1",C:"3"}, exp:"정답: A-2, B-1, C-3" },
];

// 복습 카드 10선 (Q/A/해설)
const reviewCards = [
  { q:"화장품법에서 정의하는 '화장품'의 핵심 요건 중 인체에 대한 작용의 정도는 어떠해야 하는가?", a:"인체에 대한 작용이 경미해야 한다.", e:"화장품은 청결·미화 및 피부·모발 건강 유지·증진 목적이며 인체에 미치는 영향이 경미한 물품을 의미한다." },
  { q:"맞춤형화장품 조제관리사 자격이 취소된 경우, 다시 자격을 취득하기 위해 경과해야 하는 최소 기간은?", a:"취소된 날부터 3년이다.", e:"자격이 취소된 날부터 3년이 지나지 않은 자는 자격 취득이 제한된다." },
  { q:"주민등록번호, 여권번호, 외국인등록번호와 같이 개인을 구별하기 위해 부여된 식별정보를 무엇이라 하는가?", a:"고유식별정보이다.", e:"개인을 고유하게 구별하기 위해 법령에 따라 부여된 정보(주민번호, 여권번호, 운전면허번호, 외국인등록번호)를 말한다." },
  { q:"계면활성제 중 자극성이 가장 높은 유형부터 낮은 유형순으로 나열하면?", a:"양이온성 > 음이온성 > 양쪽성 > 비이온성", e:"양이온성은 살균·소독 효과가 있으나 자극이 가장 강하고, 비이온성은 자극이 적어 기초 화장품에 널리 사용된다." },
  { q:"물리적 자외선 차단 성분인 '징크옥사이드'와 '티타늄디옥사이드'의 최대 배합 한도는 각각 얼마인가?", a:"각각 25%이다.", e:"물리적 자외선 차단 성분은 성분별로 제품 내 최대 25%까지 배합할 수 있도록 한도가 지정되어 있다." },
  { q:"여드름성 피부를 완화하는 데 도움을 주는 기능성화장품 성분인 '살리실릭애시드'의 함량 기준은?", a:"0.5%이다.", e:"살리실릭애시드 및 그 염류는 여드름 완화 목적으로 사용될 때 0.5%의 함량 기준을 가진다." },
  { q:"영유아용 제품류 및 눈 화장용 제품류의 총호기성생균수 미생물 허용 한도는?", a:"500개/g(mL) 이하이다.", e:"일반 화장품(1,000개/g 이하)보다 더 엄격하게 500개/g 이하 기준을 적용한다." },
  { q:"표피의 층 중에서 빛을 산란시켜 자외선을 흡수하고 수분저지막이 존재하는 층은?", a:"과립층이다.", e:"과립층은 빛을 산란시켜 자외선으로부터 보호하며 수분 증발을 막는 수분저지막이 존재한다." },
  { q:"자외선 중 파장이 가장 길어 피부 깊숙이 침투하며 '광노화'의 주요 원인이 되는 자외선은?", a:"UVA(장파장 자외선)이다.", e:"UVA(320~400nm)는 진피까지 도달해 주름·색소침착 등 광노화를 유발한다." },
  { q:"화장품 관리 온도 기준 중 '냉소'가 의미하는 구체적인 온도는?", a:"15℃ 이하이다.", e:"온도 기준: 실온 1~30℃, 상온 15~25℃, 냉소 15℃ 이하, 표준온도 20℃." },
];

/* =========================
   STATE / UTILS
========================= */

const TOTAL_Q = quizOX.length + quizBlank.length + quizMulti.length + quizLink.length;
const LS = {
  points: "minitto_points",
  attempts: "minitto_attempts",
  correct: "minitto_correct",
  firstDay: "minitto_firstday",
  wrongs: "minitto_wrongs" // array
};

function $(id){ return document.getElementById(id); }
function pad2(n){ return String(n).padStart(2,"0"); }

function safeOpen(url){
  window.open(url, "_blank", "noopener,noreferrer");
}

function show(screenId){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(screenId).classList.add("active");
}

function norm(str){
  return (str||"")
    .toString()
    .trim()
    .replace(/\s+/g,"")
    .toLowerCase();
}

function parseMultiInput(str){
  // "혼합, 소분" / "혼합 소분" / "혼합/소분"
  const raw = (str||"").split(/[,/]|[\s]+/).map(s=>s.trim()).filter(Boolean);
  return raw;
}

/* =========================
   STATUS (progress/days/points)
========================= */

function initStatus(){
  const now = new Date();
  if(!localStorage.getItem(LS.firstDay)){
    localStorage.setItem(LS.firstDay, now.toISOString().slice(0,10));
  }
  if(!localStorage.getItem(LS.points)) localStorage.setItem(LS.points, "0");
  if(!localStorage.getItem(LS.attempts)) localStorage.setItem(LS.attempts, "0");
  if(!localStorage.getItem(LS.correct)) localStorage.setItem(LS.correct, "0");
  if(!localStorage.getItem(LS.wrongs)) localStorage.setItem(LS.wrongs, "[]");
  renderStatus();
}

function daysSince(firstStr){
  const a = new Date(firstStr + "T00:00:00");
  const b = new Date();
  const diff = Math.floor((b - a) / (1000*60*60*24));
  return diff + 1;
}

function renderStatus(){
  const points = Number(localStorage.getItem(LS.points)||"0");
  const attempts = Number(localStorage.getItem(LS.attempts)||"0");
  const progress = Math.min(100, (attempts / TOTAL_Q) * 100);

  $("statusPoints").textContent = String(points).padStart(4,"0") + "p";
  $("statusProgress").textContent = progress.toFixed(2) + "%";

  const fd = localStorage.getItem(LS.firstDay);
  $("statusDays").textContent = String(daysSince(fd)).padStart(2,"0") + "일";
}

function addAttempt(isCorrect){
  localStorage.setItem(LS.attempts, String(Number(localStorage.getItem(LS.attempts)||"0") + 1));
  if(isCorrect){
    localStorage.setItem(LS.correct, String(Number(localStorage.getItem(LS.correct)||"0") + 1));
    localStorage.setItem(LS.points, String(Number(localStorage.getItem(LS.points)||"0") + 10));
  }
  renderStatus();
}

function addWrongNote(payload){
  const arr = JSON.parse(localStorage.getItem(LS.wrongs)||"[]");
  arr.push(payload);
  localStorage.setItem(LS.wrongs, JSON.stringify(arr));
}

/* =========================
   HOME (concept + services)
========================= */

let conceptIndex = 0;
function setRandomConcept(){
  conceptIndex = Math.floor(Math.random()*concepts.length);
  $("todayConcept").textContent = concepts[conceptIndex];
}

function renderServices(){
  const grid = $("serviceGrid");
  grid.innerHTML = "";
  serviceLinks.forEach(it=>{
    const b = document.createElement("button");
    b.className = "slink";
    b.textContent = it.label;
    b.onclick = ()=>safeOpen(it.url);
    grid.appendChild(b);
  });
}

/* =========================
   QUIZ: OX
========================= */
let oxIdx = 0;
function renderOX(){
  const item = quizOX[oxIdx];
  $("oxNo").textContent = pad2(oxIdx+1);
  $("oxQ").textContent = item.q;
  $("oxExp").textContent = "해설: (아직 선택하지 않음)";
  $("oxFeedbackImg").style.display = "none";
  $("oxFeedbackImg").src = "";
}

function answerOX(choice){
  const item = quizOX[oxIdx];
  const correct = (choice === item.a);
  $("oxExp").textContent = (correct ? "정답. " : "오답. 정답은 " + item.a + ". ") + (item.exp || "해설: (제공 없음)");
  showFeedbackImg("oxFeedbackImg", correct);

  addAttempt(correct);
  if(!correct){
    addWrongNote({ type:"OX", q:item.q, a:item.a, e:item.exp||"해설: (제공 없음)" });
  }
}

function showFeedbackImg(imgId, correct){
  const img = $(imgId);
  // 저장소에 업로드한 파일명 기준 (정답.png / 오답.png)
  img.src = correct ? "정답.png" : "오답.png";
  img.style.display = "block";
  img.onerror = ()=>{ img.style.display="none"; };
}

/* =========================
   QUIZ: BLANK
========================= */
let blankIdx = 0;
function renderBlank(){
  const item = quizBlank[blankIdx];
  $("blankNo").textContent = pad2(blankIdx+1);
  $("blankQ").textContent = item.q;
  $("blankInput").value = "";
  $("blankExp").textContent = "해설: (아직 입력하지 않음)";
  $("blankFeedbackImg").style.display = "none";
  $("blankFeedbackImg").src = "";
}

function checkBlank(){
  const item = quizBlank[blankIdx];
  const user = parseMultiInput($("blankInput").value).map(norm);
  const answers = item.answers.map(norm);

  // 정답 개수만큼 포함하면 정답 처리
  const ok = answers.every(a => user.includes(a)) && user.length >= answers.length;

  $("blankExp").textContent = (ok ? "정답. " : "오답. ") + (item.exp || "해설: (제공 없음)");
  showFeedbackImg("blankFeedbackImg", ok);

  addAttempt(ok);
  if(!ok){
    addWrongNote({ type:"빈칸", q:item.q, a:item.answers.join(", "), e:item.exp||"해설: (제공 없음)" });
  }
}

/* =========================
   QUIZ: MULTI (합답형)
========================= */
let multiIdx = 0;
let multiSel = new Set();

function renderMulti(){
  const item = quizMulti[multiIdx];
  $("multiNo").textContent = pad2(multiIdx+1);
  $("multiQ").textContent = item.q;

  multiSel = new Set();
  const box = $("multiItems");
  box.innerHTML = "";

  Object.entries(item.items).forEach(([k,v])=>{
    const row = document.createElement("div");
    row.className = "multi-item";
    row.dataset.key = k;

    row.innerHTML = `<div class="tag">${k}</div><div class="txt">${v}</div>`;
    row.onclick = ()=>{
      const key = row.dataset.key;
      if(multiSel.has(key)){
        multiSel.delete(key);
        row.classList.remove("selected");
      }else{
        multiSel.add(key);
        row.classList.add("selected");
      }
    };
    box.appendChild(row);
  });

  $("multiExp").textContent = "해설: (아직 선택하지 않음)";
  $("multiFeedbackImg").style.display = "none";
  $("multiFeedbackImg").src = "";
}

function resetMulti(){
  renderMulti();
}

function checkMulti(){
  const item = quizMulti[multiIdx];
  const correctSet = new Set(item.correct);
  const ok = (multiSel.size === correctSet.size) && [...multiSel].every(x=>correctSet.has(x));

  const correctStr = item.correct.join(", ");
  $("multiExp").textContent = (ok ? "정답. " : `오답. 정답은 ${correctStr}. `) + (item.exp||"해설: (제공 없음)");
  showFeedbackImg("multiFeedbackImg", ok);

  addAttempt(ok);
  if(!ok){
    addWrongNote({ type:"합답형", q:item.q, a:correctStr, e:item.exp||"해설: (제공 없음)" });
  }
}

/* =========================
   QUIZ: LINK (연결형)
========================= */
let linkIdx = 0;
let linkPickLeft = null;
let linkPairs = {}; // {A:"2", B:"3", C:"1"}

function renderLink(){
  const item = quizLink[linkIdx];
  $("linkNo").textContent = pad2(linkIdx+1);
  $("linkQ").textContent = `${item.q}: 왼쪽과 오른쪽을 연결하시오.`;

  linkPickLeft = null;
  linkPairs = {};

  const leftBox = $("linkLeft");
  const rightBox = $("linkRight");
  leftBox.innerHTML = "";
  rightBox.innerHTML = "";

  // Left: A/B/C fixed keys
  ["A","B","C"].forEach((k, i)=>{
    const btn = document.createElement("button");
    btn.className = "link-chip";
    btn.textContent = item.left[i];
    btn.dataset.key = k;
    btn.onclick = ()=>{
      document.querySelectorAll("#linkLeft .link-chip").forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
      linkPickLeft = k;
    };
    leftBox.appendChild(btn);
  });

  // Right: 1/2/3
  ["1","2","3"].forEach((k, i)=>{
    const btn = document.createElement("button");
    btn.className = "link-chip";
    btn.textContent = item.right[i];
    btn.dataset.key = k;
    btn.onclick = ()=>{
      if(!linkPickLeft) return;
      linkPairs[linkPickLeft] = k;

      // mark done left
      const leftBtn = [...document.querySelectorAll("#linkLeft .link-chip")].find(x=>x.dataset.key===linkPickLeft);
      if(leftBtn){
        leftBtn.classList.remove("active");
        leftBtn.classList.add("done");
      }
      linkPickLeft = null;
      renderPairs();
    };
    rightBox.appendChild(btn);
  });

  renderPairs();
  $("linkExp").textContent = "해설: (아직 연결하지 않음)";
  $("linkFeedbackImg").style.display = "none";
  $("linkFeedbackImg").src = "";
}

function renderPairs(){
  const keys = ["A","B","C"];
  const lines = keys.map(k=>{
    const v = linkPairs[k] ? linkPairs[k] : "—";
    return `${k} - ${v}`;
  });
  $("linkPairs").textContent = "현재 연결: " + lines.join(" / ");
}

function resetLink(){
  renderLink();
}

function checkLink(){
  const item = quizLink[linkIdx];
  const ok = ["A","B","C"].every(k=>linkPairs[k] === item.ans[k]);

  const ansStr = `A-${item.ans.A}, B-${item.ans.B}, C-${item.ans.C}`;
  $("linkExp").textContent = (ok ? "정답. " : `오답. 정답은 ${ansStr}. `) + (item.exp||"해설: (제공 없음)");
  showFeedbackImg("linkFeedbackImg", ok);

  addAttempt(ok);
  if(!ok){
    addWrongNote({ type:"연결형", q:item.q, a:ansStr, e:item.exp||"해설: (제공 없음)" });
  }
}

/* =========================
   REVIEW: Cards (flip)
========================= */
let cardIdx = 0;
function renderCard(){
  const it = reviewCards[cardIdx];
  $("cardQ").textContent = it.q;
  $("cardA").textContent = it.a;
  $("cardE").textContent = it.e;
  $("flipCard").classList.remove("flipped");
}

function flip(){
  $("flipCard").classList.toggle("flipped");
}

/* =========================
   REVIEW: Wrong Notes
========================= */
let wrongIdx = 0;

function getWrongs(){
  return JSON.parse(localStorage.getItem(LS.wrongs)||"[]");
}

function renderWrong(){
  const arr = getWrongs();
  if(arr.length === 0){
    $("wrongQ").textContent = "오답이 아직 없다.";
    $("wrongA").textContent = "-";
    $("wrongE").textContent = "-";
    return;
  }
  if(wrongIdx < 0) wrongIdx = 0;
  if(wrongIdx > arr.length-1) wrongIdx = arr.length-1;

  const it = arr[wrongIdx];
  $("wrongQ").textContent = `[${it.type}] ${it.q}`;
  $("wrongA").textContent = it.a;
  $("wrongE").textContent = it.e;
}

/* =========================
   NAV / EVENTS
========================= */

function bindNav(){
  // generic go
  document.querySelectorAll("[data-go]").forEach(el=>{
    el.addEventListener("click", ()=>show(el.getAttribute("data-go")));
  });

  $("btnGoQuiz").addEventListener("click", ()=>show("screen-quiz-select"));
  $("btnGoReview").addEventListener("click", ()=>show("screen-review-select"));

  $("btnRefreshConcept").addEventListener("click", setRandomConcept);

  // OX
  $("btnOxO").addEventListener("click", ()=>answerOX("O"));
  $("btnOxX").addEventListener("click", ()=>answerOX("X"));
  $("oxPrev").addEventListener("click", ()=>{ oxIdx = (oxIdx+quizOX.length-1)%quizOX.length; renderOX(); });
  $("oxNext").addEventListener("click", ()=>{ oxIdx = (oxIdx+1)%quizOX.length; renderOX(); });

  // Blank
  $("blankCheck").addEventListener("click", checkBlank);
  $("blankPrev").addEventListener("click", ()=>{ blankIdx = (blankIdx+quizBlank.length-1)%quizBlank.length; renderBlank(); });
  $("blankNext").addEventListener("click", ()=>{ blankIdx = (blankIdx+1)%quizBlank.length; renderBlank(); });

  // Multi
  $("multiCheck").addEventListener("click", checkMulti);
  $("multiReset").addEventListener("click", resetMulti);
  $("multiPrev").addEventListener("click", ()=>{ multiIdx = (multiIdx+quizMulti.length-1)%quizMulti.length; renderMulti(); });
  $("multiNext").addEventListener("click", ()=>{ multiIdx = (multiIdx+1)%quizMulti.length; renderMulti(); });

  // Link
  $("linkCheck").addEventListener("click", checkLink);
  $("linkReset").addEventListener("click", resetLink);
  $("linkPrev").addEventListener("click", ()=>{ linkIdx = (linkIdx+quizLink.length-1)%quizLink.length; renderLink(); });
  $("linkNext").addEventListener("click", ()=>{ linkIdx = (linkIdx+1)%quizLink.length; renderLink(); });

  // Review cards
  $("flipCard").addEventListener("click", flip);
  $("cardPrev").addEventListener("click", ()=>{ cardIdx = (cardIdx+reviewCards.length-1)%reviewCards.length; renderCard(); });
  $("cardNext").addEventListener("click", ()=>{ cardIdx = (cardIdx+1)%reviewCards.length; renderCard(); });

  // Wrong notes
  $("wrongPrev").addEventListener("click", ()=>{ wrongIdx--; renderWrong(); });
  $("wrongNext").addEventListener("click", ()=>{ wrongIdx++; renderWrong(); });

  // When entering screens, refresh content
  const screenHome = $("screen-home");
  const screenQuizSelect = $("screen-quiz-select");
  const screenReviewSelect = $("screen-review-select");

  // simple: render whenever navigate by listening to clicks
  document.body.addEventListener("click", (e)=>{
    const t = e.target;
    if(!(t instanceof HTMLElement)) return;
    if(t.hasAttribute("data-go")){
      const id = t.getAttribute("data-go");
      if(id === "screen-quiz-ox") renderOX();
      if(id === "screen-quiz-blank") renderBlank();
      if(id === "screen-quiz-multi") renderMulti();
      if(id === "screen-quiz-link") renderLink();
      if(id === "screen-review-cards") renderCard();
      if(id === "screen-review-wrong") { wrongIdx = 0; renderWrong(); }
    }
    if(t.id === "btnGoQuiz") {}
    if(t.id === "btnGoReview") {}
  });
}

/* =========================
   INIT
========================= */
(function init(){
  initStatus();
  renderServices();
  setRandomConcept();
  bindNav();

  // 최초 화면: 홈
  show("screen-home");
})();

