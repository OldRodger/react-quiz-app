import React from 'react'

function Options({ question, onSelectOption, answer }) {
    const hasAnswered = answer !== null;

    return (
        <div className='flex flex-col gap-3 text-left'>
            {question.options.map((option, index) => (
                <button
                    className={`py-3 px-6 cursor-pointer border-dark border-[1px] bg-dark rounded-full text-left duration-300 hover:bg-black/10 ${index === answer ? "translate-x-5" : ""} ${hasAnswered ?
                            index === question.correctOption?
                                "bg-theme border-theme hover:bg-theme" :
                                "bg-accent text-black hover:bg-accent" :
                            ""
                        }`}
                    key={option}
                    disabled={hasAnswered}
                    onClick={() => onSelectOption(index)}
                    type="button">{option}</button>
            ))}
        </div>
    )
}

export default Options