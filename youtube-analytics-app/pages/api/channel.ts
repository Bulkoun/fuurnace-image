import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchChannelStats } from '../../utils/youtube';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') {
    res.status(400).json({ error: 'Missing channel id' });
    return;
  }

  const data = await fetchChannelStats(id);
  if (!data) {
    res.status(500).json({ error: 'Failed to fetch data' });
    return;
  }
  res.status(200).json(data);
}
