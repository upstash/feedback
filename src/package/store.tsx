import React, { createContext, useState } from 'react'

const defaultState = {
  isModalShow: false,
  onModalShow: (state: boolean) => {},

  formUser: '',
  onChangeFormUser: (value: string) => {},
  formMessage: '',
  onChangeFormMessage: (value: string) => {},

  isSending: false,
  onSend: () => {},

  isHasUser: false,
}

const FeedbackContext = createContext(defaultState)

export function FeedbackProvider({
  children,
  user,
  metadata,
}: {
  children: React.ReactElement
  user?: string
  metadata?: object
}) {
  const [isModalShow, setIsModalShow] = useState(false)

  const [formUser, setFormUser] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [isSending, setIsSending] = useState(false)

  const isHasUser = !!user

  const onSend = async () => {
    try {
      setIsSending(true)
      await fetch('/api/feedback', {
        method: 'post',
        body: JSON.stringify({
          user: user || formUser,
          message: formMessage,
          metadata,
        }),
      })
      // upstash is very fast. need to slow down a bit for the user to believe
      await new Promise((r) => setTimeout(r, 600))
      setFormUser('')
      setFormMessage('')
      setIsModalShow(false)
    } catch (err) {
      alert(err)
    } finally {
      setIsSending(false)
    }
  }

  const onModalShow = (status: boolean) => {
    setIsModalShow(status)
  }

  const onChangeFormUser = (value: string) => {
    setFormUser(value)
  }

  const onChangeFormMessage = (value: string) => {
    setFormMessage(value)
  }

  return (
    <FeedbackContext.Provider
      value={{
        isModalShow,
        onModalShow,

        formUser,
        onChangeFormUser,
        formMessage,
        onChangeFormMessage,

        isSending,
        onSend,

        isHasUser,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
