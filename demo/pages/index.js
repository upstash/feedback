import FeedbackWidget from '@upstash/feedback'
import { useState } from 'react'
import IconDefault from '../components/icon-default'
import IconSimple from '../components/icon-simple'
import IconSquare from '../components/icon-square'

export default function IndexPage() {
  const [type, setType] = useState('full')
  const [themeColor, setThemeColor] = useState('#232323')
  const [textColor, setTextColor] = useState('#ffffff')
  const [icon, setIcon] = useState('default')
  const [user, setUser] = useState('')
  const [title, setTitle] = useState('Hi 👋')
  const [description, setDescription] = useState('Have feedback? We\\\'d love to hear it')
  const [showOnInitial, setShowOnInitial] = useState(true)

  return (
    <div className="p-10">
      <header className="mb-10 space-y-1">
        <h1 className="text-3xl font-bold">
          <a
            className="inline-flex items-center space-x-2 hover:underline"
            href="https://github.com/upstash/feedback"
            target="_blank"
          >
            <svg
              width="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
            <span>upstash/feedback</span>
          </a>
        </h1>
        <p className="text-gray-600">
          A simple feedback widget for your website.
        </p>
      </header>

      <div className="grid grid-cols-2 w-fit gap-x-4 gap-y-2 p-6 bg-gray-100 rounded-xl">
        <span>title</span>

        <input
          className="form-input w-full"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <span>description</span>

        <input
          className="form-input w-full"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="col-span-2 py-1" />

        <span>showOnInitial</span>

        <input
          className="form-checkbox"
          type="checkbox"
          checked={showOnInitial}
          onChange={(e) => setShowOnInitial(e.target.checked)}
        />

        <div className="col-span-2" />

        <span>type</span>

        <div className="flex items-center space-x-4 py-2">
          {['full', 'form', 'rate'].map((key) => (
            <label key={key} className="inline-flex items-center space-x-2">
              <input
                className="form-radio"
                type="radio"
                name="type"
                value={key}
                checked={type === key}
                onChange={(e) => setType(e.target.value)}
              />
              <span>{key}</span>
            </label>
          ))}
        </div>

        <span>themeColor</span>

        <input
          className="w-full h-12"
          type="color"
          value={themeColor}
          onChange={(e) => setThemeColor(e.target.value)}
        />

        <span>textColor</span>

        <input
          className="w-full h-12"
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />

        <span>icon</span>

        <div className="flex items-center space-x-4 py-2">
          {['default', 'simple'].map((key) => (
            <label key={key} className="inline-flex items-center space-x-2">
              <input
                className="form-radio"
                type="radio"
                name="icon"
                value={key}
                checked={icon === key}
                onChange={(e) => setIcon(e.target.value)}
              />{' '}
              {key === 'default' && <span>Default</span>}
              {key === 'simple' && <span>Custom SVG</span>}
            </label>
          ))}
        </div>

        <span>user</span>

        <input
          className="form-input w-full"
          placeholder="optional"
          type="email"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>

      <pre className="mt-8 p-6 bg-gray-100 rounded-xl">
        {`<FeedbackWidget
  type="${type}",
  themeColor="${themeColor}",
  title=${title === '' ? '{null}' : `"${title}"`},
  description=${description === '' ? '{null}' : `"${description}"`},
  textColor="${textColor}",${
          showOnInitial
            ? `
  showOnInitial="${showOnInitial}"`
            : ''
        },${
          user
            ? `
  user="${user}"`
            : ''
        }
  metadata={{ page: "index", location: "Palo Alto, CA" }}
${icon === 'default' ? '/>' : '>'}
  ${
    icon === 'simple'
      ? `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    color="${textColor}"
    fill="currentColor"
    viewBox="0 0 256 256">
      <path
        d="M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="14"/>
    </svg>\n<FeedbackWidget/>`
      : ''
  }${
          icon === 'square'
            ? `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    color="${textColor}"
    fill="currentColor"
    viewBox="0 0 256 256">
      <path
        d="M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="14"/>
    </svg>\n<FeedbackWidget/>`
            : ''
        }`}
      </pre>

      <FeedbackWidget
        user={user}
        type={type}
        themeColor={themeColor}
        textColor={textColor}
        metadata={{ page: 'index', location: 'Palo Alto, CA' }}
        showOnInitial={showOnInitial}
        title={title}
        description={description}
      >
        {icon === 'simple' && <IconSimple color={textColor} />}
        {icon === 'square' && <IconSquare color={textColor} />}
        {icon === 'default' && <IconDefault color={textColor} />}
      </FeedbackWidget>
    </div>
  )
}
