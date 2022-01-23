import { hset } from '@upstash/redis'
import { nanoid } from 'nanoid'

export default async function FeedbackApi(req: any, res: any) {
  try {
    const { body, method } = req

    // check method
    const isMethodPost = method === 'POST'
    if (!isMethodPost) throw 'only post data'

    // check data
    const { user, message, metadata } = JSON.parse(body)
    if (!user || !message) throw 'missing params'

    // save database
    const { error } = await hset(
      'feedback',
      nanoid(8),
      JSON.stringify({ user, message, metadata })
    )
    if (error) throw error

    return res.status(200).json({ message: 'success' })
  } catch (err) {
    return res.status(400).json({ message: err })
  }
}
