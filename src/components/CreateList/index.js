// NPM imports
import React, { useState } from 'react';

// Components imports
import Search from '../Search';

// Styles imports
import './createList.css';

function CreateList ({ onChange }, queryValue) {

    const [ title, setTitle ] = useState('')

    const handleGetTitle = (e, func) => {
        func(e.target.value)
    }

    const handleSaveList = (e) => {
        e.preventDefault()
 
        // je récupère la div container
        const docTitle = document.querySelector('.list-result')

        // je récupère la valeur de mon input title
        const valueTitle = document.querySelector('.title-input').value

        // je crée un nouvel élèment "p"
        const p = document.createElement('p')

        // ajouter une className au titre pour le personnaliser
        p.classList = 'title-result'

        // j ajoute le texte à la balise p
        p.textContent = valueTitle

        // j'ajoute mon nouvel élèment en enfant.
        docTitle.appendChild(p) 
        console.log(queryValue, 'createList')      
    }

    return(
        <div className="createList-content">
            <h3 className="list-title">Création d'une zone</h3>
            <form className="add-town-content">
                <div className="create-list">
                    <label className="title-label">Nom de la zone</label>
                    <input className="title-input" placeholder="Nom" value={title} onChange={(e) => handleGetTitle(e, setTitle, 'title')}></input>
                </div>
                <Search className='search-input' onChange={onChange} />
                <img></img>
                <button className="save-button" onClick={handleSaveList}>Sauvegarder</button>
            </form>
            <div className="list-result__empty list-result"></div>
        </div>
    )
}

export default CreateList;