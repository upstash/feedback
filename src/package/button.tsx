import React, { useContext } from 'react'
import FeedbackContext from './store'

export default function TriggerButton({
  children,
}: {
  children: React.ReactElement
}) {
  const { isModalShow, onModalShow } = useContext(FeedbackContext)
  const { onClick, ...prevProps } = children.props

  return React.cloneElement(children, {
    type: 'button',
    onClick: () => onModalShow(!isModalShow),
    ...prevProps,
  })
}
