# YouTube Analytics App

This is a minimal Next.js project that fetches basic statistics for a YouTube channel using the YouTube Data API.

## Setup

1. Install dependencies (requires internet access):

```bash
npm install
```

2. Set the `YOUTUBE_API_KEY` environment variable with your YouTube Data API key.

3. Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Enter a YouTube channel ID and fetch statistics such as subscriber count and view count.
- The API interaction is implemented in `utils/youtube.ts` and used from the index page.

## Notes

This repository does not include the `node_modules` directory. You must have network access to install the dependencies specified in `package.json`.
