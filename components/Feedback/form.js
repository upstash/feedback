import React, { useContext } from 'react'
import FeedbackModal from './modal'
import FeedbackContext, { FeedbackProvider } from './store'

function FeedbackFormContent({ triggerButton }) {
  const { setIsModalShow } = useContext(FeedbackContext)

  const TriggerButton = () => {
    const { className, onClick, ...prevProps } = triggerButton.props

    return React.cloneElement(triggerButton, {
      type: 'button',
      className: 'py-1 px-3 bg-gray-300 rounded cursor-text ' + className,
      onClick: () => setIsModalShow((prevState) => !prevState),
      ...prevProps,
    })
  }

  return (
    <div className="relative">
      <TriggerButton />
      <FeedbackModal />
    </div>
  )
}

export default function FeedbackForm({ children, user, metadata }) {
  return (
    <FeedbackProvider user={user} metadata={metadata}>
      <FeedbackFormContent triggerButton={children} />
    </FeedbackProvider>
  )
}
