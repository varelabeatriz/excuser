import Axios from 'axios';
import React, { useState } from 'react';
import './style.scss'

export function Main() {

    const [excuse, setExcuse] = useState();

    const url = `https://excuser.herokuapp.com/v1/excuse`;

    const getData = async () => {
        const result = await Axios.get(url);
        setExcuse(result)
    }

    return (
        <div className='container'>
            <h2>Generate your Excuses</h2>
            <div className='button-container'>
                <button onClick={() => getData()}>random</button>
                <button>family</button>
                <button>office</button>
                <button>children</button>
                <button>college</button>
                <button>party</button>
             </div>
            {excuse ? (
                <div className='image-container'>
                    <img src="/images/conversation.svg" alt="conversation" />
                    <p className='excuse'>{excuse.data[0].excuse}</p>
                </div>

            ) : ( 
                <span></span>
             )}

        

        </div>
    )
}