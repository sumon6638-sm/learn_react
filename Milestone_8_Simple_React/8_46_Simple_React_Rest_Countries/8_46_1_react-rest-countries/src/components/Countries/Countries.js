import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    },[])

    return (
        <div>
            <h1>Hello from updated Countries</h1>
            <h3>Total countries: {countries.length}</h3>
            <div className="country-container">
                {
                    // 1st way:
                    // countries.map(country => Country(country)) // sbgulo asbe...

                    // 2nd way:
                    // countries.map(country => <Country name={country.name} capital={country.capital} population={country.population} flag={country.flag}></Country>)

                    // 3rd way:
                    countries.map(country => <Country
                        key={country.alpha3Code}
                        country={country} // sbgulo asbe abr destructuring korte hbe...
                    ></Country>)

                }
            </div>
        </div>
    );
};

export default Countries;













/* function Countries() {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div>
            <h2>Travelling around the world!!</h2>
            <h4>Total Country: {countries.length}</h4>
            {
                // countries.map(country=>Country(country)) // eta korle sobgula property eksathe cole jabe...

                countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
            }
        </div>
    )
}

function Country(props) {
    return (
        <div>
            <h2>Country name: {props.name}</h2>
            <h4>Country name: {props.capital}</h4>
        </div>
    )
} */