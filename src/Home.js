import React, { useEffect, useState } from 'react';

function Home({ setUserLogIn }){

    const [ starWarsCharacter, setStarWarsCharacter ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/8/')
        .then(res => res.json())
        .then(data => {
            setStarWarsCharacter(data)
            setLoading(false)
        })
        .catch(err => {
            console.error(err);
            setError(true);
            setLoading(false);
        })
    }, [])

    function handleLogout(){
        setUserLogIn(false)
    }

    return(
        <>
            {loading === true ? <p>Your mission is loadding</p> : null}
            {loading === false && error === false ? <>
                    <p>Welcome Home</p>
                    <p>{starWarsCharacter.name}</p>
                    <p>{starWarsCharacter.homeworld}</p>
                    <button onClick={handleLogout}>Log out</button>
                </>
                : null
            }
            {
                error === true && loading === false ? 
                <>
                    <p>There was an error loading your mission</p>
                    <button onClick={handleLogout}>Log out</button> 
                </>: null
            }
        </>
    )
}


export default Home;