export default function trendingGifs () {
  const URL_TRENDING = 'https://api.giphy.com/v1/gifs/trending?api_key=pJqYviFUDNfFcku0l5QR8kqFgRDjny45&limit=25&rating=g'

  return fetch(URL_TRENDING)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(image => {
        const { id, title, images } = image
        const { url } = images.downsized_medium
        return { id, title, url }
      })
      console.log(gifs)
      return gifs
    })
}
