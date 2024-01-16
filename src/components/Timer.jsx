import React, { useEffect } from 'react'

function Timer({ dispatch, secondsRemaining }) {

    const min = Math.trunc(secondsRemaining / 60);
    const sec = secondsRemaining % 60;

    useEffect(() => {

        if (secondsRemaining === 0) {
            dispatch({ type: "finish-quiz" })
        }

        const timer = setInterval(() => {
            dispatch({ type: "tick" })
        }, 1000);
        return () => clearInterval(timer)
    }, [dispatch, secondsRemaining])
    return (
        <p
            className='px-6 py-3 rounded-full bg-dark text-white border-[1px] border-dark duration-300 hover:bg-black/10'
        >
            <code>{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}</code>
        </p>
    )
}

export default Timer