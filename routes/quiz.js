import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
  res.render("quiz.njk", {
    message: "Quiz"
    })
})

const questions = [
  {
    id: "q1",
    text: "Hur många hjul har en bil?",
    answers: [3, 12, 5, 4],
    correctAnswer: 4
  },
  {
    id: "q2",
    text: "Hur många ben har en gnu?",
    answers: ["två", "sju", "tre", "fyra"],
    correctAnswer: "fyra",
  },
  {
    id: "q3",
    text: "Vad är 1 + 1",
    answers: ["två", "2", "two", "3"],
    correctAnswer: "två",
  },
  {
    id: "q4",
    text: "Vad är en tyskland",
    answers: ["Land", "Kontenent", "Staten", "Billy"],
    correctAnswer: "Land",
  },
  {
    id: "q5",
    text: "Vad behöver man för att köra en bill",
    answers: ["Körkort", "Bill", "Flyplan", "Fordon"],
    correctAnswer: "Körkort",
  }
]

router.get("/questions", (req, res) => {
  res.render("questions.njk", {
    message: "Frågor",
    questions
  })
})

router.post("/end", (req, res) => {
  const answers = req.body
  console.log(answers)

   const results = questions.map(question => {
    const answer = answers[question.id]
    return {
      question: question.text,
      answer,
      correct: answer == question.correctAnswer
    }
  })
 
  


  res.render("result.njk", {
    message: "Ditt resultat",
    results
  })
})
// rad 4 , 18, 19 i server.js

export default router

// kom ihåg i server.js
// import quizRouter from './routes/quiz.js'
// app.use("/quiz", quizRouter)