import { useEffect, useState } from 'react'
function Final (props: any) {
  const [render, setRender] = useState<boolean>(false)
  useEffect(() => {
    if (props.render) {
      setRender(props.render)
    }
  }, [props.render])
  return (
    <>
      {render && <>
        <h1 style={{color: '#fff'}}>Bem vindo 2022</h1>
        <p style={{textAlign: 'justify', fontSize: 20, color: '#fff'}}>
          Olá Lorrany, sou eu do passado, dizendo e escrevendo enquanto vejo uma live aleatória da Bagi
          e penso o namorado dela é insuportavel, porém isso não é sobre o namorado insuportavel da Bagi.
          Mas vamos lá, tudo bem ? Responde faz o favo. Mas então espero que bem, penso que mtas coisas que aconteceram
          em 2021, foram sim horriveis e de mta formas dificeis de lidar, porém acredito que foi um ensinamento ou
          o universo dizendo aos poucos, você não pode ter tanta felicidade na sua vida Lorrany. A felicidade sou eu ser seu amigo.
          Esse é um presente, para todos não somente para você, para que um dia no futuro, possamos lembrar desse ciclo e pensar,
          o quão importante foi para todos, o tanto que as nossas noite e madrugada foram importantes e nos ajudaram em tempos,
          dificeis, acredito que estou falando por todos, que digo, você é o ínicio e possivelmente vai ser o fio desse ciclo,
          porém eu não fico triste em saber que pode ter um fio, pois tudo o que encontrei aqui foi alegria e amizades que irei
          levar para uma vida, agradeço todos os dias conhecer cada um de vocês, sou insuportavel as vezes possivelmente nesse momento eu possa estar pensando
          vou mandar você a merda só para você lembrar que pode contar comigo, enfim, Lorrany Pallone, parabéns, sim não é seu aniversário,
          mas hoje é um ano novo para ti e você merece todos os ser parabenizada pela pessoa que você é, obrigado por salvar os meus dias e em
          partes a minha vida, amo tu idiota.
        </p>
      </>}
    </>
  )
}

export default Final