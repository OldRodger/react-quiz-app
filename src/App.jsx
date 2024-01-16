import React, { useEffect, useReducer } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import Footer from './components/Footer';
import Timer from './components/Timer';


const SECS_PER_QUESTION = 30;


const initialState = {
  questions: [],
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 0,
  // loading, error, ready, active, finished
  status: "loading"
}

function reducer(state, { type, payload }) {
  switch (type) {
    case "data-received":
      return { ...state, questions: payload, status: "ready" };

    case "data-failed":
      return { ...state, status: "error" };

    case "loading":
      return { ...state, status: "loading" };

    case "start-game":
      return { ...state, status: "active", secondsRemaining: state.questions.length * SECS_PER_QUESTION };

    case "answer-selected":
      const currentQuestion = state.questions.at(state.index)
      const newPoint = currentQuestion.correctOption === payload ? state.points + currentQuestion.points : state.points;
      return { ...state, answer: payload, points: newPoint }

    case "next-question":
      return { ...state, answer: null, index: state.index + 1 }

    case "finish-quiz":
      return { ...state, status: "finished", highscore: state.highscore < state.points ? state.points : state.highscore }

    case "restart-quiz":
      return { ...initialState, highscore: state.highscore, questions: state.questions, status: "ready" }

    case "tick":
      return { ...state, secondsRemaining: state.secondsRemaining - 1 }

    default:
      throw new Error("Unknown action");
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const { questions, status, index, answer, points, highscore, secondsRemaining } = state;
  const questionCount = questions.length;
  const currentQuestion = questions[index];
  const maxPossiblePoint = questions.reduce((acc, cur) => acc + cur.points, 0)


  useEffect(() => {
    (async function () {
      try {
        dispatch({ type: "loading" })
        const res = await fetch("http://localhost:8080/questions");
        const data = await res.json()
        dispatch({ type: "data-received", payload: data })
      } catch (error) {
        dispatch({ type: "data-failed" })
      }
    })()
  }, [])

  function handleStartGame() {
    dispatch({ type: "start-game" })
  }

  return <div className='bg-darkest h-screen'>
    <Header />

    <Main>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen questionCount={questionCount} onClick={handleStartGame} />}
      {status === "active" && (<>
        <Progress
          index={index}
          points={points}
          numberOfQuestions={questionCount}
          maxPossiblePoints={maxPossiblePoint}
          answer={answer}
        />
        <Question question={currentQuestion} dispatch={dispatch} answer={answer} />
        <Footer>
          <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
          <NextButton dispatch={dispatch} answer={answer} index={index} questionCount={questionCount} />
        </Footer>
      </>)}
      {status === "finished" && <FinishScreen dispatch={dispatch} highscore={highscore} points={points} maxPossiblePoint={maxPossiblePoint} />}
    </Main>
  </div>
}

export default App