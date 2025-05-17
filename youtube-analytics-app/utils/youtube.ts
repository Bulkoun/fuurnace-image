/**
 * Fetch basic statistics for a YouTube channel using the YouTube Data API.
 * You must provide an API key via the YOUTUBE_API_KEY environment variable.
 */
export async function fetchChannelStats(channelId: string) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    console.warn('Missing YOUTUBE_API_KEY environment variable');
    return null;
  }

  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error('Failed to fetch:', res.statusText);
      return null;
    }
    const json = await res.json();
    return json.items?.[0]?.statistics || null;
  } catch (err) {
    console.error('Request error', err);
    return null;
  }
}
