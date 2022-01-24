# Feedback Widget

--summary--

## 1. Frontend

Install feedback package

```bash
npm install @upstash/feedback
```

Import feedback component

```js
// pages/index.js

import FeedbackWidget from '@upstash/feedback'

export default function Index() {
  return (
    <div>
      <FeedbackWidget type="simple">
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

import FeedbackWidgetAPI from '@upstash/feedback/dist/api/index'

export default FeedbackWidgetAPI
```

Configure environment variable

```bash
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

> `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` find the variables in the database details page in Upstash Console.
