// /api/team.stats.ts
import type { VercelRequest, VercelResponse } from '@vercel/node'
import db from './db'

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const result = await db.query('SELECT * FROM players')
    res.status(200).json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'DB Error', details: err })
  }
}
