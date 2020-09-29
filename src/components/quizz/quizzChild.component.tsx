import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type QuizzTitleProps = {
  choices: any
}

const QuizzChild = ({ choices }: QuizzTitleProps) => {
  const handleClick = (is_correct: boolean | undefined) => (
    is_correct ? toast("dap an dung") : toast("dap an sai")
  )
  return (
    <>
      <div className='flex flex-wrap mt-4 justify-between'>
        {
          choices.map((item: any) => (
            <button
              onClick={() => handleClick(item.is_correct)}
              className='bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4'
            >{item.text}</button>
          ))
        }
        
      </div>
      <ToastContainer />
      </>
  )
}

export default QuizzChild;