# Feedback Widget

--summary--

## 1. Frontend

Install feedback package

```bash
npm install @upstash/feedback
```

Import css file

```js
// pages/_app.js

import '@upstash/feedback/dist/style.css'
```

Import feedback component

```js
// pages/index.js

import FeedbackWidget from '@upstash/feedback'

export default function Index() {
  return (
    <div>
      <FeedbackWidget>
        <button>Feedback</button>
      </FeedbackWidget>
    </div>
  )
}
```

## 2. Backend

Install redis package

```bash
npm install @upstash/redis
```

Create API

```js
// pages/api/feedback.js

import upstash from '@upstash/redis'

const redis = upstash("UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN")

export default async function handler(req, res) {
  try {
    const { body } = req

    const { user, message, metadata } = JSON.parse(body)
    if (!user || !message) throw 'missing params'

    const data = JSON.stringify({ user, message, metadata })
    const { error } = await redis.hset('feedback', Date.now(), data)
    if (error) throw error

    return res.status(200).json({ message: 'success' })
  } catch (err) {
    return res.status(400).json({ message: err })
  }
}
```

> `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` find the variables in the database details page in Upstash Console.
