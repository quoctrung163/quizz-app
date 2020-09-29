export interface Choice {
  text: string;
  is_correct?: boolean
}

export interface DataType {
  question: string;
  choices: Choice[]
}

