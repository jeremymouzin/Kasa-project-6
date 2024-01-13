import '../styles/Information.css'


function Information({title, location,name, tag, photo, rating}) 

{
        return (
            <div className='container'>

             <div className="container__information">
            <h1>{title}</h1>
            <h3>{location}</h3>
 
        <div className="container__content">
        {tag}
        </div>
    
            </div>
            
            <div className='container__description'>
                <div className='container__description__profil'>
                <p>{name[0]}<br/>{name[1]}</p>
                <img src={photo} alt="" className='profil' />
                </div>

                <div className='container-description__stars'>
                    <div ><i className="fas fa-star"></i></div> 
                    <div><i className="fas fa-star"></i></div>
                     <div><i className="fas fa-star"></i></div>
                     <div><i className="fas fa-star grey"></i></div>
                     <div><i className="fas fa-star grey"></i></div>
                </div>

            </div>
 
            </div>
        )

}

export default Information