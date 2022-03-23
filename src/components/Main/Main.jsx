import Axios from 'axios';
import React, { useState } from 'react';

export function Main() {

    const [query, setQuery] = useState('');
    const [excuse, setExcuse] = useState('');

    const url = `https://excuser.herokuapp.com/v1/excuse/${query}`;

    const getData = async (category) => {
        setQuery(category); 
        const result = await Axios.get(url);
        setExcuse(result);
    }

    return (
        <div className='container'>
            <h2>Generate your Excuses</h2>
            <div className='button-container'>
                <button onClick={() => getData('')}>random</button>
                <button onClick={() => getData('family')}>family</button>
                <button onClick={() => getData('office')}>office</button>
                <button onClick={() => getData('children')}>children</button>
                <button onClick={() => getData('college')}>college</button>
                <button onClick={() => getData('party')}>party</button>
             </div>

             <div className='image-container'>
                    <img src="/images/conversation.svg" alt="conversation" />

                    {excuse ? (
                        <p className='excuse'>{(excuse.data[0].excuse)}</p>
                    ) : ( 
                        <p>I would love to go, but...</p>
                    )}

                </div>
        </div>
    )
}