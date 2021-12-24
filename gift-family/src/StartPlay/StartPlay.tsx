import { useState } from 'react'
import { Button } from 'antd'
import RenderQuestions from '../RenderQuestions/RenderQuestions'

function StartPlay () {
  const [play, setPlay] = useState<boolean>(false)
  return (
    <>
      {!(play) && <div>
        <h1>Bora jogar ?</h1>
        <Button onClick={() => setPlay(true)}>Clique Aqui</Button>
      </div>}
      {play && <div>
        <RenderQuestions />
      </div>}
    </>
  )
}

export default StartPlay