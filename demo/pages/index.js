export default function IndexPage() {
  return (
    <div className="p-10">
      <pre className="mb-4">
        {`
<FeedbackWidget
  type="rate"
  user="steve.jobs@apple.com"
  metadata={{ location: 'Palo Alto' }}
>
  <button>Feedback</button>
</FeedbackWidget>`}
      </pre>
    </div>
  )
}
