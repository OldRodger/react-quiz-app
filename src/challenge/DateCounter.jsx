import React, { useReducer, useState } from 'react'

function reducer(state, { type, payload }) {
    switch (type) {
        case "track_step": return { ...state, step: payload }

        case "track_count": return { ...state, count: payload }

        case "inc": return { ...state, count: state.count + state.step }

        case "dec": return { ...state, count: state.count - state.step }

        case "reset": return { ...initialState }

        default:
            return state;
    }

}

const initialState = {
    count: 0,
    step: 1
}

function DateCounter() {
    const [{ count, step }, dispatch] = useReducer(reducer, initialState)


    const today = new Date();
    today.setDate(today.getDate() + count)


    function inc() {
        dispatch({ type: "inc" })
    }

    function dec() {
        dispatch({ type: "dec" })
    }

    function reset() {
        dispatch({ type: "reset" })
    }

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({ type: name === "step" ? "track_step" : "track_count", payload: Number(value) })
    }




    return (
        <div className='text-white flex flex-col items-center gap-8  text-xl'>
            <div className='flex gap-2'>
                <input type="range" min="1" max="10" value={step} name='step' onChange={handleChange} />
                <span>{step}</span>
            </div>
            <div className='flex gap-0.5'>
                <button type='button' className='bg-white w-10 text-black flex items-center justify-center' onClick={dec}>-</button>
                <input type="number" name='count' value={count} onChange={handleChange} className='px-4 py-2 text-black' />
                <button type='button' className='bg-white w-10 text-black flex items-center justify-center' onClick={inc}>+</button>
            </div>
            <p className='font-bold'>{today.toLocaleDateString("en-GB", {
                weekday: "short",
                month: "short",
                day: "2-digit",
                year: "numeric"
            })}</p>

            <button type='reset' className='bg-white text-black px-4 py-2' onClick={reset}>Reset</button>
        </div>
    )
}

export default DateCounter