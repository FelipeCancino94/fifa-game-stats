// /api/db.ts
import { Pool } from 'pg'

const pool = new Pool({
  // eslint-disable-next-line
  connectionString: process.env.DATABASE_URL, // debes definirlo en Vercel
  ssl: {
    rejectUnauthorized: false,
  },
})

export default pool
