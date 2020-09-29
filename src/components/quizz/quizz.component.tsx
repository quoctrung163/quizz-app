import React from 'react'; // we need this to make JSX compile
import QuizzTitle from './quizzTitle.component';
import QuizzChild from './quizzChild.component';

type QuizzProps = {
  question: string,
  choices: any
}

const Quizz = ({ question, choices }: QuizzProps) => {
  return (
    <>
      <QuizzTitle question={question} />
      <QuizzChild choices={choices} />
    </>
  )
}

export default Quizz;