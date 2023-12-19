import "../styles/Gallery.css"
import Flat from './Flat'

function Gallery({data}) {

return (

<div className="gallery">
    { data.map( flat => <Flat key={flat.id} id={flat.id} title={flat.title} cover={flat.cover} />)}
</div>

    )
}

export default Gallery