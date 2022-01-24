import FeedbackWidget from '@upstash/feedback'

export default function IndexPage() {
  return (
    <div className="p-10">
      <pre className="mb-4">
        {`
<FeedbackWidget>
  <button>Feedback</button>
</FeedbackWidget>`}
      </pre>
      <FeedbackWidget>
        <button className="py-1 px-2 bg-blue-600 text-white rounded">
          Feedback
        </button>
      </FeedbackWidget>
      <hr className="my-10" />
      <pre className="mb-4">
        {`
<FeedbackWidget
  user="steve.jobs@apple.com"
  metadata={{ location: 'Palo Alto' }}
>
  <button>Feedback with user</button>
</FeedbackWidget>`}
      </pre>
      <FeedbackWidget
        user="steve.jobs@apple.com"
        metadata={{ location: 'Palo Alto' }}
      >
        <button className="py-1 px-2 bg-blue-600 text-white rounded">
          Feedback with user
        </button>
      </FeedbackWidget>
    </div>
  )
}
