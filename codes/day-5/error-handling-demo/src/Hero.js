import React, { useState } from 'react'

export default function Hero({ heroName }) {
    // //const [errorState, setErrorState] = useState({ error: null });
    // let error = false;
    // try {
    if (heroName === 'Joker') {
        throw new Error('Not a hero')
    }
    // } catch (err) {
    //     // setErrorState({ error: err })
    //     error = true;
    // }
    return (
        <div>
            Hero:{heroName}
        </div>
    )
}
