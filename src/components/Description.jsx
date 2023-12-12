

function Description({title, content}) {
    
        return (
            <div className='Description'>
               <details>
                    <summary className='Description__header' >
                <span>{title}</span>
                    </summary>
                    {Array.isArray(content)? <ul className="Description__content">{content.map(data=>
                 <li key ={data.id} >{data.content}</li>)}</ul> : <p className="Description__content">{content}</p>}

                </details>
            </div>
        )
}

export default Description

