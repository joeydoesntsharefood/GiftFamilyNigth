import React, {useState, useEffect} from 'react'
import { Alert, Button, Form, Image, Radio, Space } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import Questions,{ IQuestion }from '../Questions/Questions'
import './RenderQuestions.css'
import Video from '../Video/Video'
import Final from '../Final/Final'

function RenderQuestions() {
  const [answer, setAnswer] = useState<string>()
  const [question, setQuestion] = useState<string>()
  const [options, setOptions] = useState<string[]>()
  const [correct, setCorrect] = useState<boolean>()
  const [questionPage, setQuestionPage] = useState<number>(0)
  const [giftImg, setGiftImg] = useState<string>('')
  const [giftText, setGiftText] = useState<any>()
  const [form] = Form.useForm()
  const [answersCorrect, setanswersCorrect] = useState<number>(0)
  const [giftVisible, setGiftVisible] = useState<boolean>()
  const [erro, setErro] = useState<boolean>(false)
  const [textErro, setTextErro] = useState<string>('')
  const [video, setVideo] = useState<boolean>(false)
  const [videoMute, setVideoMute] = useState<boolean>(false)
  const [final, setFinal] = useState<number>(0)
  const [egg, setEgg] = useState<any>()
  const [eggOption, setEggOption] = useState<any>()
  useEffect(() => {
    setOptions(Questions[questionPage].options)
    setQuestion(Questions[questionPage].question)
    setAnswer(Questions[questionPage].answer)
    setGiftImg(Questions[questionPage].gift)
    setGiftText(Questions[questionPage].giftText)
    setFinal(Questions.length)
    if (Questions[questionPage].video) {
      setVideo(true)
      if (Questions[questionPage].videoMute) {
        setVideoMute(true)
      }
    }
    if (Questions[questionPage].egg) {
      setEgg(Questions[questionPage].egg)
      setEggOption(Questions[questionPage].eggOption)
    }
  }, [questionPage])
  function resetQuestionPage () {
    setQuestionPage((prev: number) => prev + 1)
    setCorrect(false)
    form.resetFields()
    setErro(false)
    setVideo(false)
    setVideoMute(false)
    setEgg('')
    setEggOption('')
  }
  function testing (e: IQuestion) {
    if (e.answer) {
      if (e.answer === answer) {
        setanswersCorrect((prev: number) => prev + 1)
        setCorrect(true)
      } else {
        setErro(true)
        setTextErro('Erou tapada')
      }
    } else {
      setErro(true)
      setTextErro('Escolhe uma opção tapada')
    }
  }

  return (
    <>
      {final === answersCorrect && <div>
        <Final render={(final === answersCorrect)}/>
      </div>}
      {!(final === answersCorrect) && <div>
        {erro && <Alert message={textErro} type="error" className='erro-alert'/>}
        {!(giftVisible) && <p className='p-count'>{answersCorrect} / {Questions.length}</p>}
        {!(giftVisible) && <Form
          form={form}
          onFinish={e => testing(e)}
        >
          <Form.Item
            label={<h1 className='h1-question'>{question}</h1>}
            name='answer'
          >
            <Radio.Group
              buttonStyle='solid'
              optionType='button'
            >
              {options && options.map((item: string) =>
                <Radio value={item} className='options'>{item}</Radio>
              )}
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
        </Form>}
        {giftVisible && <div>
          <p className='p-gift'>{giftText}</p>
          {!(video) && <Image
            src={giftImg}
            className='img-gift'
            preview={false}
          />}
          {video && <Video url={giftImg} mute={videoMute}/>}
          <RightOutlined style={{color: '#fff', width: 30 }} onClick={() => {
              resetQuestionPage()
              setGiftVisible(false)
            }}/>
        </div>}
        {(correct && !(giftVisible)) &&
        <>
          <h1 style={{color: '#fff'}}>Resposta Certa !</h1>
          <Space direction='horizontal'>
          <RightOutlined style={{color: '#fff', width: 30 }} onClick={() => {
                setGiftVisible(true)
                setErro(false)
              }}/>
          </Space>
        </>
        }
      </div>}
    </>
  )
}

export default RenderQuestions
