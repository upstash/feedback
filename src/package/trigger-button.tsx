import React, { useContext } from 'react'
import FeedbackContext from './store'
import IconDefault from './icon-default'
import styles from './styles.module.css'
import IconClose from './icon-close'

export default function TriggerButton({
  children,
}: {
  children?: React.ReactElement
}) {
  const { isModalShow, onModalShow, textColor } = useContext(FeedbackContext)

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
          <IconClose color={textColor} size={30} />
        </>
      ) : (
        <>{children ? children : <IconDefault color={textColor} />}</>
      )}
    </button>
  )
}
