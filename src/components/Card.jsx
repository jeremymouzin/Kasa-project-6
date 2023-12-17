import '../styles/Card.css'
import Apartman from './Apartment'
import datasFlat from '../assets/data.json'


function Card() {

return (
        <div className="Card">
    {datasFlat.map(data=> <Apartman key={data.id} id={data.id} title={data.title} cover={data.cover} />)}
</div>
    )
}

export default Card