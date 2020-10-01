import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './quizzChild.css';

type QuizzTitleProps = {
  choices: any
}

const QuizzChild = ({ choices }: QuizzTitleProps) => {
  const [correct, setCorrect] = useState("");
  const [correct1, setCorrect1] = useState("");
  const [correct2, setCorrect2] = useState("");
  const [correct3, setCorrect3] = useState("");

  const handleClick = (is_correct: boolean | undefined) => (
    // is_correct ? toast("dap an dung") : toast("dap an sai")
    is_correct ? setCorrect("true") : setCorrect("false")
  )

  const handleClick1 = (is_correct: boolean | undefined) => (
    // is_correct ? toast("dap an dung") : toast("dap an sai")
    is_correct ? setCorrect1("true") : setCorrect1("false")
  )

  const handleClick2 = (is_correct: boolean | undefined) => (
    // is_correct ? toast("dap an dung") : toast("dap an sai")
    is_correct ? setCorrect2("true") : setCorrect2("false")
  )

  const handleClick3 = (is_correct: boolean | undefined) => (
    // is_correct ? toast("dap an dung") : toast("dap an sai")
    is_correct ? setCorrect3("true") : setCorrect3("false")
  )

  return (
    <>
      <div className='flex flex-wrap mt-4 justify-between'>
        {
          <>
          <button
            onClick={() => handleClick(choices[0].is_correct)}
            className={`bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4`}
          >
            <p className={`${correct === "true" && 'correct'} ${correct === "false" && 'wrong'}`}>
              {choices[0].text}
            </p>
            </button>
            
          <button
              onClick={() => handleClick1(choices[1].is_correct)}
            className={`bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4`}
          >
              <p className={`${correct1 === "true" && 'correct'} ${correct1 === "false" && 'wrong'}`}>
              {choices[1].text}
            </p>
            </button>
            
            <button
              onClick={() => handleClick2(choices[2].is_correct)}
              className={`bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4`}
            >
              <p className={`${correct2 === "true" && 'correct'} ${correct2 === "false" && 'wrong'}`}>
                {choices[2].text}
              </p>
            </button>

            <button
              onClick={() => handleClick3(choices[3].is_correct)}
              className={`bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4`}
            >
              <p className={`${correct3 === "true" && 'correct'} ${correct3 === "false" && 'wrong'}`}>
                {choices[3].text}
              </p>
            </button>
          </>
          
          // choices.map((item: any, key: number) => (
          //   <button
          //     key={key}
          //     onClick={() => handleClick(item.is_correct)}
          //     className={`bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4`}
          //   >
          //     <p className={`${correct === "true" && 'correct'} ${correct === "false" && 'wrong'}`}>
          //       {item.text}
          //     </p>
          //   </button>
          // ))
        }
        
      </div>
      <ToastContainer />
      </>
  )
}

export default QuizzChild;