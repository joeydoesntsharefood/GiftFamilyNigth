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
  //
  {
    question: 'Qual o aniversário da live ?',
    answer: '14/Setembro',
    options: ['1 ano após a minha chegada', '17/Outubro', '14/Agosto', '14/Setembro', '3/Julho'],
    egg: 'Você sabe que é verdade',
    eggOption: '1 ano após a minha chegada',
    gift: urlGit('gift1.jpg'),
    giftText: 'Mais de um ano de merda',
  },
  // Okay
  {
    question: 'Quem já fez mais papel de trouxa ?',
    answer: 'Lorrany',
    options: ['Rafael', 'Lucase', 'Lorrany', 'Lokix', 'Skinifer'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/cad112a38d02d1b445585fa95be58ccd7dd04543/gift-family/src/RenderQuestions/imgs/gift5.mp4?raw=true',
    giftText: 'Sério Lorrany, você consegue superar qualquer coisa que fazemos, parabéns !',
    video: true
  },
  // Okay
  {
    question: 'Complete a pergunta Ro?La?',
    answer: 'Ny?',
    options: ['Quero', 'Onde tem ?', 'Ny?', 'Lo para', 'Pinto'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/1dbc72df0e6d24d5cefae387876623430e0dcd06/gift-family/src/RenderQuestions/imgs/gift7.jpg?raw=true',
    giftText: 'NickLink oprimindo os cariocas e fodace'
  },
  // Okay
  {
    question: 'Qual o tatuador mais gostoso do Studio De Nunes ?',
    answer: 'Wil',
    options: ['Wil', 'GuiGui', 'Frogzin', 'Wilgner', 'O Rapaz sem camisa'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/f10cb89a99bc7efa215302fd185ac4dd86b051c1/gift-family/src/RenderQuestions/imgs/gift11.jpg?raw=true',
    giftText: '@frog.wil'
  },
  // Okay
  {
    question: 'Qual o Emote mais usado na live até o momento ?',
    answer: 'lul',
    options: ['lul','nixnycLove', 'yayahRojão', 'kappa', 'cazeSPFC'],
    gift: 'https://cdn.vox-cdn.com/thumbor/tYW7_2OBEsfJ3BKsdq_fCLYG5Vk=/0x0:722x800/1200x0/filters:focal(0x0:722x800):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10838093/LUL.jpg',
    giftText: 'Pq Rafa/Teteu gostam tanto disso ?'
  },
  // Okay
  {
    question: 'Qual o jogo proibido ?',
    answer: 'Roblox',
    options: ['Terraria', 'Roblox', 'MineCraft', 'Fortnite', 'Stop'],
    gift: 'https://i.pinimg.com/736x/d2/0f/b9/d20fb9dcc0cc24df7266ba9c602006ff.jpg',
    giftText: 'Queria um pó'
  },
  // Okay
  {
    question: 'Qual a bebida favorita do Lucase ?',
    answer: 'Fanta ?',
    options: ['Leitinho ?', 'Coquinha ?', 'Meu Leitinho ?', 'Leitinho Quente ?', 'Fanta ?'],
    gift: 'https://img.ifunny.co/images/d44c1c0df5330cab7158b40a95271f1b90c4bb57cfed42fb3d81d3cf9c8e945e_1.jpg',
    giftText: 'Será q diminui mais ?'
  },
  // Okay
  {
    question: 'O que o Rafa mais gostaria de ter ?',
    answer: 'Bigode',
    options: ['Bong', 'Maconha sem fim', 'Bigode', 'Yayah', 'Biel'],
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/cad112a38d02d1b445585fa95be58ccd7dd04543/gift-family/src/RenderQuestions/imgs/gift4.jpg?raw=true',
    giftText: 'O Bigodin brabo'
  },
  // Okay
  {
    question: 'Para comemorar a pergunta de número 13, responda corretamente',
    answer: 'Lula 2022',
    options: ['Lula 2022'],
    gift: 'https://static.poder360.com.br/2021/03/Ev-0UmOXMA0R7XU.jpeg',
    giftText: 'O Pai fodace'
  },
  // Okay
  {
    question: 'Meu bem ?',
    answer: 'Luiza',
    options: ['Leozin', 'Luiza', 'Fuher', 'Mat(h)eus', 'Hector'],
    egg: 'Quem é Hector, Lorrany ?',
    eggOption: 'Hector',
    gift: 'https://github.com/joeydoesntsharefood/GiftFamilyNigth/blob/f10cb89a99bc7efa215302fd185ac4dd86b051c1/gift-family/src/RenderQuestions/imgs/gift10.png?raw=true',
    giftText: 'Luizaaaaaaaaaaaaaaaaaaaaaa'
  },
  // Okay
  {
    question: 'Fala a maneira mais propria e correta de dizer um bom "Te amo"',
    answer: 'Vai tomar no seu cu',
    options: ['Vai tomar no seu cu', 'Te amo', 'Amo Tu', 'Ownnnnt', 'Amo você'],
    gift: 'https://s3.memeshappen.com/memes/i-hate-you--meme-10008.jpg',
    giftText: 'N é meme'
  }
]

export default Questions