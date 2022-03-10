import Axios from 'axios';
import React, { useState } from 'react';

export function Main() {

    const [excuse, setExcuse] = useState();

    const url = `https://excuser.herokuapp.com/v1/excuse`;

    const getData = async () => {
        const result = await Axios.get(url);
        setExcuse(result)
    }

    return (
        <div>
             <button onClick={() => getData()}>Generate Excuse</button>
            {excuse ? (

                <p>{excuse.data[0].excuse}</p>

            ) : ( 
                <span>Opa</span>
             )}
        </div>
    )
}