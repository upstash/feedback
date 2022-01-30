import React from 'react'
import FeedbackModal from './modal'
import TriggerButton from './trigger-button'
import { FeedbackProvider } from './store'
import styles from './styles.module.css'

export default function FeedbackWidget({
  user,
  metadata,
  type = 'form',
  apiPath = 'api/feedback',
  themeColor = '#1f5a68',
  textColor = '#fff',
  icon,
}: {
  user?: string
  metadata?: object
  type?: 'form' | 'rate' | 'full'
  apiPath?: string
  themeColor?: string
  textColor?: string
  icon?: React.ReactElement
}) {
  return (
    <FeedbackProvider
      user={user}
      metadata={metadata}
      type={type}
      apiPath={apiPath}
    >
      <div
        className={styles.root}
        style={{
          // @ts-ignore
          '--color-primary': themeColor,
          '--color-text': textColor,
        }}
      >
        <TriggerButton>{icon}</TriggerButton>
        <FeedbackModal />
      </div>
    </FeedbackProvider>
  )
}
