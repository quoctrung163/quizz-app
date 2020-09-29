import React, {FunctionComponent} from 'react';

type ChildChoices = {
  text: string,
  is_correct: boolean
}

type Choices = {
  choices: ChildChoices[]
}

const Answer: FunctionComponent<Choices> = ({ choices }) => {
  return (
    <>
      {
        choices.map(item => (
          <ul>
            {
              item.is_correct === true ? <li>{`true, ${item.text}`}</li> :
                <li>{item.text}</li>
            }
          </ul>
        ))
      }
    </>
  )
}

export default Answer;