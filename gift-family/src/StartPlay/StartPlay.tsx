import { useState } from 'react'
import { Button } from 'antd'
import RenderQuestions from '../RenderQuestions/RenderQuestions'
import './StartPlay.css'

function StartPlay () {
  const [play, setPlay] = useState<boolean>(false)
  return (
    <>
      {!(play) && <div className='div-playground'>
        <h1>Bora jogar ?</h1>
        <Button onClick={() => setPlay(true)}>Clique Aqui</Button>
      </div>}
      {play && <div className='div-playground'>
        <RenderQuestions />
      </div>}
    </>
  )
}

export default StartPlay