import { useState } from "react"

function Description({title, content}) {

const [open, setIsOpen]= useState(false);

 const display = () => {
setIsOpen(!open)
 }
        return (
            <div className='Description'>

                    <div className='Description__header' onClick={display} >
                <span>{title}</span>
                {open ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>   }
                    </div>

                {open ? Array.isArray(content)? <ul className="Description__content">{content.map((content,index)=>
                 <li key={index} >{content}</li>)}</ul> : <p className="Description__content">{content}</p> : null  }
                   
            </div>
        )
}

export default Description

