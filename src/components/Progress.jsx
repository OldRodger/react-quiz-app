import React from 'react'

function Progress({ index, points, numberOfQuestions, maxPossiblePoints, answer }) {
    const progressPercentage = Math.trunc(((index + Number(answer !== null)) / numberOfQuestions) * 100);
    return (
        <div className='mb-8 text-medium grid grid-cols-3 grid-rows-2 rounded-full'>
            <div className="w-full h-3 bg-medium col-span-full rounded-full overflow-hidden">
                <div className="h-full bg-sky-600 duration-300" style={{width: `${progressPercentage}%`}}></div>
            </div>
            <span className='col-span-1'>Question <strong>{index + 1}</strong>/{numberOfQuestions}</span>
            <span className='col-start-3 col-span-1 text-end'><strong>{points}</strong>/{maxPossiblePoints} points</span>
        </div>
    )
}

export default Progress
