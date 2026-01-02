const API_KEY = import.meta.env.VITE_MY_API;

export const YOUTUBE_API_URL='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+API_KEY

// Use the Vercel API route to proxy Google suggestions (avoids CORS issues)
export const SEARCH_URL = '/api/suggestions?q='

export const LIVE_CHAT_COUNT = 20;