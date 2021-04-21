import React, { useEffect, useState } from 'react';
import firebase from 'firebase';

import './list.css'

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




    return(
        <div>
            <a href="/">Créer une liste</a>
            <h3 className="title">Mes listes</h3>
            <ul>
                {
                    lists.map((list) => {
                        return(<li key={list.key}>{list.title}</li>
                        )
                    })
                }
             
            </ul>
        </div>
    )
}

export default List