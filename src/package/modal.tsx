import IconClose from './icon-close'
import FeedbackContext from './store'
import React, { useContext } from 'react'
import styles from './styles.module.css'
import FeedbackModalElementRate from './modal-element-rate'
import IconEmojiBad from './icon-emoji-bad'
import IconEmojiNice from './icon-emoji-nice'
import IconEmojiMeh from './icon-emoji-meh'

export default function FeedbackModal() {
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
        <h5 className={styles.modalTitle}>Feedback</h5>
        <button
          className={styles.modalCloseButton}
          onClick={() => onModalShow(false)}
        >
          <IconClose size={20} />
        </button>
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
                <IconEmojiBad />
              </FeedbackModalElementRate>
              <FeedbackModalElementRate
                value="meh"
                selected={formRate}
                onChange={onChangeFormRate}
              >
                <IconEmojiMeh />
              </FeedbackModalElementRate>
              <FeedbackModalElementRate
                value="nice"
                selected={formRate}
                onChange={onChangeFormRate}
              >
                <IconEmojiNice />
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
