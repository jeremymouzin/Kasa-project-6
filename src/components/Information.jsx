import '../styles/Information.css'


function Information() 

{
        return (
            <div className='container'>

             <div className="container__information">
            <h1>Cozy loft on the Canal Saint-Martin</h1>
            <h3>Paris, Île-de-France</h3>

            <div className="container__content">
            <p>Cozy</p>
            <p>Canal</p>
            <p>Paris 10</p>
            </div>
            
            </div>
            
            <div className='container__description'>
                <div className='container__description__profil'>
                <p>Alexandre<br/>Dumas</p>
                <div className='profil'></div>
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