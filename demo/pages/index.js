import FeedbackWidget from '@upstash/feedback'
import { useState } from 'react'
import IconDefault from '../components/icon-default'
import IconSimple from '../components/icon-simple'
import IconSquare from '../components/icon-square'

export default function IndexPage() {
  const [type, setType] = useState('full')
  const [themeColor, setThemeColor] = useState('#5f6c72')
  const [textColor, setTextColor] = useState('#ffffff')
  const [icon, setIcon] = useState('default')
  const [user, setUser] = useState('')

  return (
    <div className="p-10">
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-fit p-6 bg-gray-100">
        <span>type</span>

        <div className="flex items-center space-x-4">
          {['full', 'form', 'rate'].map((key) => (
            <label key={key}>
              <input
                type="radio"
                name="type"
                value={key}
                checked={type === key}
                onChange={(e) => setType(e.target.value)}
              />{' '}
              {key}
            </label>
          ))}
        </div>

        <span>themeColor</span>

        <input
          type="color"
          value={themeColor}
          onChange={(e) => setThemeColor(e.target.value)}
        />

        <span>textColor</span>

        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />

        <span>icon</span>

        <div className="flex items-center space-x-4">
          {['default', 'simple', 'square'].map((key) => (
            <label key={key} className="flex items-center">
              <input
                type="radio"
                name="icon"
                value={key}
                checked={icon === key}
                onChange={(e) => setIcon(e.target.value)}
              />{' '}
              {key === 'default' && <IconDefault size={30} color="#000" />}
              {key === 'simple' && <IconSimple size={30} color="#000" />}
              {key === 'square' && <IconSquare size={30} color="#000" />}
            </label>
          ))}
        </div>

        <span>user</span>

        <input
          placeholder="optional"
          type="email"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>

      <pre className="mt-8 p-6 bg-gray-100">
        {`<FeedbackWidget
  type="${type}",
  themeColor="${themeColor}",
  textColor="${textColor}",${
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
      >
        {icon === 'simple' && <IconSimple color={textColor} />}
        {icon === 'square' && <IconSquare color={textColor} />}
        {icon === 'default' && <IconDefault color={textColor} />}
      </FeedbackWidget>
    </div>
  )
}
