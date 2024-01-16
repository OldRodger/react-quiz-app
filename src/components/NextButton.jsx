import React from 'react'

const NextButton = ({ dispatch, answer, index, questionCount }) => {
    if (answer === null) return null;

    if (index < questionCount - 1)
        return <div className='text-end'>
            <button
                className='px-6 py-3 rounded-full bg-dark text-white border-[1px] border-dark duration-300 hover:bg-black/10'
                onClick={() => dispatch({ type: "next-question" })}
                type='button'>Next</button>
        </div>

    if (index === questionCount - 1)
        return <div className='text-end'>
            <button
                className='px-6 py-3 rounded-full bg-dark text-white border-[1px] border-dark duration-300 hover:bg-black/10'
                onClick={() => dispatch({ type: "finish-quiz" })}
                type='button'>Finish</button>
        </div>

}

export default NextButton