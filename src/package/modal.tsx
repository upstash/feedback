import IconClose from './icon-close'
import FeedbackContext from './store'
import React, { useContext } from 'react'
import styles from './styles.module.css'

export default function FeedbackModal() {
  const {
    isModalShow,
    onModalShow,

    formUser,
    onChangeFormUser,
    formMessage,
    onChangeFormMessage,

    isSending,
    onSend,

    isHasUser,
  } = useContext(FeedbackContext)

  if (!isModalShow) return null

  return (
    <div className={styles.feedbackContainer}>
      <header className={styles.feedbackHeader}>
        <h5 className={styles.feedbackTitle}>Feedback</h5>
        <button
          className={styles.feedbackCloseButton}
          onClick={() => onModalShow(false)}
        >
          <IconClose size={20} />
        </button>
      </header>

      <form
        className={styles.feedbackForm}
        onSubmit={(e) => {
          e.preventDefault()
          onSend()
        }}
      >
        {!isHasUser && (
          <div>
            <input
              className={styles.feedbackFormElement}
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
        <div>
          <textarea
            className={styles.feedbackFormElementTextarea}
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
        <div>
          <button
            className={styles.feedbackFormElementButton}
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
