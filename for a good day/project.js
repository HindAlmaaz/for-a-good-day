const quotes = [
  {
    name: " أوبرا وينفري",
    quote: ".لا تؤمنوا بالفشل؛ لأن الاستمتاع بالتجربة لا يعد فشلاً"
  },
  {
    name: " بريان تريسي",
    quote: ".كلما بحثت عن الفرص كلما زادت احتمالات تحقيقك للأمان الذي تبحث عنه"
  },
  {
    name: " محمد علي كلاي",
    quote: ".لا عيب في أن نسقط أرضاً، بل العيب أن نبقى على الأرض"
  },
  {
    name: " المهاتما غاندي",
    quote: ".الطريقة المثلى لتجد نفسك هي أن تضيع في مساعدة الآخرين"
  },
  {
    name: "دينيس ويتلي",
    quote:
      ". هُناك خياران في الحياة: إما أن تتقبل ظروفك الحالية كما هي، أو تتحمل مسؤولية تغيير هذه الظروف"
  },
  {
    name: " محمد علي كلاي",
    quote:
      ".لا تجعل تحديات الحياة تسرق منك أحلامك، تعلم منها، وستجدها أفضل أصدقائك"
  },
  {
    name: " أوبرا وينفري",
    quote: ".قدم أفضل ما لديك حتى تجد نفسك في مكان أفضل لتتهيأ للحظة القادمة"
  },
  {
    name: " محمد علي كلاي",
    quote: ".الأصدقاء بالمواقف، وليس بالسنين، حقيقة سندركها جميعاً يوماً ما"
  },
  {
    name: " المهاتما غاندي",
    quote: ".لا يمكن لأحد أن يؤذيك دون إذن منك"
  }
];

const quotebtn = document.querySelector("#quotebtn");
const quoteauthor = document.querySelector("#quoteauthor");
const quote = document.querySelector("#quote");

quotebtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteauthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
