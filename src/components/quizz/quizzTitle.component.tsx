import React from 'react';

type QuizzTitleProps = {
  question: string
}

const QuizzTitle = ({ question }: QuizzTitleProps) => {
  return (
    <div className='bg-white text-purple-800 p-10 rounded-lg shadow-md mt-4'>
      <h1 className='text-2xl w-full'>{question}</h1>
    </div>
  )
}

export default QuizzTitle;