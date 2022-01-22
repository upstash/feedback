import React, { createContext, useState } from 'react'
import FeedbackModal from './modal'
import TriggerButton from './button'

export const FeedbackContext = createContext({
  isModalShow: false,
  setIsModalShow: (state: boolean) => {},

  formUser: '',
  setFormUser: (value: string) => {},
  formMessage: '',
  setFormMessage: (value: string) => {},

  isSending: false,
  onSend: () => {},

  isHasUser: false,
})

export default function FeedbackForm({
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

  return (
    <FeedbackContext.Provider
      value={{
        isModalShow,
        setIsModalShow,

        formUser,
        setFormUser,
        formMessage,
        setFormMessage,

        isSending,
        onSend,

        isHasUser,
      }}
    >
      <div className="relative">
        <TriggerButton>{children}</TriggerButton>
        <FeedbackModal />
      </div>
    </FeedbackContext.Provider>
  )
}
