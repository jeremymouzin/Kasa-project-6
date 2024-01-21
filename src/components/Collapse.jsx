import { useState } from "react"

function Collapse({title, content}) {

//importation du hook useState avec un état initial à false
const [open, setIsOpen] = useState(false); 

// fonction qui va modifier l'état du toggle à true pour afficher le contenu des collapses et la modification de chevron
const display = ()=> {     
    setIsOpen(!open)
}
        return (
                <div className='Collapse__about'>

                <div onClick={display} className='Collapse__header' >
                <span>{title}</span>   
                {open ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i> }
                </div>
                 {open ? <p className='Collapse__content__text'>{content}</p>: null }
            </div>)}

export default Collapse

