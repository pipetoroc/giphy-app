import './Gif.css'

function Gif ({ title, id, url }) { //eslint-disable-line
  return (
    <div className='gif-container'>
      <h4> {title} </h4>
      <img src={url} key={id} alt={title}/>
    </div>
  )
}

export default Gif
