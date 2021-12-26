import { useState } from 'react'
import { Button } from 'antd'
import RenderQuestions from '../RenderQuestions/RenderQuestions'
import './StartPlay.css'
function StartPlay () {
  const [play, setPlay] = useState<boolean>(false)
  return (
    <div className='full-size-display'>
      {!(play) && <div className='div-playground'>
        <h1 className='h1-lets-play'>Bora jogar ?</h1>
        <Button onClick={() => setPlay(true)} className='button-lets-play'>Clique Aqui</Button>
      </div>}
      {play && <div className='div-playground'>
        <RenderQuestions />
      </div>}
    </div>
  )
}

export default StartPlay