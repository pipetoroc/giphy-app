const API_KEY = 'pJqYviFUDNfFcku0l5QR8kqFgRDjny45'

export default function getGifs ({ keyword = 'panda' } = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(image => {
        const { id, images, title } = image
        const { url } = images.downsized_medium
        return { id, images, title, url }
      })
      return gifs
    })
}
