import IconClose from './icon-close'
import { FeedbackContext } from './form'
import React, { useContext } from 'react'
import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalForm,
  ModalFormInput,
} from './styles'

export default function FeedbackModal() {
  const {
    isModalShow,
    setIsModalShow,

    formUser,
    setFormUser,
    formMessage,
    setFormMessage,

    isSending,
    onSend,

    isHasUser,
  } = useContext(FeedbackContext)

  if (!isModalShow) return null

  return (
    <ModalContainer>
      <ModalHeader>
        <ModalTitle>Feedback</ModalTitle>
        <ModalCloseButton onClick={() => setIsModalShow(false)}>
          <IconClose size={20} />
        </ModalCloseButton>
      </ModalHeader>

      <ModalForm
        onSubmit={(e) => {
          e.preventDefault()
          onSend()
        }}
      >
        {!isHasUser && (
          <div>
            <ModalFormInput
              type="email"
              name="email"
              placeholder="Email"
              value={formUser}
              required
              onChange={(event: React.ChangeEvent) =>
                setFormUser((event.target as HTMLInputElement).value)
              }
            />
          </div>
        )}
        <div>
          <ModalFormInput
            as="textarea"
            tag="textarea"
            name="message"
            placeholder="Message"
            rows={3}
            required
            value={formMessage}
            onChange={(event: React.ChangeEvent) =>
              setFormMessage((event.target as HTMLInputElement).value)
            }
          />
        </div>
        <div>
          <ModalFormInput
            type="submit"
            as="button"
            tag="button"
            disabled={isSending}
          >
            Send
          </ModalFormInput>
        </div>
      </ModalForm>
    </ModalContainer>
  )
}
