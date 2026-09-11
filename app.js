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
    title: "Rösta med både hjärta och verktygslåda.",
    body: "Det är lätt att blanda ihop vad man känner sig som politiskt med vem som faktiskt kan få något gjort på platsen där man bor.",
    bullets: [
      "Ideologi hjälper dig förstå riktning: vad partiet brukar mena att samhället behöver mest.",
      "Sakfrågor hjälper dig förstå behov: vad som faktiskt behöver bli bättre i ditt liv och din närmiljö.",
      "Genomförandeförmåga hjälper dig förstå ansvar: vem verkar kunna göra arbetet, samarbeta och följa upp?"
    ],
    board: "balance"
  },
  {
    kicker: "Lektion 4",
    title: "Några regler gör valet mycket lättare att förstå.",
    body: "Det svenska valsystemet har spärrar, personröster och blankröster. Det låter tekniskt, men grunden är enkel: först räknas partiernas stöd, sedan vilka personer som får platserna.",
    bullets: [
      "I riksdagsvalet behöver ett parti normalt minst 4 procent i hela landet för att delta i mandatfördelningen.",
      "Ett parti kan också få fasta mandat i en riksdagsvalkrets om det får minst 12 procent där.",
      "En personröst lyfter en kandidat inom partiet. Den gör inte att partiet får fler mandat.",
      "En blank röst redovisas i statistiken, men räknas som ogiltig och påverkar inte mandatfördelningen."
    ],
    board: "rules"
  },
  {
    kicker: "Lektion 5",
    title: "Partier är inte bara loggor. De kommer ur idéer.",
    body: "Partiernas historia hjälper dig förstå varför de ofta svarar olika på samma fråga. Det betyder inte att historien bestämmer allt, men den förklarar mycket.",
    bullets: [
      "Socialdemokrati och vänstertradition betonar välfärd, jämlikhet, arbete och gemensamma lösningar.",
      "Liberalism betonar individens frihet, rättigheter, utbildning, företagande och valmöjligheter.",
      "Konservativa traditioner betonar stabilitet, ansvar, institutioner, familj, trygghet och samhällsgemenskap.",
      "Miljö- och centertraditioner betonar planetens gränser, landsbygd, närhet till beslut och lokalt självbestämmande."
    ],
    board: "ideas"
  },
  {
    kicker: "Lektion 6",
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

const parties = [
  {
    abbr: "S",
    name: "Socialdemokraterna",
    roots: "Arbetarrörelsen och folkhemstanken.",
    lens: "Ser ofta stark välfärd, arbete och minskade klyftor som samhällets bärande uppgift."
  },
  {
    abbr: "M",
    name: "Moderaterna",
    roots: "Höger- och liberalkonservativ tradition.",
    lens: "Betonar ofta arbete, ansvar, ekonomi, lag och ordning samt fungerande institutioner."
  },
  {
    abbr: "SD",
    name: "Sverigedemokraterna",
    roots: "Nationalkonservativ tradition.",
    lens: "Betonar ofta nationell sammanhållning, trygghet, migration och kulturell kontinuitet."
  },
  {
    abbr: "V",
    name: "Vänsterpartiet",
    roots: "Socialistisk och feministisk vänstertradition.",
    lens: "Betonar ofta jämlikhet, offentligt ansvar, arbetsvillkor och kritik mot privatiseringar."
  },
  {
    abbr: "C",
    name: "Centerpartiet",
    roots: "Bondeförbund, landsbygd och decentralisering.",
    lens: "Betonar ofta lokal frihet, företagande, landsbygd, miljö och beslut nära människor."
  },
  {
    abbr: "KD",
    name: "Kristdemokraterna",
    roots: "Kristdemokratisk idé om människovärde och gemenskaper.",
    lens: "Betonar ofta familj, omsorg, civilsamhälle, vård och socialt ansvar."
  },
  {
    abbr: "MP",
    name: "Miljöpartiet",
    roots: "Miljörörelsen och gröna idéer.",
    lens: "Betonar ofta klimat, biologisk mångfald, hållbarhet och globalt ansvar."
  },
  {
    abbr: "L",
    name: "Liberalerna",
    roots: "Liberal tradition med stark utbildningsprofil.",
    lens: "Betonar ofta frihet, skola, bildning, rättigheter och individens möjligheter."
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
const partyGrid = document.querySelector("#partyGrid");
const printButton = document.querySelector("#printButton");
const shareAiButton = document.querySelector("#shareAiButton");

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

  if (type === "balance") {
    return `
      <div class="balance-list">
        <section class="balance-item"><strong>1. Riktning</strong><span>Vilken samhällsidé verkar rimlig för dig?</span></section>
        <section class="balance-item"><strong>2. Behov</strong><span>Vad behöver bli bättre där du faktiskt lever?</span></section>
        <section class="balance-item"><strong>3. Förmåga</strong><span>Vem kan genomföra, samarbeta och följa upp?</span></section>
      </div>
    `;
  }

  if (type === "rules") {
    return `
      <div class="rule-list">
        <section class="rule-card"><strong>4 procent</strong><span>Huvudregeln för att få mandat i riksdagen.</span></section>
        <section class="rule-card"><strong>12 procent</strong><span>Kan ge fasta mandat i en enskild riksdagsvalkrets.</span></section>
        <section class="rule-card"><strong>Personröst</strong><span>Påverkar vilka kandidater som tar partiets platser.</span></section>
        <section class="rule-card"><strong>Blankröst</strong><span>Syns i statistiken men påverkar inte mandaten.</span></section>
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

function renderParties() {
  partyGrid.innerHTML = parties.map((party) => `
    <article class="party-card">
      <span class="party-abbr">${party.abbr}</span>
      <h3>${party.name}</h3>
      <p><strong>Rötter:</strong> ${party.roots}</p>
      <p>${party.lens}</p>
    </article>
  `).join("");
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

function buildMarkdown() {
  const rows = [
    "# Rösta rätt-skolan",
    "En saklig, opolitisk grund för att förstå svensk demokrati, valets nivåer och partiernas idéhistoriska rötter.",
    "Använd detta som underlag. Faktakolla, nyansera och ställ följdfrågor. Hjälp mig förstå, inte välja åt mig.",
    "Partilistan utgår från Riksdagens information om partierna i riksdagen 2022-2026 och Valmyndighetens rapportpartier inför riksdagsvalet 2026. Valsystemets regler om spärrar, personröstning och blankröst bygger på Valmyndighetens information."
  ];

  lessons.forEach((lesson) => {
    rows.push(`## ${lesson.title}`);
    rows.push(lesson.body);
    lesson.bullets.forEach((bullet) => rows.push(`- ${bullet}`));
  });

  rows.push("## Sveriges riksdagspartier, kort och försiktigt");
  parties.forEach((party) => {
    rows.push(`### ${party.name} (${party.abbr})`);
    rows.push(`Rötter: ${party.roots}`);
    rows.push(party.lens);
  });

  rows.push("## Bra frågor att ta vidare");
  rows.push("- Vilka påståenden ovan behöver faktakollas eller nyanseras?");
  rows.push("- Hur skiljer sig partiets historiska rötter från dess nuvarande politik?");
  rows.push("- Vilka frågor hör hemma i kommun, region respektive riksdag?");
  rows.push("- Hur kan jag bedöma genomförandeförmåga utan att fastna i partilojalitet?");
  rows.push("- Vad behöver jag dubbelkolla hos Valmyndigheten innan jag röstar?");

  return rows.join("\n\n");
}

function copyForAi() {
  const markdown = buildMarkdown();
  const original = shareAiButton.textContent;
  const done = () => {
    shareAiButton.textContent = "Kopierat";
    window.setTimeout(() => {
      shareAiButton.textContent = original;
    }, 1800);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(markdown).then(done).catch(() => {
      window.prompt("Kopiera texten och klistra in i valfri AI:", markdown);
    });
    return;
  }

  window.prompt("Kopiera texten och klistra in i valfri AI:", markdown);
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

printButton.addEventListener("click", () => window.print());
shareAiButton.addEventListener("click", copyForAi);

renderLesson();
renderQuiz();
renderParties();
