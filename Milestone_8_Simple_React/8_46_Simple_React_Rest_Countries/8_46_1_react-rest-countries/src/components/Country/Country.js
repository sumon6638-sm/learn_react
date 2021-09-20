import React from 'react';
import './Country.css'

const Country = (props) => {
/* 
    // For 1st and 2nd way
    return (
        <div className="country">
            <img src={props.flag} alt="" srcset="" />
            <h2>Country name: {props.name}</h2>
            <h3>Capital: {props.capital}, Region: {props.region}</h3>
            <h4>Total Population: {props.population}</h4>
        </div>
    );
 */
    
/*     
    // For third way:
    return (
        <div className="country">
            <img src={props.country.flag} alt="" srcset="" />
            <h2>Country name: {props.country.name}</h2>
            <h3>Capital: {props.country.capital}, Region: {props.country.region}</h3>
            <h4>Total Population: {props.country.population}</h4>
        </div>
    )
 */
    
    //For thid way shortcut_destructuring: 
    const {name, flag, capital, population, region} = props.country;
    return (
        <div className="country">
            <img src={flag} alt=""/>
            <h2>Country name: {name}</h2>
            <h3>Capital: {capital}, Region: {region}</h3>
            <h4>Total Population: {population}</h4>
        </div>
    )
};

export default Country;