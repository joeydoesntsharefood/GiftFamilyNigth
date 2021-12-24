import React, {useState, useEffect} from 'react'
import { Button, Form, Radio } from 'antd'
import Questions,{ IQuestion }from '../Questions/Questions'
import './App.css'

function RenderQuestions() {
  const [answer, setAnswer] = useState<string>()
  const [question, setQuestion] = useState<string>()
  const [options, setOptions] = useState<string[]>()
  useEffect(() => {
    setOptions(Questions[0].options)
    setQuestion(Questions[0].question)
    setAnswer(Questions[0].answer)
  }, [])
  function testing (e: IQuestion) {
    if (e.answer) {
      if (e.answer === answer) {
        console.log('Sua resposta esta correta')
      } else {
        console.log('Sua resposta esta errada')
      }
    } else {
      console.log('Escolha uma alternativa')
    }
  }
  return (
    <>
      <Form
        onFinish={e => testing(e)}
      >
        <Form.Item
          label={<h1>{question}</h1>}
          name='answer'
        >
          <Radio.Group>
            {options && options.map((item: string) => <Radio value={item}>{item}</Radio>)}
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button
          type="primary"
          htmlType="submit"
          >
            Confirmar Resposta
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default RenderQuestions
