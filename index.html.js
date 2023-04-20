const textArray = ["أدخل اسمك وأضغط التالي", 
    "كل عام وانت بخير يا ..",
    "وئامي",
    "ما اعرف الاسم اللي كتبتيه",
    "بس اعرف انك قرة عيني",
    "كل عام وانتي بخير",
    "وصحة وسلامة وعافية",
    "وكل عام وانتي تبعي",
    "الله يعيده علينا واحنا متزوجين",
    "يا رب تخلص مشاكلكم وتكوني سعيدة باسرع وقت",
    "حتتخطي وتنسي اللي صار ان شاء الله",
    "ما علينا من المشاكل ..",
    "تدري",
    "احم احم",
    "كل ما نتكلم، قلبي يذوب في حبك",
    "وكل ما اقرأ رسايلك",
    "افكر في صوتك الحنون اللي يدغدغ قلبي بدفء",
    "سحرك ما اقدر اقاومه",
    "أحبك",
    "مو مجرد حب",
    "عشق وادمان",
    "في كياتتك",
    "في انوثتك",
    "فيكي انتي",
    "...",
    "يا رب كل يوم اشوف ابتسامتك",
    "وامممم",
    "الحسها",
    "أجمل شي شفته وأكثر شي اسعدني",
    "...",
    "سيو",
    "done"
];
let currentTextIndex = 0;

const textElement = document.querySelector(".text");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const nameInput = document.getElementById("name");

textElement.textContent = textArray[currentTextIndex];

prevButton.addEventListener("click", () => {
  if (currentTextIndex <= 0) {
    return;
  }
  currentTextIndex--;
  textElement.textContent = textArray[currentTextIndex];
  if (currentTextIndex == 0) {
    nameInput.hidden = false;
  }
  else {
    nameInput.hidden = true;
  }
});

nextButton.addEventListener("click", () => {
  currentTextIndex++;
  if (currentTextIndex >= textArray.length) {
    currentTextIndex = 0;
  }
  if (currentTextIndex == 0) {
    nameInput.hidden = false;
  }
  else {
    nameInput.hidden = true;
  }
  textElement.textContent = textArray[currentTextIndex];
});
