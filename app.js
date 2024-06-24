let quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Leo Tolstoy",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "India", "Japan", "South Korea"],
    answer: "Japan",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "H2SO4"],
    answer: "H2O",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlink Text Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["color", "text-color", "font-color", "foreground-color"],
    answer: "color",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<br>", "<lb>", "<linebreak>"],
    answer: "<br>",
  },
  {
    question:
      "In CSS, which property is used to control the spacing between elements?",
    options: ["margin", "padding", "border", "spacing"],
    answer: "margin",
  },
  {
    question:
      "What is the correct CSS syntax for making all the <p> elements bold?",
    options: [
      "p {font-weight: bold;}",
      "p {text-style: bold;}",
      "p {bold: true;}",
      "p {style: bold;}",
    ],
    answer: "p {font-weight: bold;}",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<list>", "<ol>", "<li>"],
    answer: "<ul>",
  },
  {
    question:
      "In CSS, which property is used to set the background color of an element?",
    options: ["background-color", "color", "bgcolor", "background"],
    answer: "background-color",
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: [
      "<body style='background-color:yellow;'>",
      "<background>yellow</background>",
      "<bg color='yellow'>",
      "<background color='yellow'>",
    ],
    answer: "<body style='background-color:yellow;'>",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "css", "class", "font"],
    answer: "style",
  },
  {
    question: "In CSS, what does the 'float' property do?",
    options: [
      "Moves an element to the right or left, allowing other elements to wrap around it",
      "Changes the font size of an element",
      "Makes an element disappear",
      "Changes the text alignment of an element",
    ],
    answer:
      "Moves an element to the right or left, allowing other elements to wrap around it",
  },
  {
    question:
      "Which HTML tag is used to define a hyperlink, or a link to another page?",
    options: ["<link>", "<href>", "<a>", "<src>"],
    answer: "<a>",
  },
  {
    question:
      "In CSS, which property is used to create space between the element's border and inner content?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    answer: "padding",
  },
  {
    question:
      "What is the correct HTML for creating a hyperlink to another website?",
    options: [
      "<a href='http://www.example.com'>Example</a>",
      "<a url='http://www.example.com'>Example</a>",
      "<a link='http://www.example.com'>Example</a>",
      "<a src='http://www.example.com'>Example</a>",
    ],
    answer: "<a href='http://www.example.com'>Example</a>",
  },
];





const answerEle = document.querySelectorAll(".answer");

const [questEle, option_1, option_2, option_3, option_4] =

  document.querySelectorAll("#quest, #option_1,#option_2,#option_3,#option_4");

const submitBtn = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const { question, options } = quizQuestions[currentQuiz];
  console.log(question, options);

  quest.innerText = `Q.${question}`;

  options.forEach(
    (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
  );
};

loadQuiz();

const getSelectedOption = () => {

  let ans_index;
  answerEle.forEach((curOption, index) => {

      if(curOption.checked){
         ans_index = index;
      }
  });
  return ans_index;


//   let answerElement = Array.from(answerEle);

//   return answerElement.findIndex((curEle) => {

//     curEle.checked;

//   });
};
 
const deselectedAnswer = ()  => {
       return answerEle.forEach((curEle) => curEle.checked = false);
}


submitBtn.addEventListener("click", () => {
  const selectedOptionsIndex = getSelectedOption();
  console.log(selectedOptionsIndex);

if(selectedOptionsIndex === quizQuestions[currentQuiz].correct){
    score = score + 1;
}


  if(currentQuiz < quizQuestions.length){
    deselectedAnswer();
    loadQuiz();
//   }else{
//     // quizQuestions.innerHTML =  `
    
//     // <div clas
    
//           `
  }
});
  