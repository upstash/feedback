import { FeedbackForm } from 'feedback'

export default function IndexPage() {
  return (
    <div className="p-10">
      <pre className="mb-4">
        {`
<FeedbackForm>
  <button>Feedback</button>
</FeedbackForm>`}
      </pre>
      <FeedbackForm>
        <button className="py-1 px-2 bg-blue-600 text-white rounded">
          Feedback
        </button>
      </FeedbackForm>

      <hr className="my-20" />

      <pre className="mb-4">
        {`
<FeedbackForm
  user="steve.jobs@apple.com"
  metadata={{ location: 'Palo Alto' }}
>
  <button>Feedback</button>
</FeedbackForm>`}
      </pre>
      <FeedbackForm
        user="steve.jobs@apple.com"
        metadata={{ location: 'Palo Alto' }}
      >
        <button className="py-1 px-2 bg-blue-600 text-white rounded">
          Feedback with user
        </button>
      </FeedbackForm>
    </div>
  )
}
