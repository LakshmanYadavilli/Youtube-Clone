const apiKey = "AIzaSyCTkJPvGCG77gr0FZDZlorg9JjTnlk4IM8";
export const youtubeApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=" +
  apiKey;

export const suggestionUrl =
  "https://corsproxy.io/?" +
  encodeURIComponent(
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
  );
