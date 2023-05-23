const API_KEY = 'pJqYviFUDNfFcku0l5QR8kqFgRDjny45'

export default function trendingGifs (endPoint = 'trending', keyword = '') {
  const API_URL = `https://api.giphy.com/v1/gifs/${endPoint}?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(image => {
        const { id, title, images } = image
        const { url } = images.downsized_medium
        return { id, title, url }
      })
      return gifs
    })
}
