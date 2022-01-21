import { createContext, useState } from 'react'

const FeedbackContext = createContext(null)

export function FeedbackProvider({ user, metadata, children }) {
  const [isModalShow, setIsModalShow] = useState(false)

  const [formUser, setFormUser] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [isSending, setIsSending] = useState(false)

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

        user,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
