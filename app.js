const lessons = [
  {
    kicker: "Lektion 1",
    title: "Du röstar inte i ett val. Du röstar i tre.",
    body: "I Sverige får du flera valsedlar därför att makten är uppdelad. Det är poängen: allt ska inte bestämmas på samma ställe.",
    bullets: [
      "Kommunen ligger närmast vardagen: skola, äldreomsorg, bibliotek, bygglov och mycket av den lokala miljön.",
      "Regionen handlar framför allt om vård, tandvård, kollektivtrafik och utveckling i länet.",
      "Riksdagen styr lagar, statens budget och Sveriges riktning i stora nationella frågor."
    ],
    board: "votes"
  },
  {
    kicker: "Lektion 2",
    title: "En fråga kan kännas politisk utan att höra hemma överallt.",
    body: "När en fråga blir viktig är första steget inte att fråga vilket parti som låter bäst. Första steget är att fråga: var fattas beslutet?",
    bullets: [
      "Skolmaten är inte samma sorts fråga som försvarspolitik.",
      "Vårdköer granskas ofta bättre genom regionen än genom partiledardebatten.",
      "Trygghet kan finnas på flera nivåer: lagar nationellt, men också ljus, fritid och lokala miljöer kommunalt."
    ],
    board: "decisions"
  },
  {
    kicker: "Lektion 3",
    title: "Partier är inte bara loggor. De kommer ur idéer.",
    body: "Partiernas historia hjälper dig förstå varför de ofta svarar olika på samma fråga. Det betyder inte att historien bestämmer allt, men den förklarar mycket.",
    bullets: [
      "Socialism och socialdemokrati betonar gemensamma lösningar, välfärd och minskade klyftor.",
      "Liberalism betonar individens frihet, rättigheter, företagande och valmöjligheter.",
      "Konservatism betonar traditioner, stabilitet, institutioner och försiktigare förändring.",
      "Miljörörelsen sätter ekologiska gränser och hållbarhet i centrum."
    ],
    board: "ideas"
  },
  {
    kicker: "Lektion 4",
    title: "Demokrati är mer än valdagen.",
    body: "Att rösta är viktigt, men demokrati är också att kunna granska, ändra sig, ställa frågor och förstå vem som bär ansvar.",
    bullets: [
      "Fråga inte bara vad ett parti vill. Fråga hur de tänker göra det.",
      "Skilj på vallöfte, plan, tidigare resultat och kompromiss.",
      "Det är rimligt att rösta olika i kommun, region och riksdag om verkligheten pekar åt olika håll."
    ],
    board: "questions"
  }
];

const quizItems = [
  {
    question: "Vem bestämmer mest över äldreomsorg och hemtjänst?",
    answer: "Kommun",
    explanation: "Äldreomsorg och hemtjänst är framför allt kommunens ansvar."
  },
  {
    question: "Vem ansvarar oftast för vård och kollektivtrafik?",
    answer: "Region",
    explanation: "Regionen ansvarar för stora delar av vården och ofta kollektivtrafiken."
  },
  {
    question: "Var beslutas lagar, statlig budget och regering?",
    answer: "Riksdag",
    explanation: "Riksdagen stiftar lagar, beslutar om statens budget och utser statsminister."
  }
];

const lessonKicker = document.querySelector("#lessonKicker");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonBody = document.querySelector("#lessonBody");
const lessonBullets = document.querySelector("#lessonBullets");
const boardContent = document.querySelector("#boardContent");
const prevLesson = document.querySelector("#prevLesson");
const nextLesson = document.querySelector("#nextLesson");
const tabs = document.querySelectorAll(".lesson-tab");
const quizQuestion = document.querySelector("#quizQuestion");
const quizOptions = document.querySelector("#quizOptions");
const quizFeedback = document.querySelector("#quizFeedback");

let lessonIndex = 0;
let quizIndex = 0;

function boardTemplate(type) {
  if (type === "votes") {
    return `
      <div class="vote-stack">
        <section class="vote-slip"><h3>Kommun</h3><p>Det som märks nära: skola, omsorg, bygglov, bibliotek och lokal service.</p></section>
        <section class="vote-slip"><h3>Region</h3><p>Vård, tandvård, kollektivtrafik och länets utveckling.</p></section>
        <section class="vote-slip"><h3>Riksdag</h3><p>Lagar, statsbudget, regering och Sveriges nationella riktning.</p></section>
      </div>
    `;
  }

  if (type === "decisions") {
    return `
      <div class="decision-grid">
        <section class="decision-card"><h3>Skolmat</h3><p>Titta först på kommunen.</p></section>
        <section class="decision-card"><h3>Vårdköer</h3><p>Titta först på regionen.</p></section>
        <section class="decision-card"><h3>Strafflagar</h3><p>Titta först på riksdagen.</p></section>
      </div>
    `;
  }

  if (type === "ideas") {
    return `
      <div class="idea-grid">
        <section class="idea-card"><h3>Välfärd och jämlikhet</h3><p>Gemensamma lösningar och skyddsnät.</p></section>
        <section class="idea-card"><h3>Frihet och rättigheter</h3><p>Individ, valmöjlighet och öppenhet.</p></section>
        <section class="idea-card"><h3>Stabilitet och tradition</h3><p>Förändra, men inte för snabbt.</p></section>
        <section class="idea-card"><h3>Planetens ramar</h3><p>Miljö och klimat som grundvillkor.</p></section>
      </div>
    `;
  }

  return `
    <div class="question-row">
      <div class="question-chip">Vad vill ni göra?</div>
      <div class="question-chip">Hur ska det gå till?</div>
      <div class="question-chip">Vad har ni gjort förut?</div>
      <div class="question-chip">Vad skulle få er att ändra er?</div>
    </div>
  `;
}

function renderLesson() {
  const lesson = lessons[lessonIndex];
  lessonKicker.textContent = lesson.kicker;
  lessonTitle.textContent = lesson.title;
  lessonBody.textContent = lesson.body;
  lessonBullets.innerHTML = lesson.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
  boardContent.innerHTML = boardTemplate(lesson.board);

  prevLesson.disabled = lessonIndex === 0;
  nextLesson.textContent = lessonIndex === lessons.length - 1 ? "Börja om" : "Nästa";

  tabs.forEach((tab, index) => {
    tab.classList.toggle("is-active", index === lessonIndex);
  });
}

function renderQuiz() {
  const item = quizItems[quizIndex];
  quizQuestion.textContent = item.question;
  quizFeedback.textContent = "";
  quizOptions.innerHTML = "";

  ["Kommun", "Region", "Riksdag"].forEach((option) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => answerQuiz(button, option, item));
    quizOptions.appendChild(button);
  });
}

function answerQuiz(button, option, item) {
  const isCorrect = option === item.answer;
  document.querySelectorAll(".quiz-option").forEach((optionButton) => {
    optionButton.classList.remove("is-correct", "is-wrong");
  });

  button.classList.add(isCorrect ? "is-correct" : "is-wrong");
  quizFeedback.textContent = isCorrect ? `Precis. ${item.explanation}` : `Nästan, men här är svaret ${item.answer.toLowerCase()}. ${item.explanation}`;

  if (isCorrect) {
    quizIndex = (quizIndex + 1) % quizItems.length;
    window.setTimeout(renderQuiz, 1600);
  }
}

prevLesson.addEventListener("click", () => {
  lessonIndex = Math.max(0, lessonIndex - 1);
  renderLesson();
});

nextLesson.addEventListener("click", () => {
  lessonIndex = lessonIndex === lessons.length - 1 ? 0 : lessonIndex + 1;
  renderLesson();
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    lessonIndex = Number(tab.dataset.lesson);
    renderLesson();
  });
});

renderLesson();
renderQuiz();
