const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries[0]);
    const showCountries = document.getElementById('countries');
    const countryHTML = countries.map(country => getCountryHTML(country));
    // showCountries.innerHTML = countryHTML[0]; // শুধু প্রথম টা দেখাবে...
    // showCountries.innerHTML = countryHTML;  // সব গুলো দেখাবে মাঝখানে বড় গ্যাপ সহ... ঝখন গ্রিড করব তখন দুই লাইন হই যাবে...

    // showCountries.innerHTML = countryHTML.join();    // সব গুলো দেখাবে মাঝখানে হালকা একটু গ্যাপ থাকবে... ঝখন গ্রিড করব তখন দুই লাইন হই যাবে...
    
    showCountries.innerHTML = countryHTML.join(' ');    // সব গুলো দেখাবে মাঝখানে কোন গ্যপ ছাড়া... ঝখন গ্রিড করব তখন এক লাইনে থাকবে...
    // console.log(countryHTML);
}

/* 
const getCountryHTML = country => {
    return `
        <div class = 'country'>
            <h2>Country name: ${country.name}</h2>
            <h4>Capitale: ${country.capital}</h4>
            <img src ="${country.flag}">
        </div>
    `
}
 */

// getCountryHTML function by destructuring
const getCountryHTML = country => {
    const { name, capital, flag } = country;
    return `
        <div class = 'country'>
            <h2>Country name: ${name}</h2>
            <h4>Capitale: ${capital}</h4>
            <img src ="${flag}">
        </div>
    `
}

loadCountries();