function Collapse({title, content}) {
        return (
                <div className='Collapse__about'>
                <details>
                    <summary className='Collapse__header' >
                <span>{title}</span>
                    </summary>
                     <p className='Collapse__content__text'>
                   {content}
                </p>
                </details>
            </div>)}

export default Collapse

