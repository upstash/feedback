import React, { useContext } from 'react'
import { FeedbackContext } from './form'

export default function TriggerButton({
  children,
}: {
  children: React.ReactElement
}) {
  const { isModalShow, setIsModalShow } = useContext(FeedbackContext)

  const { onClick, ...prevProps } = children.props

  return React.cloneElement(children, {
    type: 'button',
    onClick: () => setIsModalShow(!isModalShow),
    ...prevProps,
  })
}
