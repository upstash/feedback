import React from 'react'
import FeedbackModal from './modal'
import TriggerButton from './trigger-button'
import { FeedbackProvider } from './store'
import styles from './styles.module.css'

export default function FeedbackWidget({
  children,
  user,
  metadata,
}: {
  user?: string
  metadata?: object
  children?: React.ReactElement
}) {
  return (
    <FeedbackProvider user={user} metadata={metadata}>
      <div className={styles.feedbackRoot}>
        {children ? (
          <TriggerButton>{children}</TriggerButton>
        ) : (
          <TriggerButton>
            <button>missing button</button>
          </TriggerButton>
        )}
        <FeedbackModal />
      </div>
    </FeedbackProvider>
  )
}
