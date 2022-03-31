// load all countries
const loadAllCountries = () =>{
    fetch("https://restcountries.com/v2/all")
    .then(res=>res.json())
    .then(data=>displayAllCountry(data))
};
loadAllCountries();


// Displaying all countries
const displayAllCountry = (countries)=>{
    const countryDiv = document.getElementById("country-card");
    countries.forEach(country => {
        const nationality = country.demonym;
        const language = country.languages[0].name;

        const newDiv = document.createElement("div");
        newDiv.classList.add("col-xl-3");
        newDiv.classList.add("col-md-4");
        newDiv.classList.add("col-sm-6");
        newDiv.classList.add("my-3");
        newDiv.innerHTML=`
            <div class="card h-100">
                <div class="h-75">
                    <img src="${country.flag}" class="card-img-top h-100" alt="...">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${country.name}</h3>
                    <p class="card-text"><span class="fw-bold">Capital:</span> ${country.capital}</p>
                    <p class="card-text"><span class="fw-bold">Nationality:</span> ${nationality}</p>
                    <p class="card-text"><span class="fw-bold">Language:</span> ${language}</p>
                    <button onclick="loadCountryDetails(${country.callingCodes[0]})" type="button" class="btn btn-primary">See more info</button>
                </div>
            </div>
        `;
        countryDiv.appendChild(newDiv);
    });
};

// load country details
const loadCountryDetails = (numericCode)=>{
    fetch(`https://restcountries.com/v2/callingcode/${numericCode}
    `)
    .then(res=>res.json())
    .then(data=>displayCountryDetails(data[0]))
    ;
}

// display country details
const displayCountryDetails = country =>{
    console.log(country);
}

// search by name
const handleNameSearch = () =>{
    const searchValue = document.getElementById("search-box").value;
    fetch(`https://restcountries.com/v3.1/name/${searchValue}
    `)
    .then(res=>res.json())
    .then(data=>searchByFullName(data))
};

const searchByFullName = (countries)=>{
    const countryDiv = document.getElementById("country-card");
    countries.forEach(country => {
        console.log(country);
        const commonName = country.name.common;
        const officialName = country.name.official;
        const capital= country.capital[0];
        const symbol = country.coatOfArms.png;
        const continent = country.continents[0];
        const currency = country.currencies.BDT.name;
        const nationality = country.demonyms.eng.f;
        const flag = country.flags.png;
        const population = country.population;
        const region = country.region;
        const language = country.languages.ben;

        const newDiv = document.createElement("div");
        newDiv.classList.add("col-xl-3");
        newDiv.classList.add("col-md-4");
        newDiv.classList.add("col-sm-6");
        newDiv.classList.add("my-3");
        newDiv.innerHTML=`
            <div class="card h-100">
                <div class="h-75">
                    <img src="${flag}" class="card-img-top h-100" alt="...">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${commonName}</h3>
                    <p class="card-text"><span class="fw-bold">Capital:</span> ${officialName}</p>
                    <p class="card-text"><span class="fw-bold">Capital:</span> ${symbol}</p>
                    <p class="card-text"><span class="fw-bold">Capital:</span> ${currency}</p>
                    <p class="card-text"><span class="fw-bold">Capital:</span> ${population}</p>
                    <p class="card-text"><span class="fw-bold">Capital:</span> ${continent}</p>
                    <p class="card-text"><span class="fw-bold">Capital:</span> ${capital}</p>
                    <p class="card-text"><span class="fw-bold">Nationality:</span> ${nationality}</p>
                    <p class="card-text"><span class="fw-bold">Language:</span> ${language}</p>
                    <p class="card-text"><span class="fw-bold">Capital:</span> ${region}</p>
                    <button type="button" class="btn btn-primary">See more info</button>
                </div>
            </div>
        `;
        countryDiv.appendChild(newDiv);
    });
};

// search by capital
const handleCapitalSearch = () =>{
    const searchValue = document.getElementById("search-box").value;
    fetch(`https://restcountries.com/v3.1/capital/${searchValue}
    `)
    .then(res=>res.json())
    .then(data=>searchByCapital(data))
};

const searchByCapital = (countries) =>{
    countries.forEach(country => {
        console.log(country);
        const commonName = country.name.common;
        const officialName = country.name.official;
        const capital= country.capital[0];
        // const symbol = country.coatOfArms.png;
        // const continent = country.continents[0];
        // const currency = country.currencies.BDT.name;
        // const nationality = country.demonyms.eng.f;
        const flag = country.flags.png;
        const population = country.population;
        const region = country.region;
        const language = country.languages.ben;
    });
};

// search by currency
const handleCurrencySearch = () =>{
    const searchValue = document.getElementById("search-box").value;
    fetch(`https://restcountries.com/v3.1/currency/${searchValue}
    `)
    .then(res=>res.json())
    .then(data=>searchByCurrency(data))
};

const searchByCurrency = (countries) =>{
    countries.forEach(country => {
        console.log(country);
        const commonName = country.name.common;
        const officialName = country.name.official;
        const capital= country.capital[0];
        // const symbol = country.coatOfArms.png;
        // const continent = country.continents[0];
        // const currency = country.currencies.BDT.name;
        // const nationality = country.demonyms.eng.f;
        const flag = country.flags.png;
        const population = country.population;
        const region = country.region;
        const language = country.languages.ben;
    });
};

// search by continent
const handleContinentSearch = () =>{
    const searchValue = document.getElementById("search-box").value;
    fetch(`https://restcountries.com/v3.1/region/${searchValue}
    `)
    .then(res=>res.json())
    .then(data=>searchByContinent(data))
};

const searchByContinent = (countries) =>{
    countries.forEach(country => {
        console.log(country);
        const commonName = country.name.common;
        const officialName = country.name.official;
        const capital= country.capital[0];
        // const symbol = country.coatOfArms.png;
        // const continent = country.continents[0];
        // const currency = country.currencies.BDT.name;
        // const nationality = country.demonyms.eng.f;
        const flag = country.flags.png;
        const population = country.population;
        const region = country.region;
        const language = country.languages.ben;
    });
};

// search by organization
const handleOrganizationSearch = () =>{
    const searchValue = document.getElementById("search-box").value;
    fetch(`https://restcountries.com/v2/regionalbloc/${searchValue}
    `)
    .then(res=>res.json())
    .then(data=>searchByOrganization(data))
};

const searchByOrganization = (countries) =>{
    countries.forEach(country => {
        console.log(country);
        const commonName = country.name.common;
        const officialName = country.name.official;
        const capital= country.capital[0];
        // const symbol = country.coatOfArms.png;
        // const continent = country.continents[0];
        // const currency = country.currencies.BDT.name;
        // const nationality = country.demonyms.eng.f;
        const flag = country.flags.png;
        const population = country.population;
        const region = country.region;
        const language = country.languages.ben;
    });
};