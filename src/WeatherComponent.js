import React, { useState, useEffect } from 'react';

const API = 'http://api.weatherstack.com/current?access_key=a1b4a1ab1555f2d095a08718966e8dcd&query=Accra';

function WeatherComponent(){

    const [ currentWeather, setCurrentWeather ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetch({API})
        .then(res => res.json())
        .then(data => {
            setCurrentWeather(data)
            setLoading(false)
        })
        .catch(err => {
            console.error(err);
        })
    }, [])



    return(
        <>
         {loading === false ? <p>{currentWeather.temperature}</p> : null}
        </>

    )
}

export default WeatherComponent;