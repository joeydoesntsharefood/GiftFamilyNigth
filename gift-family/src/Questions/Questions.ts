export interface IQuestion {
  question: string
  answer: string
  options: string[]
}

const Questions: IQuestion[] = [
  {
    question: 'Qual meu nome ?',
    answer: 'Mateus',
    options: ['Mateus', 'José', 'Maria']
  }
]

export default Questions