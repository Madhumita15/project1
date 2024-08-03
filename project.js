const questions = [
    {
        question: "An HTML document can contain _____",
        answers: [
            {text: "Attributes", correct: false},
            {text: "Tags", correct: false},
            {text: "Raw text", correct: false},
            {text: "All the answers are true", correct: true}
        ]
    },

    {
        question: " If we want to place text around an image, which CSS property should we use?",
        answers: [
            {text: "push", correct: false},
            {text: "float", correct: true},
            {text: "align", correct: false},
            {text: "wrap", correct: false}
        ]
    },

    {
        question: "In HTML, Uniform Resource Locator (URL) is used _____",
        answers: [
            {text: "To create a frame document.", correct: false},
            {text: "To create an image map in a web page.", correct: false},
            {text: "To customize the image in a web page.", correct: false},
            {text: "To identify a name or a resource on the Internet.", correct: true}
        ]
    },

    {
        question: "Which of the following protocols is not used on the Internet?",
        answers: [
            {text: "Gopher", correct: false},
            {text: "HTTP", correct: false},
            {text: "WIRL", correct: true},
            {text: "Telnet", correct: false}
        ]
    },

    {
        question: "What is the purpose of HTML forms?",
        answers: [
            {text: "To display the content of an email.", correct: false},
            {text: "To display animation effect.", correct: false},
            {text: "To collect user input.", correct: true},
            {text: "None of the above", correct: false}
        ]
    },

    {
        question: "Which CSS property is used to control the text size of an element?",
        answers: [
            {text: "font-style", correct: false},
            {text: "text-size", correct: false},
            {text: "font-size", correct: true},
            {text: "text-style", correct: false}
        ]
    },

    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        answers: [
            {text: "It is an ordered list of values", correct: true},
            {text: "It is an ordered list of objects", correct: false},
            {text: "It is an ordered list of string", correct: false},
            {text: "It is an ordered list of functions", correct: false}
        ]
    },

    {
        question: "Which of the following is the property that is triggered in response to JS errors?",
        answers: [
            {text: "onclick", correct: false},
            {text: "onerror", correct: true},
            {text: "onmessage", correct: false},
            {text: "onexception", correct: false}
        ]
    },

    {
        question: " Which of the following scoping type does JavaScript use?",
        answers: [
            {text: "Sequential", correct: false},
            {text: "Segmental", correct: false},
            {text: "Lexical", correct: true},
            {text: "Literal", correct: false}
        ]
    },

    {
        question: "Why JavaScript Engine is needed?",
        answers: [
            {text: "Both Compiling & Interpreting the JavaScript", correct: false},
            {text: "Parsing the javascript", correct: false},
            {text: "Interpreting the JavaScript", correct: true},
            {text: "Compiling the JavaScript", correct: false}
        ]
    },

   



]

const questionElement = document.querySelector('.question')
const answerbuttons = document.querySelector('#answerbtn')
const nextbutton = document.querySelector('#nextbtn')

let currentQestionIndex = 0
let score = 0
function startQuiz(){
    currentQestionIndex = 0
    score = 0
    nextbutton.innerHTML = "Next"
    showQuestion()
 }

 function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQestionIndex]
    let questionNo = currentQestionIndex + 1
    questionElement.innerHTML = questionNo + '.' + currentQuestion.question




    currentQuestion.answers.forEach((answer)=>{
    const button = document.createElement("button")
    button.innerHTML = answer.text
    button.classList.add("btn")
    answerbuttons.appendChild(button)
    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)

})

    

 }

 function resetState(){
    nextbutton.style.display = "none"
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild)
    }

 }

 function selectAnswer(e){
    const selectButton = e.target
    const isCorrect = selectButton.dataset.correct === "true"
    if (isCorrect) {
        selectButton.classList.add("correct")
        score++
        
    }else{
        selectButton.classList.add("Incorrect")
    }
    Array.from(answerbuttons.children).forEach((button)=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true

    })
    nextbutton.style.display = "block"
 }

 function showScore(){
    resetState()
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`
    nextbutton.innerHTML = "Play Again"
    nextbutton.style.display = "block"

 }

 function handleNextButton () {
    currentQestionIndex++
    if (currentQestionIndex < questions.length) {
        showQuestion()
        
    }else{
        showScore()
    }
    
 }

 nextbutton.addEventListener("click",()=>{
    if(currentQestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
 })


 startQuiz()