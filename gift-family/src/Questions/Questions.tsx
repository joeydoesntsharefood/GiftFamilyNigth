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
function urlGit (value: string) {
  return `https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/cad112a38d02d1b445585fa95be58ccd7dd04543/gift-family/src/RenderQuestions/imgs/${value}?raw=true`
}

const Questions: IQuestion[] = [
  // Okay
  {
    question: 'Qual o mod que perdeu o mod mais rapido ?',
    answer: 'Fuher',
    options: ['Fuher', 'Texeira', 'Lokix', 'LuizaMeuBem', 'Teteu'],
    gift: urlGit('gift1.jpg'),
    giftText: 'Acredita que o Fuher gosta tanto de ti que ele sumiu durante uma semana inteira, quando voltou fez a maior propaganda sua ?'
  },
  // Okay
  {
    question: 'O que é mais velho ?',
    answer: 'Lokix',
    options: ['Texeira', 'O seu papel de trouxa', 'Lokix', 'A gloriosa', 'Luiza?'],
    eggOption: 'A gloriosa',
    egg: 'cabeça da minha rola',
    gift: urlGit('gift3.jpg'),
    giftText: 'PAU NO SEU CU'
  },
  // Okay
  {
    question: 'Qual o gaucho mais bonito da live ?',
    answer: 'Lucas',
    options: ['Leozin', 'Diniz', 'Teteu', 'Lucas', 'Lokix'],
    egg: 'Não sou gaucho, mas obrigado pelo elogio',
    eggOption: 'Lokix',
    gift: 'https://raw.githubusercontent.com/joeydoesntsharefood/GiftFamilyNigth/a91be774027aa3990b496bd1b529cacb2bad2965/gift-family/src/RenderQuestions/imgs/gift6.jpg?raw=true',
    giftText: 'Acredita que ele tem uma amiga gata e não me apresentou ?'
  },
  // Okay
  {
    question: 'Como sua mãe chama o mozão novo dela ?',
    answer: 'Leonardo',
    options: ['Leozin', 'Texeira', 'Leo', 'Leonardo', 'Sério aceita'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/main/gift-family/src/RenderQuestions/imgs/gift8.jpg?raw=true',
    giftText: 'Hmmmmmmmmmmm LEOZINNNNNNNNN'
  },
  {
    question: 'Qual o aniversário da live ?',
    answer: '14/Setembro',
    options: ['1 ano após a minha chegada', '17/Outubro', '14/Agosto', '14/Setembro', '3/Julho'],
    egg: 'Você sabe que é verdade',
    eggOption: '1 ano após a minha chegada',
    gift: urlGit('gift1.jpg'),
    giftText: 'Test5',
  },
  // Okay
  {
    question: 'Quem já fez mais papel de trouxa ?',
    answer: 'Lorrany',
    options: ['Rafael', 'Lucase', 'Lorrany', 'Lokix', 'Skinifer'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/cad112a38d02d1b445585fa95be58ccd7dd04543/gift-family/src/RenderQuestions/imgs/gift5.mp4',
    giftText: 'Sério Lorrany, você consegue superar qualquer coisa que fazemos, parabéns !',
    video: true
  },
  {
    question: 'Complete a pergunta Ro?La?',
    answer: 'Ny?',
    options: ['Quero', 'Onde tem ?', 'Ny?', 'Lo para', 'Pinto'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/main/gift-family/src/RenderQuestions/imgs/gift7.jpg?raw=true',
    giftText: 'NickLink oprimindo os cariocas e fodace'
  },
  {
    question: 'Qual o tatuador mais gostoso do Studio De Nunes ?',
    answer: 'Wil',
    options: ['Wil', 'GuiGui', 'Frogzin', 'Wilgner', 'O Rapaz sem camisa'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/main/gift-family/src/RenderQuestions/imgs/gift9.jpg?raw=true',
    giftText: 'Test8'
  },
  {
    question: 'Qual o Emote mais usado na live até o momento ?',
    answer: 'lul',
    options: ['lul','nixnycLove', 'yayahRojão', 'kappa', 'cazeSPFC'],
    gift: urlGit('gift1.jpg'),
    giftText: 'Test9'
  },
  {
    question: 'Qual o jogo proibido ?',
    answer: 'Roblox',
    options: ['Terraria', 'Roblox', 'MineCraft', 'Fortnite', 'Stop'],
    gift: urlGit('gift1.jpg'),
    giftText: 'Test10'
  },
  // Okay
  {
    question: 'Qual a bebida favorita do Lucase ?',
    answer: 'Fanta ?',
    options: ['Leitinho ?', 'Coquinha ?', 'Meu Leitinho ?', 'Leitinho Quente ?', 'Fanta ?'],
    gift: urlGit('gift2.jpg'),
    giftText: 'Test11'
  },
  // Okay
  {
    question: 'O que o Rafa mais gostaria de ter ?',
    answer: 'Bigode',
    options: ['Bong', 'Maconha sem fim', 'Bigode', 'Yayah', 'Biel'],
    gift: urlGit('gift4.jpg'),
    giftText: 'Test12'
  },
  {
    question: 'Para comemorar a pergunta de número 13, responda corretamente',
    answer: 'Lula 2022',
    options: ['Lula 2022'],
    gift: urlGit('gift1.jpg'),
    giftText: 'Test13'
  },
  {
    question: 'Meu bem ?',
    answer: 'Luiza',
    options: ['Leozin', 'Luiza', 'Fuher', 'Mat(h)eus', 'Hector'],
    egg: 'Quem é Hector, Lorrany ?',
    eggOption: 'Hector',
    gift: urlGit('gift1.jpg'),
    giftText: 'Test14'
  },
  {
    question: 'Fala a maneira mais propria e correta de dizer um bom "Te amo"',
    answer: 'Vai tomar no seu cu',
    options: ['Vai tomar no seu cu', 'Te amo', 'Amo Tu', 'Ownnnnt', 'Amo você'],
    gift: urlGit('gift1.jpg'),
    giftText: 'Test15'
  }
]

export default Questions