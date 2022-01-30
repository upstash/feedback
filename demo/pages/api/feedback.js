import { hset } from '@upstash/redis'

export default async function FeedbackWidgetAPI(req, res) {
  try {
    const { error } = await hset('feedback', Date.now(), req.body)
    if (error) throw error

    return res.status(200).json({ message: 'success' })
  } catch (err) {
    return res.status(400).json({ message: err })
  }
}
