# Feedback Widget

--summary--

![](screenshot.png)

## 1. Frontend

Install feedback package

```bash
npm install @upstash/feedback
```

Import css and component file

```js
// pages/_app.js

import '@upstash/feedback/dist/style.css'
import FeedbackWidget from '@upstash/feedback'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <FeedbackWidget />
      <Component {...pageProps} />
    </>
  )
}
```

The options can be passed into genConfig or as React props

| key           | type               | default        | accept                 |
|---------------| ------------------ | -------------- | ---------------------- |
| `user?`       | string             |                |                        |
| `metadata?`   | object             | null           |                        |
| `type?`       | string             | "form"         | 'form', 'rate', 'full' |
| `apiPath?`    | string             | 'api/feedback' |                        |
| `themeColor?` | string             | '#5f6c72'      |                        |
| `textColor?`  | string             | '#ffffff'      |                        |
| `children?`   | React.ReactElement |                |                        |

## 2. Backend

Install redis package

```bash
npm install @upstash/redis
```

Create API

```js
// pages/api/feedback.js

import upstash from '@upstash/redis'

const redis = upstash('UPSTASH_REDIS_REST_URL', 'UPSTASH_REDIS_REST_TOKEN')

export default async function FeedbackWidgetAPI(req, res) {
  try {
    const { error } = await hset('feedback', Date.now(), req.body)
    if (error) throw error

    return res.status(200).json({ message: 'success' })
  } catch (err) {
    return res.status(400).json({ message: err })
  }
}
```

> `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` find the variables in the database details page in Upstash Console.
