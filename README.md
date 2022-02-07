# Feedback Widget for Next.js

Create a Feedback Widget for your Next.js site with two steps. See [the demo](https://upstash-feedback-widget.vercel.app/)


<img src="screenshot.png" width="100%" >

## 1. Frontend

Install @upstash/feedback:

```bash
npm install @upstash/feedback
```

Import css and component:

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

The options can be passed as React props

| key            | type                         | default        | accept                 |
| -------------- | ---------------------------- | -------------- | ---------------------- |
| `user?`        | string                       |                |                        |
| `metadata?`    | object                       | null           |                        |
| `type?`        | string                       | "form"         | 'form', 'rate', 'full' |
| `apiPath?`     | string                       | 'api/feedback' |                        |
| `themeColor?`  | string                       | '#5f6c72'      |                        |
| `textColor?`   | string                       | '#ffffff'      |                        |
| `title`        | string, React.ReactElement |                |                        |
| `description`  | string, React.ReactElement |                |                        |
| `showOnInitial?` | boolean                      | false          |                        |
| `children?`    | React.ReactElement           |                |                        |

## 2. Backend

The data will be kept at [Upstash Redis](https://upstash.com). Create a free Redis database at [Upstash Console](https://console.upstash.com)          
  
Install @upstash/redis:

```bash
npm install @upstash/redis
```

Create API:

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

> `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` find these in the database details page in Upstash Console.

## Data Administration

The submitted forms can be managed on [Upstash Console Integrations](https://console.upstash.com/integration/feedback) page.


