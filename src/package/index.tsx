import React from 'react'
import FeedbackModal from './modal'
import TriggerButton from './trigger-button'
import { FeedbackProvider } from './store'
import styles from './styles.module.css'

export default function FeedbackWidget({
  children,
  user,
  metadata,
  type = 'form',
  apiPath = 'api/feedback',
}: {
  user?: string
  metadata?: object
  children?: React.ReactElement
  type?: 'form' | 'rate' | 'full'
  apiPath?: string
}) {
  return (
    <FeedbackProvider
      user={user}
      metadata={metadata}
      type={type}
      apiPath={apiPath}
    >
      <div className={styles.root}>
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
