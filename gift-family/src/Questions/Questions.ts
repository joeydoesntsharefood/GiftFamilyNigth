export interface IQuestion {
  question: string
  answer: string
  options: string[]
}

const Questions: IQuestion[] = [
  {
    question: 'Qual meu nome 1?',
    answer: 'Mateus',
    options: ['Mateus', 'José', 'Maria']
  },
  {
    question: 'Qual meu nome 2?',
    answer: 'Mateus',
    options: ['Mateus', 'José', 'Maria']
  },
  {
    question: 'Qual meu nome 3?',
    answer: 'Mateus',
    options: ['Mateus', 'José', 'Maria']
  },
  {
    question: 'Qual meu nome 4?',
    answer: 'Mateus',
    options: ['Mateus', 'José', 'Maria']
  },
  {
    question: 'Qual meu nome 5?',
    answer: 'Mateus',
    options: ['Mateus', 'José', 'Maria']
  }
]

export default Questions