import FeedbackContext from './store'
import React, { useContext } from 'react'
import styles from './styles.module.css'
import FeedbackModalElementRate from './modal-element-rate'
import EmojiSad from './emoji-sad'
import EmojiNice from './emoji-nice'
import EmojiMeh from './emoji-meh'

export default function FeedbackModal({
  title,
  description,
}: {
  title?: null | string | React.ReactElement
  description?: null | string | React.ReactElement
}) {
  const {
    isModalShow,
    onModalShow,

    formUser,
    onChangeFormUser,
    formMessage,
    onChangeFormMessage,
    formRate,
    onChangeFormRate,

    isSending,
    onSend,

    isHasUser,
    type,
  } = useContext(FeedbackContext)

  if (!isModalShow) return null

  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        {title && <h3 className={styles.modalTitle}>{title}</h3>}
        <p>{description}</p>
      </header>

      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault()
          onSend()
        }}
      >
        {!isHasUser && (
          <div>
            <input
              className={styles.formElement}
              type="email"
              name="email"
              placeholder="Email"
              value={formUser}
              required
              onChange={(event: React.ChangeEvent) =>
                onChangeFormUser((event.target as HTMLInputElement).value)
              }
            />
          </div>
        )}

        {['full', 'form'].includes(type) && (
          <div>
            <textarea
              className={styles.formElementTextarea}
              name="message"
              placeholder="Message"
              rows={3}
              required
              value={formMessage}
              onChange={(event: React.ChangeEvent) =>
                onChangeFormMessage((event.target as HTMLInputElement).value)
              }
            />
          </div>
        )}

        {['full', 'rate'].includes(type) && (
          <div>
            <div className={styles.rateContainer}>
              <FeedbackModalElementRate
                value="bad"
                selected={formRate}
                onChange={onChangeFormRate}
              >
                <EmojiSad />
              </FeedbackModalElementRate>
              <FeedbackModalElementRate
                value="meh"
                selected={formRate}
                onChange={onChangeFormRate}
              >
                <EmojiMeh />
              </FeedbackModalElementRate>
              <FeedbackModalElementRate
                value="nice"
                selected={formRate}
                onChange={onChangeFormRate}
              >
                <EmojiNice />
              </FeedbackModalElementRate>
            </div>
          </div>
        )}

        <div>
          <button
            className={styles.formElementButton}
            type="submit"
            disabled={isSending}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
