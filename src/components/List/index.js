import React, { useEffect, useState } from 'react';
import firebase from 'firebase';

import './list.css'
import DeleteButton from '../../assets/images/delete-button.png'



function List () {

    const [ lists, setLists ] = useState([])
    const listRef = firebase.database().ref('list')

    useEffect(() => {
        const loadDatas = async () => {
            await listRef.once('value', (snapshot) => {
                const listTab =[]
                snapshot.forEach((childSnapshot) => {
                    const body = {
                        key : childSnapshot.key,
                        title : childSnapshot.val().title,
                    }
                    listTab.push(body)
                    console.log(listTab)
                })
                setLists(listTab)
            })
        }

        loadDatas()
    }, [])

    const handleRemove = async (e, elt) => {
        console.log('je suis la', elt)
        
    }


    return(
        <div>
            <a href="/">Créer une liste</a>
            <h3 className="title">Mes listes</h3>
            <ul>
                {
                    lists.map((list) => {
                        return(
                            <div className="div-list">
                                <li className="list-li" key={list.key}>{list.title}</li>
                                <button className="delete-button" onClick={(e) => handleRemove()}>
                                    <img  className="delete-img" src={DeleteButton} alt="suppression de la zone"></img>
                                </button>
                            </div>
                        
                        )
                    })
                }
             
            </ul>
        </div>
    )
}

export default List