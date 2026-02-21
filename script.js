/* ------------------------------------------
    기본 전역 변수
------------------------------------------- */
let currentPage = "home";
let quizType = "";
let currentIndex = 0;

let wrongNotes = JSON.parse(localStorage.getItem("wrongNotes") || "[]");

/* 오늘의 개념 랜덤 */
const conceptList = [
    "계면활성제는 친수기와 친유기를 동시에 가진다.",
    "유화 방식의 핵심은 '물과 기름의 분산 안정화'이다.",
    "표피는 5개 층으로 구성된다.",
    "내용물 폐기는 기록·구분·이중 확인이 원칙이다.",
    "화장품 원료는 입고 즉시 식별·보관·검수한다."
];

/* ------------------------------------------
    퀴즈 데이터 (문제 / 정답 / 해설)
------------------------------------------- */
const quizData = {
    ox: [
        { q: "살리실릭애시드 여드름 완화 기준은 0.5%이다.", a: "O", exp: "맞다. 기능성 기준은 0.5%이다." },
        { q: "징크옥사이드는 최대 25%까지 배합 가능하다.", a: "O", exp: "징크옥사이드와 티타늄디옥사이드는 25%까지 허용된다." },
        { q: "양이온 계면활성제가 가장 자극이 낮다.", a: "X", exp: "자극은 양이온 > 음이온 > 양쪽성 > 비이온성 순." }
    ],

    blank: [
        { q: "영유아·눈 화장용 제품의 미생물 허용 한도는 ____개/g(mL) 이하이다.", a: "500", exp: "총호기성생균수 허용 기준은 500 이하." },
        { q: "과립층은 빛을 산란시키고 ____저지막을 형성한다.", a: "수분", exp: "과립층에 수분저지막이 존재한다." }
    ],

    multi: [
        {
            q: "가장 자극이 강한 계면활성제는?",
            options: ["비이온성", "음이온성", "양쪽성", "양이온성"],
            a: 4,
            exp: "양이온성이 가장 자극이 강하다."
        }
    ],

    connect: [
        {
            q: "개념을 올바르게 연결하시오.",
            left: ["계면활성제", "유화", "표피"],
            right: ["물+기름 분산", "친수기/친유기", "5개 층 구성"],
            a: ["계면활성제-친수기/친유기", "유화-물+기름 분산", "표피-5개 층 구성"],
            exp: "핵심 개념 짝을 정확히 이해해야 한다."
        }
    ],

    review: [
        { q: "화장품 정의의 핵심은 인체 작용이 ___해야 한다.", a: "경미", exp: "화장품은 인체에 대한 작용이 경미해야 한다." },
        { q: "자격취소 후 재취득 가능 기간은?", a: "3년", exp: "취소된 날부터 3년이 지나야 다시 취득 가능." },
        { q: "주민번호·여권번호 등은 무엇인가?", a: "고유식별정보", exp: "개인을 특정하기 위한 식별정보." }
    ]
};

/* ------------------------------------------
    화면 전환 (페이드 인/아웃)
------------------------------------------- */
function goPage(pageId) {
    document.querySelector(`#${currentPage}`).classList.remove("active");
    setTimeout(() => {
        document.querySelector(`#${pageId}`).classList.add("active");
        currentPage = pageId;
    }, 150);
}

/* ------------------------------------------
    오늘의 개념 출력
------------------------------------------- */
function setTodayConcept() {
    const rnd = Math.floor(Math.random() * conceptList.length);
    document.getElementById("todayConcept").innerText = conceptList[rnd];
}

/* ------------------------------------------
    퀴즈 시작
------------------------------------------- */
function startQuiz(type) {
    quizType = type;
    currentIndex = 0;

    if (type === "ox") goPage("oxQuiz");
    if (type === "blank") goPage("blankQuiz");
    if (type === "multi") goPage("multiQuiz");
    if (type === "connect") goPage("connectQuiz");

    loadQuiz();
}

/* ------------------------------------------
    문제 로딩
------------------------------------------- */
function loadQuiz() {
    const data = quizData[quizType];
    const q = data[currentIndex];

    if (quizType === "ox") {
        document.getElementById("oxNumber").innerText = (currentIndex + 1).toString().padStart(2, "0");
        document.getElementById("oxQuestion").innerText = q.q;
        document.getElementById("oxExplain").innerText = "";
    }

    if (quizType === "blank") {
        document.getElementById("blankNumber").innerText = (currentIndex + 1).toString().padStart(2, "0");
        document.getElementById("blankQuestion").innerText = q.q;
        document.getElementById("blankExplain").innerText = "";
        document.getElementById("blankInput").value = "";
    }

    if (quizType === "multi") {
        document.getElementById("multiNumber").innerText = (currentIndex + 1).toString().padStart(2, "0");
        document.getElementById("multiQuestion").innerText = q.q;

        const box = document.getElementById("multiOptions");
        box.innerHTML = "";

        q.options.forEach((opt, index) => {
            const div = document.createElement("div");
            div.innerText = opt;
            div.onclick = () => selectMulti(index + 1);
            box.appendChild(div);
        });

        document.getElementById("multiExplain").innerText = "";
    }

    if (quizType === "connect") {
        document.getElementById("connectNumber").innerText = (currentIndex + 1).toString().padStart(2, "0");
        document.getElementById("connectQuestion").innerText = q.q;

        let html = `
            <div>
                ${q.left.map(i => `<div>${i}</div>`).join("")}
            </div>
            <div>
                ${q.right.map(i => `<div>${i}</div>`).join("")}
            </div>
        `;

        document.getElementById("connectColumns").innerHTML = html;
        document.getElementById("connectExplain").innerText = "";
    }
}

/* ------------------------------------------
    OX 선택
------------------------------------------- */
function selectOX(choice) {
    const q = quizData.ox[currentIndex];

    if (choice === q.a) {
        document.getElementById("oxExplain").innerText = `정답!  ${q.exp}`;
    } else {
        document.getElementById("oxExplain").innerText = `오답!  정답은 ${q.a}.  ${q.exp}`;
        saveWrong(q.q, q.a, q.exp);
    }
}

/* ------------------------------------------
    빈칸 정답확인
------------------------------------------- */
document.getElementById("blankInput").addEventListener("change", () => {
    const q = quizData.blank[currentIndex];
    const input = document.getElementById("blankInput").value.trim();

    if (input === q.a) {
        document.getElementById("blankExplain").innerText = `정답!  ${q.exp}`;
    } else {
        document.getElementById("blankExplain").innerText =
            `오답! 정답은 ${q.a}. ${q.exp}`;
        saveWrong(q.q, q.a, q.exp);
    }
});

/* ------------------------------------------
    객관식 선택
------------------------------------------- */
function selectMulti(num) {
    const q = quizData.multi[currentIndex];

    if (num === q.a) {
        document.getElementById("multiExplain").innerText = `정답! ${q.exp}`;
    } else {
        document.getElementById("multiExplain").innerText =
            `오답! 정답은 ${q.options[q.a - 1]}. ${q.exp}`;
        saveWrong(q.q, q.options[q.a - 1], q.exp);
    }
}

/* ------------------------------------------
    오답 저장
------------------------------------------- */
function saveWrong(question, answer, explain) {
    wrongNotes.push({ question, answer, explain });
    localStorage.setItem("wrongNotes", JSON.stringify(wrongNotes));
}

/* ------------------------------------------
    다음 / 이전 문제
------------------------------------------- */
function nextQuiz() {
    const q = quizData[quizType];
    if (currentIndex < q.length - 1) currentIndex++;
    loadQuiz();
}

function prevQuiz() {
    if (currentIndex > 0) currentIndex--;
    loadQuiz();
}

/* ------------------------------------------
    복습 카드 플립
------------------------------------------- */
document.querySelector("#reviewCards .card").addEventListener("click", () => {
    document.querySelector("#reviewCards .card").classList.toggle("flip");
});

/* ------------------------------------------
    복습 카드 로딩
------------------------------------------- */
function loadReviewCard() {
    const q = quizData.review[currentIndex];

    document.getElementById("cardFront").innerText = q.q;
    document.getElementById("cardBackAnswer").innerText = q.a;
    document.getElementById("cardBackExplain").innerText = q.exp;
}

document.getElementById("reviewCards").addEventListener("click", loadReviewCard);

/* ------------------------------------------
    오답노트 출력
------------------------------------------- */
function loadWrongNote() {
    if (wrongNotes.length === 0) {
        document.getElementById("noteQuestion").innerText = "오답이 없습니다.";
        document.getElementById("noteAnswer").innerText = "";
        document.getElementById("noteExplain").innerText = "";
        return;
    }

    const last = wrongNotes[wrongNotes.length - 1];

    document.getElementById("noteQuestion").innerText = last.question;
    document.getElementById("noteAnswer").innerText = last.answer;
    document.getElementById("noteExplain").innerText = last.explain;
}

document.getElementById("wrongNote").addEventListener("click", loadWrongNote);

/* ------------------------------------------
    홈 화면 데이터 세팅
------------------------------------------- */
function setStatus() {
    setTodayConcept();
}

/* 앱 시작 시 실행 */
setStatus();
