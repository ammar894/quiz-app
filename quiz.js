const questions = [
    {
      que: "What is the capital of France?",
      a: "Berlin",
      b: "Madrid",
      c: "Paris",
      d: "Rome",
      answer: "c"
    },
    {
      que: "Which planet is known as the Red Planet?",
      a: "Earth",
      b: "Mars",
      c: "Jupiter",
      d: "Venus",
      answer: "b"
    },
    {
      que: "Which gas do plants absorb from the atmosphere?",
      a: "Oxygen",
      b: "Nitrogen",
      c: "Carbon Dioxide",
      d: "Hydrogen",
      answer: "c"
    },
    {
      que: "What is the largest ocean on Earth?",
      a: "Atlantic Ocean",
      b: "Indian Ocean",
      c: "Arctic Ocean",
      d: "Pacific Ocean",
      answer: "d"
    }
  ];
  
  const questionBox = document.getElementById("question");
  const data = document.querySelectorAll(".option-btn");
  const submit = document.getElementById("submit-btn")
  
  let currentIndex = 0;
  let selectedAnswer = null;
  let correctAnswers = 0;
  
  function loadQuestion() {
    let currentQuestion = questions[currentIndex];
  
    questionBox.innerText = currentQuestion.que;
  
    data[0].innerText = "A. " + currentQuestion.a
    data[1].innerText = "B. " + currentQuestion.b
    data[2].innerText = "C. " + currentQuestion.c
    data[3].innerText = "D. " + currentQuestion.d
  
    data[0].dataset.option = "a"
    data[1].dataset.option = "b"
    data[2].dataset.option = "c"
    data[3].dataset.option = "d"
  
    data.forEach(btn => btn.classList.remove("selected"));
    selectedAnswer = null;
  }
  
  data.forEach(button => {
    button.addEventListener("click", () => {
      data.forEach(btn => btn.classList.remove("selected"));
      button.classList.add("selected");
      selectedAnswer = button.dataset.option;
    });
  });
  
  submit.addEventListener("click", () => {
    if (!selectedAnswer) {
      alert("Please select an option before submitting.");
      return;
    }
  
    if (selectedAnswer === questions[currentIndex].answer) {
      correctAnswers++;
    }
  
    currentIndex++;
  
    if (currentIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    let total = questions.length;
    let percentage = ((correctAnswers / total) * 100).toFixed(2);
  
    questionBox.innerText =
      "🎉 Quiz Completed!\n\n" +
      "✅ " + correctAnswers + " out of " + total + " questions are correct.\n" +
      "📊 " + percentage + "% correct";
  
    document.getElementById("options").innerHTML = "";
    submit.style.display = "none";
  }
  
  loadQuestion();
  