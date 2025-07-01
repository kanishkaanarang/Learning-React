import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
// This hook fetches currency information from a public API and returns the data.
// It uses the useEffect hook to fetch data when the currency changes and stores it in state.
// The data is fetched from a CDN that provides currency information in JSON format.
// The hook can be used in components to get the latest currency information based on the provided currency code.
// The fetched data includes details like the currency's name, symbol, and other relevant information.
// The useState hook is used to manage the state of the fetched data.
// The console.log statement is used to log the fetched data for debugging purposes.
// The hook can be easily integrated into any React component that requires currency information.