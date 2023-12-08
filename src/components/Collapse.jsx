function Collapse({title, content}) {
        return (
                <div className='description__about'>
                <details>
                    <summary className='description__header' >
                <span>{title}</span>
                    </summary>
                     <p className='description__content__text'>
                   {content}
                </p>
                </details>
            </div>)}

export default Collapse

