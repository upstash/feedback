import IconClose from './icon-close'
import FeedbackContext from './store'
import { useContext } from 'react'

export default function FeedbackModal() {
  const {
    isModalShow,
    setIsModalShow,

    formUser,
    setFormUser,
    formMessage,
    setFormMessage,

    isSending,
    onSend,

    user,
  } = useContext(FeedbackContext)

  if (!isModalShow) return null

  return (
    <div className="absolute z-50 left-0 top-0 w-[340px] max-w-[100%] bg-gray-200 p-4 rounded shadow-2xl">
      <header className="flex items-center mb-4">
        <h5 className="flex-grow font-semibold text-base">Feedback</h5>
        <button
          className="text-gray-400 transition hover:text-gray-900"
          onClick={() => setIsModalShow(false)}
        >
          <IconClose size={20} />
        </button>
      </header>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          onSend()
        }}
      >
        {!user && (
          <div>
            <input
              className="block w-full p-2 rounded"
              type="email"
              name="email"
              required
              value={formUser}
              onInput={({ target }) => setFormUser(target.value)}
            />
          </div>
        )}
        <div>
          <textarea
            className="block p-2 rounded w-full resize-none"
            name="message"
            rows="3"
            required
            value={formMessage}
            onInput={({ target }) => setFormMessage(target.value)}
          />
        </div>
        <div>
          <button
            className="block p-2 bg-blue-600 text-white rounded w-full resize-none
              hover:bg-blue-700
              active:bg-blue-800
              disabled:bg-blue-300"
            disabled={isSending}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
