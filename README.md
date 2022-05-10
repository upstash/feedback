# Feedback Widget for Next.js

Create a Feedback Widget for your Next.js site with two steps.
See [the demo](https://upstash-feedback-widget.vercel.app/)

<img src="cover.png" width="100%" >


## Install

### 1. Install Package

```bash
yarn add @upstash/feedback
```

### 2. Import CSS and Widget

```js
// pages/_app.js

import "@upstash/feedback/index.css";
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

### 3. Create API

```js
// pages/api/feedback.js

import createFeedbackAPI from "@upstash/feedback/api";

export default createFeedbackAPI({
  webhooks: [process.env.SLACK_WEBHOOK_URL],
});
```

## Options

If you already have an id (or email) for the current user, you can pass it to
the component as a parameter, so the feedback will be stored together with the
user's id.

``` javascript
<FeedbackWidget type="full" user={currentUser.email}/>
```

Also, you can set a user id just to hide email input, so the form can be
submitted anonymously.

``` javascript
<FeedbackWidget type="full" user="anything"/>
```


       

