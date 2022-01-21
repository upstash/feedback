import { FeedbackForm } from 'components/Feedback'

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
        <button>Feedback</button>
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
        <button>Feedback with user</button>
      </FeedbackForm>
    </div>
  )
}
