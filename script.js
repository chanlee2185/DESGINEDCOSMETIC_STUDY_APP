let currentPage = "home";
let currentIndex = 0;
let quizType = "";
let wrongNotes = JSON.parse(localStorage.getItem("wrongNotes") || "[]");

const conceptList = [
    "계면활성제는 친수기와 친유기를 동시에 가진다.",
    "유화는 물과 기름을 안정화시키는 과정이다.",
    "표피는 5개 층으로 구성된다.",
    "내용물 폐기는 이중 확인이 원칙이다.",
    "원료는 입고 즉시 식별·보관해야 한다."
];

const quizData = {
    ox: [
        { q: "살리실릭애시드 기준은 0.5%이다.", a: "O", exp: "맞다. 기능성 기준 0.5%." },
        { q: "징크옥사이드는 최대 25% 배합 가능하다.", a: "O", exp: "25%까지 허용된다." },
        { q: "양이온 계면활성제가 가장 자극이 낮다.", a: "X", exp: "양이온 > 음이온 > 양쪽성 > 비이온성" }
    ],
    blank: [
        { q: "영유아 미생물 허용 기준은 ____개 이하이다.", a: "500", exp: "총호기성생균수 500 이하." }
    ],
    multi: [
        {
            q: "가장 자극이 강한 계면활성제는?",
            options: ["비이온성", "음이온성", "양쪽성", "양이온성"],
            a: 4,
            exp: "양이온성이 자극이 가장 강함."
        }
    ],
    review: [
        { q: "화장품의 작용은 ___해야 한다.", a: "경미", exp: "인체 작용이 경미해야 한다." }
    ]
};

function goPage(id) {
    document.getElementById(currentPage).classList.remove("active");
    setTimeout(() => {
        document.getElementById(id).classList.add("active");
        currentPage = id;
    }, 150);
}

function openLink(url) { window.open(url); }


/* ───────── 오늘의 개념 ───────── */

function setConcept() {
    let idx = Math.floor(Math.random() * conceptList.length);
    document.getElementById("todayConcept").innerText = conceptList[idx];
}
setConcept();

/* ───────── 퀴즈 시작 ───────── */

function startQuiz(type) {
    quizType = type;
    currentIndex = 0;
    goPage(type + "Quiz");
    loadQuiz();
}

function loadQuiz() {
    const q = quizData[quizType][currentIndex];

    if (quizType === "ox") {
        document.getElementById("oxNumber").innerText = (currentIndex + 1).toString().padStart(2, "0");
        document.getElementById("oxQuestion").innerText = q.q;
        document.getElementById("oxExplain").innerText = "";
        hideFeedback();
    }
}

/* ───────── 정답 이미지 숨김 ───────── */
function hideFeedback() {
    document.getElementById("feedbackImage").style.display = "none";
}

/* ───────── OX 정답 처리 ───────── */

function selectOX(choice) {
    const q = quizData.ox[currentIndex];
    const img = document.getElementById("feedbackImage");

    if (choice === q.a) {
        document.getElementById("oxExplain").innerText = "정답! " + q.exp;
        img.src = "correct.png";
    } else {
        document.getElementById("oxExplain").innerText = "오답! 정답은 " + q.a + ". " + q.exp;
        img.src = "wrong.png";
        wrongNotes.push(q);
        localStorage.setItem("wrongNotes", JSON.stringify(wrongNotes));
    }
    img.style.display = "block";
}

/* ───────── 다음/이전 ───────── */

function nextQuiz() {
    if (currentIndex < quizData[quizType].length - 1) {
        currentIndex++;
        loadQuiz();
    }
}

function prevQuiz() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuiz();
    }
}

/* ───────── 복습 카드 ───────── */

let reviewIndex = 0;

function loadReview() {
    const q = quizData.review[reviewIndex];
    document.getElementById("cardFront").innerText = q.q;
    document.getElementById("cardBackAnswer").innerText = "정답: " + q.a;
    document.getElementById("cardBackExplain").innerText = q.exp;
}
loadReview();

function flipCard() {
    document.getElementById("reviewCard").classList.toggle("flip");
}

function nextReview() {
    if (reviewIndex < quizData.review.length - 1) reviewIndex++;
    loadReview();
}

function prevReview() {
    if (reviewIndex > 0) reviewIndex--;
    loadReview();
}
