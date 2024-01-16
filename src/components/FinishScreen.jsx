import React from 'react'

function FinishScreen({ points, maxPossiblePoint, highscore, dispatch }) {
    const percentage = (points / maxPossiblePoint) * 100;
    let emoji;

    if (percentage === 100) emoji = '🥇'
    if (percentage >= 80 && percentage < 100) emoji = '🎉'
    if (percentage >= 50 && percentage < 80) emoji = '🙃'
    if (percentage > 0 && percentage < 50) emoji = '😶'
    if (percentage === 0) emoji = '🤦🏾‍♂️'
    return (
        <>
            <p className='max-w-sm mx-auto bg-theme p-4 text-center text-white font-bold rounded-full'>
                {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoint} ({Math.ceil(percentage)}%)
            </p>
            <p className='text-center text-medium py-3'>(Highscore: {highscore} points)</p>
            <div className='text-end mt-8'>
                <button
                    className='px-6 py-3 rounded-full bg-dark text-white border-[1px] border-dark duration-300 hover:bg-black/10'
                    onClick={() => dispatch({ type: "restart-quiz" })}
                    type='button'>Restart quiz</button>
            </div>
        </>
    )
}

export default FinishScreen