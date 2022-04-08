import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export default async function FeedbackWidgetAPI(req, res) {
  try {
    await redis.hset('feedback', { [Date.now().toString()]: req.body })
    return res.status(200).json({ message: 'success' })
  } catch (err) {
    return res.status(400).json({ message: err })
  }
}
