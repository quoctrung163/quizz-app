import React from 'react';

type QuizzTitleProps = {
  choices: any
}

const QuizzChild = ({ choices }: QuizzTitleProps) => {
  return (
    <div className='flex flex-wrap mt-4 justify-between'>
      {
        choices.map((item: any) => (
          <button
            className='bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4'
          >{item.text}</button>
        ))
      }
    </div>
  )
}

export default QuizzChild;