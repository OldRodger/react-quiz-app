import React from 'react'
import Options from './Options'

function Question({ question, dispatch, answer }) {
  function handleSelectOption(index) {
    dispatch({ type: "answer-selected", payload: index })
  }

  return (
    <div className='text-white mx-auto mb-4'>
      <p className='mb-4'><strong>{question.question}</strong></p>
      <Options question={question} onSelectOption={handleSelectOption} answer={answer} />
    </div>
  )
}

export default Question