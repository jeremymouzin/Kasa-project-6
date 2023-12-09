

function Description({title, content}) {
    
        return (
            <div className='Description'>
               <details>
                    <summary className='Description__header' >
                <span>{title}</span>
                    </summary>
                     <ul className='Description__content'>
                        {content}
                </ul>
                </details>
            </div>
        )
}

export default Description