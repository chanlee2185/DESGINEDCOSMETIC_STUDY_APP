/* 화면 전환 */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

/* 오늘의 개념 */
const conceptList = [
  "계면활성제는 친수기/친유기로 구성된다.",
  "유화 방식에는 O/W와 W/O가 있다.",
  "표피층은 네 층으로 구성된다.",
  "내용물 폐기 기준은 반드시 문서화한다.",
  "징크·티타늄은 물리적 자외선 차단제이다.",
  "UVA는 광노화의 원인이 된다."
];

function loadDailyConcept() {
  const box = document.getElementById("dailyConcept");
  if (box) {
    box.innerText = conceptList[Math.floor(Math.random() * conceptList.length)];
  }
}
loadDailyConcept();

/* -----------------------------------
   문제 데이터(OX/빈칸/총집합/큐피트)
   (정답 + 해설 포함)
----------------------------------- */

const OX = [
  { q: "화장품의 정의에는 의약품이 포함된다.", a: false, exp: "의약품은 포함되지 않는다." },
  { q: "자외선 차단 성분은 배합 한도를 초과할 수 없다.", a: true, exp: "자외선 차단 성분에는 규정된 최대치가 있다." },
  { q: "표피 과립층은 자외선 산란 기능이 있다.", a: true, exp: "과립층에는 케라토히알린 등이 존재한다." }
];

const BLANK = [
  { q: "맞춤형화장품 보고는 (_____)에 제출한다.", a: "식약처", exp: "맞춤형 조제는 식약처 보고 대상이다." }
];

const ANSWERSET = [
  { q: "문1. 화장품 정의로 옳은 것은?", a: "②", exp: "강한 작용은 제외된다." }
];

const CUPID = [
  { q: "표피 구조 연결", options:["각질층","유극층","과립층","기저층"], a:2, exp:"과립층은 자외선 산란, 엘라이딘 존재." }
];

/* -----------------------------------
   내부 상태
----------------------------------- */
let currentList = [];
let index = 0;
let mode = "";

/* -----------------------------------
   퀴즈 시작
----------------------------------- */
function startQuiz(type) {
  mode = type;

  if (type === "ox") currentList = OX;
  if (type === "blank") currentList = BLANK;
  if (type === "answerset") currentList = ANSWERSET;
  if (type === "cupid") currentList = CUPID;

  index = 0;
  showScreen("quizScreen");
  loadQuestion();
}

/* -----------------------------------
   문제 표시
----------------------------------- */
function loadQuestion() {
  const q = currentList[index];

  document.getElementById("quizQuestion").innerText = q.q;
  document.getElementById("quizAnswer").classList.add("hidden");
  document.getElementById("quizExplanation").classList.add("hidden");

  document.getElementById("quizOptions").innerHTML = "";
  document.getElementById("blankInput").classList.add("hidden");

  if (mode === "ox") {
    ["O","X"].forEach(op=>{
      const b=document.createElement("button");
      b.innerText=op;
      b.onclick=()=>showAnswer((op==="O")===q.a, q.exp);
      document.getElementById("quizOptions").appendChild(b);
    });
  }

  if (mode === "blank") {
    const input=document.getElementById("blankInput");
    input.classList.remove("hidden");
    input.value="";
    input.onchange=()=>showAnswer(input.value.trim()===q.a, q.exp);
  }

  if (mode === "cupid") {
    q.options.forEach((op,i)=>{
      const b=document.createElement("button");
      b.innerText=op;
      b.onclick=()=>showAnswer(i===q.a, q.exp);
      document.getElementById("quizOptions").appendChild(b);
    });
  }

  if (mode === "answerset") {
    showAnswer("정답: "+q.a, q.exp);
  }
}

/* -----------------------------------
   정답 + 해설 표시
----------------------------------- */
function showAnswer(result, explanation) {
  const box = document.getElementById("quizAnswer");
  const exp = document.getElementById("quizExplanation");

  box.classList.remove("hidden");
  exp.classList.remove("hidden");

  if (typeof result === "boolean") {
    box.innerText = result ? "정답!" : "오답!";
  } else {
    box.innerText = result;
  }

  exp.innerText = explanation;
}

/* -----------------------------------
   앞 / 뒤
----------------------------------- */
function nextQuestion() {
  if (index < currentList.length - 1) { index++; loadQuestion(); }
}
function prevQuestion() {
  if (index > 0) { index--; loadQuestion(); }
}

/* -----------------------------------
   복습 카드(플립 카드 자동 생성)
----------------------------------- */
const REVIEW = [
  { q:"화장품 작용의 기준은?", a:"경미한 작용", exp:"법령상 화장품은 경미해야 한다." },
  { q:"자격취소 후 재취득 기간?", a:"3년", exp:"3년 경과 후 재응시 가능." }
];

function buildFlipCards() {
  const box = document.getElementById("flipContainer");
  box.innerHTML = "";

  REVIEW.forEach(item=>{
    const card=document.createElement("div");
    card.className="flip-card";

    card.innerHTML=`
      <div class="flip-inner">
        <div class="flip-front">${item.q}</div>
        <div class="flip-back"><b>${item.a}</b><br><br>${item.exp}</div>
      </div>
    `;

    card.onclick=()=>card.classList.toggle("clicked");
    box.appendChild(card);
  });
}

buildFlipCards();