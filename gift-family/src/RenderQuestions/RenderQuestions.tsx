import React, {useState, useEffect} from 'react'
import { Button, Form, Radio, Space } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import Questions,{ IQuestion }from '../Questions/Questions'
import './RenderQuestions.css'

function RenderQuestions() {
  const [answer, setAnswer] = useState<string>()
  const [question, setQuestion] = useState<string>()
  const [options, setOptions] = useState<string[]>()
  const [correct, setCorrect] = useState<boolean>()
  const [questionPage, setQuestionPage] = useState<number>(0)
  const [form] = Form.useForm()
  const [answersCorrect, setanswersCorrect] = useState<number>(0)
  useEffect(() => {
    setOptions(Questions[questionPage].options)
    setQuestion(Questions[questionPage].question)
    setAnswer(Questions[questionPage].answer)
  }, [questionPage])
  function resetQuestionPage () {
    setQuestionPage((prev: number) => prev + 1)
    setCorrect(false)
    form.resetFields()
  }
  function testing (e: IQuestion) {
    if (e.answer) {
      if (e.answer === answer) {
        console.log('Sua resposta esta correta')
        setanswersCorrect((prev: number) => prev + 1)
        setCorrect(true)
      } else {
        console.log('Sua resposta esta errada')
      }
    } else {
      console.log('Escolha uma alternativa')
    }
  }
  return (
    <div>
      <p className='p-count'>{answersCorrect} / {Questions.length}</p>
      <Form
        form={form}
        onFinish={e => testing(e)}
      >
        <Form.Item
          label={<h1>{question}</h1>}
          name='answer'
        >
          <Radio.Group
            buttonStyle='solid'
            optionType='button'
            options={
              options && options.map((item: string) => ({
                label: item,
                value: item,
                className: 'options'
              }))
            }
          >
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button
          type="primary"
          htmlType="submit"
          className='button-request'
          >
            Confirmar Resposta
          </Button>
        </Form.Item>
      </Form>
      {correct && <RightOutlined onClick={() => resetQuestionPage()}/>}
    </div>
  )
}

export default RenderQuestions
