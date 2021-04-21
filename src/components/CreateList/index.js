// NPM imports
import React, { useState } from 'react';
import firebase from '../../utils/firebase';

// Components imports
import Search from '../Search';

// Styles imports
import './createList.css';

function CreateList ({ onChange }) {

    const [ title, setTitle ] = useState('')
    
    const handleGetTitle = (e, func) => {
        func(e.target.value)
    }

    const handleCreateList = (e, queryValue, i) => {
        e.preventDefault()
 
        // je récupère mon élèment p
        const title = document.querySelector('.title-result')
        const divContent = document.querySelector('.list-result__empty').className = "list-result"

        // je récupère la valeur de mon input title
        const valueTitle = document.querySelector('.title-input').value

        // j ajoute le texte à la balise p
        title.textContent = valueTitle

        console.log(queryValue, 'createList')      
    }

    const handleSubmitList = () => {
        const ref = firebase.database().ref('list')
        const list = {
            title
        }

        ref.push(list)
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
                <div>
                    <button className="create-button" onClick={handleCreateList}>Créer</button>
                    <a href="/my-list" className="see-list">Voir mes listes</a>
                </div>
            </form>
            <div className="list-result__empty">
                <p className="title-result"></p>
                <button className="save-button" onClick={handleSubmitList}>Sauvegarder</button>
            </div>
        </div>
    )
}

export default CreateList;