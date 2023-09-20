import React, { useEffect, useState } from 'react'
import { FirstScreen } from '../FirstScreen/FirstScreen';

export const FetchApiData = () => {

    const [ApiData, setApiData] = useState([])
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        let url = 'https://api.tvmaze.com/search/shows?q=all';
        try {
            let Data = await fetch(url);
            let ParsedData = await Data.json()
            setApiData(ParsedData)
        }
        catch (error) {
            console.log('Error Fetching Data', error)
        }
    }


    return (
        <>
        <FirstScreen uiData={ApiData}/>
        </>
    )
}
