import React, { useContext } from 'react'
import FeedbackContext from './store'
import IconDisplay from './icon-display'
import styles from './styles.module.css'
import IconClose from './icon-close'

export default function TriggerButton({
  children,
}: {
  children?: React.ReactElement
}) {
  const { isModalShow, onModalShow } = useContext(FeedbackContext)

  return (
    <button
      type="button"
      className={styles.triggerButton}
      onClick={() => {
        onModalShow(!isModalShow)
      }}
    >
      {isModalShow ? (
        <>
          <IconClose size={30} />
        </>
      ) : (
        <>{children ? { children } : <IconDisplay />}</>
      )}
    </button>
  )
}
