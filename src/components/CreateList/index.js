// NPM imports
import React from 'react';

// Styles imports
import './createList.css';

function CreateList () {

    const handleGetList = (e) => {
        e.preventDefault()
        console.log('je suis la')
    }


    return(
        <div className="createList-content">
            <h3 className="list-title">Création d'une zone</h3>
            <form className="add-town-content">
                <div className="create-list">
                    <label className="title-label">Titre de la zone</label>
                    <input className="title-input" placeholder="Titre"></input>
                </div>
                <div className="choice-towns">
                    <label className="list-label">Les villes</label>
                    <select className="list-select">
                        <option disabled>Choisissez vos villes</option>
                    </select>
                </div>
                <button className="list-button" onSubmit={handleGetList}>Créer</button>
            </form>
            <div className="list-result">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>

                </ul>
            </div>
        </div>
    )
}

export default CreateList;