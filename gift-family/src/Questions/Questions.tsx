export interface IQuestion {
  question: string
  answer: string
  options: string[]
  eggOption?: string
  egg?: string
  gift: any
  giftText: string
  video?: boolean
}

const Questions: IQuestion[] = [
  // Okay
  {
    question: 'Qual o mod que perdeu o mod mais rapido ?',
    answer: 'Fuher',
    options: ['Fuher', 'Texeira', 'Lokix', 'LuizaMeuBem', 'Teteu'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/4d71ad2945ba7cdc034fb40eda2b310a3bf1259d/gift-family/src/RenderQuestions/imgs/gift1.jpg?raw=true',
    giftText: 'Acredita que o Fuher gosta tanto de ti que ele sumiu durante uma semana inteira, quando voltou fez a maior propaganda sua ?'
  },
  // Okay
  {
    question: 'O que é mais velho ?',
    answer: 'Lokix',
    options: ['Texeira', 'O seu papel de trouxa', 'Lokix', 'A gloriosa', 'Luiza?'],
    eggOption: 'A gloriosa',
    egg: 'cabeça da minha rola',
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/cad112a38d02d1b445585fa95be58ccd7dd04543/gift-family/src/RenderQuestions/imgs/gift3.jpg',
    giftText: 'PAU NO SEU CU'
  },
  // Okay
  {
    question: 'Qual o gaucho mais bonito da live ?',
    answer: 'Lucas',
    options: ['Leozin', 'Diniz', 'Teteu', 'Lucas', 'Lokix'],
    egg: 'Não sou gaucho, mas obrigado pelo elogio',
    eggOption: 'Lokix',
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/main/gift-family/src/RenderQuestions/imgs/gift6.jpg',
    giftText: 'Acredita que ele tem uma amiga gata e não me apresentou ?'
  },
  // Okay
  {
    question: 'Como sua mãe chama o mozão novo dela ?',
    answer: 'Leonardo',
    options: ['Leozin', 'Texeira', 'Leo', 'Leonardo', 'Sério aceita'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/main/gift-family/src/RenderQuestions/imgs/gift5.jpg',
    giftText: 'Hmmmmmmmmmmm LEOZINNNNNNNNN'
  },
  {
    question: 'Qual o aniversário da live ?',
    answer: '14/Setembro',
    options: ['1 ano após a minha chegada', '17/Outubro', '14/Agosto', '14/Setembro', '3/Julho'],
    egg: 'Você sabe que é verdade',
    eggOption: '1 ano após a minha chegada',
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/4d71ad2945ba7cdc034fb40eda2b310a3bf1259d/gift-family/src/RenderQuestions/imgs/gift1.jpg?raw=true',
    giftText: 'Test5',
  },
  // Okay
  {
    question: 'Quem já fez mais papel de trouxa ?',
    answer: 'Lorrany',
    options: ['Rafael', 'Lucase', 'Lorrany', 'Lokix', 'Skinifer'],
    gift: <video style={{ width: '100%' }} controls>
      <source src="https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/cad112a38d02d1b445585fa95be58ccd7dd04543/gift-family/src/RenderQuestions/imgs/gift5.mp4" />
    </video>,
    giftText: 'Sério Lorrany, você consegue superar qualquer coisa que fazemos, parabéns !',
    video: true
  },
  {
    question: 'Complete a pergunta Ro?La?',
    answer: 'Ny?',
    options: ['Quero', 'Onde tem ?', 'Ny?', 'Lo para', 'Pinto'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/4d71ad2945ba7cdc034fb40eda2b310a3bf1259d/gift-family/src/RenderQuestions/imgs/gift1.jpg?raw=true',
    giftText: 'Test7'
  },
  {
    question: 'Qual o tatuador mais gostoso do Studio De Nunes ?',
    answer: 'Wil',
    options: ['Wil', 'GuiGui', 'Frogzin', 'Wilgner', 'O Rapaz sem camisa'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/4d71ad2945ba7cdc034fb40eda2b310a3bf1259d/gift-family/src/RenderQuestions/imgs/gift1.jpg?raw=true',
    giftText: 'Test8'
  },
  {
    question: 'Qual o Emote mais usado na live até o momento ?',
    answer: 'lul',
    options: ['lul','nixnycLove', 'yayahRojão', 'kappa', 'cazeSPFC'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/4d71ad2945ba7cdc034fb40eda2b310a3bf1259d/gift-family/src/RenderQuestions/imgs/gift1.jpg?raw=true',
    giftText: 'Test9'
  },
  {
    question: 'Qual o jogo proibido ?',
    answer: 'Roblox',
    options: ['Terraria', 'Roblox', 'MineCraft', 'Fortnite', 'Stop'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/4d71ad2945ba7cdc034fb40eda2b310a3bf1259d/gift-family/src/RenderQuestions/imgs/gift1.jpg?raw=true',
    giftText: 'Test10'
  },
  // Okay
  {
    question: 'Qual a bebida favorita do Lucase ?',
    answer: 'Fanta ?',
    options: ['Leitinho ?', 'Coquinha ?', 'Meu Leitinho ?', 'Leitinho Quente ?', 'Fanta ?'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/cad112a38d02d1b445585fa95be58ccd7dd04543/gift-family/src/RenderQuestions/imgs/gift2.jpg',
    giftText: 'Test11'
  },
  // Okay
  {
    question: 'O que o Rafa mais gostaria de ter ?',
    answer: 'Bigode',
    options: ['Bong', 'Maconha sem fim', 'Bigode', 'Yayah', 'Biel'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/cad112a38d02d1b445585fa95be58ccd7dd04543/gift-family/src/RenderQuestions/imgs/gift4.jpg',
    giftText: 'Test12'
  },
  {
    question: 'Para comemorar a pergunta de número 13, responda corretamente',
    answer: 'Lula 2022',
    options: ['Lula 2022'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/4d71ad2945ba7cdc034fb40eda2b310a3bf1259d/gift-family/src/RenderQuestions/imgs/gift1.jpg?raw=true',
    giftText: 'Test13'
  },
  {
    question: 'Meu bem ?',
    answer: 'Luiza',
    options: ['Leozin', 'Luiza', 'Fuher', 'Mat(h)eus', 'Hector'],
    egg: 'Quem é Hector, Lorrany ?',
    eggOption: 'Hector',
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/4d71ad2945ba7cdc034fb40eda2b310a3bf1259d/gift-family/src/RenderQuestions/imgs/gift1.jpg?raw=true',
    giftText: 'Test14'
  },
  {
    question: 'Fala a maneira mais propria e correta de dizer um bom "Te amo"',
    answer: 'Vai tomar no seu cu',
    options: ['Vai tomar no seu cu', 'Te amo', 'Amo Tu', 'Ownnnnt', 'Amo você'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/4d71ad2945ba7cdc034fb40eda2b310a3bf1259d/gift-family/src/RenderQuestions/imgs/gift1.jpg?raw=true',
    giftText: 'Test15'
  }
]

export default Questions