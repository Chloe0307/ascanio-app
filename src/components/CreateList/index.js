// NPM imports
import React from 'react';

// Components imports
import Search from '../Search';

// Styles imports
import './createList.css';

function CreateList () {

    const handleSaveList = (e) => {
        e.preventDefault()
        console.log('je suis la')
    }


    return(
        <div className="createList-content">
            <h3 className="list-title">Création d'une zone</h3>
            <form className="add-town-content">
                <div className="create-list">
                    <label className="title-label">Nom de la zone</label>
                    <input className="title-input" placeholder="Nom"></input>
                </div>
                <Search />
                <button className="save-button" onSubmit={(e) => handleSaveList}>Sauvegarder</button>
            </form>
         
        </div>
    )
}

export default CreateList;