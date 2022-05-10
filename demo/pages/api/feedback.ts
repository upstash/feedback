import createFeedbackAPI from "@upstash/feedback/api";

export default createFeedbackAPI({
  webhooks: [process.env.SLACK_WEBHOOK_URL!],
});
