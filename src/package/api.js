const upstash = require('@upstash/redis')
const { hset } = upstash()

export default async function FeedbackWidgetAPI(req, res) {
  try {
    const { body } = req

    const { user, message, metadata } = JSON.parse(body)
    if (!user || !message) throw 'missing params'

    const data = JSON.stringify({ user, message, metadata })
    const { error } = await hset('feedback', Date.now(), data)
    if (error) throw error

    return res.status(200).json({ message: 'success' })
  } catch (err) {
    return res.status(400).json({ message: err })
  }
}
