// load all countries
const loadAllCountries = () =>{
    const detailsDiv = document.getElementById("country-details-card");
    detailsDiv.innerHTML='';

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
    const countryDiv = document.getElementById("country-card");
    countryDiv.innerHTML='';

    const detailsDiv = document.getElementById("country-details-card");
    detailsDiv.innerHTML='';
    // console.log(country);

    const newDiv = document.createElement("div");
        newDiv.innerHTML=`
            <div class="card w-50 mx-auto my-5">
                <div class="h-50">
                    <img src="${country.flag}" class="card-img-top h-50" alt="...">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${country.name}</h3>
                    <p class="card-text fw-bold">Country in ${country.subregion}</p>
                    <p class="card-text"><span class="fw-bold">Capital:</span> ${country.capital}</p>
                    <p class="card-text"><span class="fw-bold">Dialing code:</span> +${country.callingCodes[0]}</p>
                    <p class="card-text"><span class="fw-bold">Area:</span> ${country.area} km²</p>
                    <p class="card-text"><span class="fw-bold">Population:</span> ${country.population}</p>
                    <p class="card-text"><span class="fw-bold">Currency: ${country.currencies[0].symbol}</span> ${country.currencies[0].name} (${country.currencies[0].code})</p>
                    <p class="card-text"><span class="fw-bold">Nationality:</span> ${country.demonym}</p>
                    <p class="card-text"><span class="fw-bold">Language:</span> ${country.languages[0].name}</p>
                    <p class="card-text"><span class="fw-bold">Time Zone:</span> ${country.timezones[0]}</p>
                    <p class="card-text"><span class="fw-bold">Member of:</span> ${country.regionalBlocs ? country.regionalBlocs[0].name : "No Organization"} ${country.regionalBlocs ? (country.regionalBlocs[0].acronym) : ""}</p>
                </div>
            </div>
            <button onclick="loadAllCountries()" class="btn btn-dark mb-3">Go Back</button>
        `;
    detailsDiv.appendChild(newDiv);
}

// search by name
const handleNameSearch = () =>{
    const searchField = document.getElementById("search-box");
    searchValue=searchField.value;
    searchField.value = '';

    fetch(`https://restcountries.com/v3.1/name/${searchValue}
    `)
    .then(res=>res.json())
    .then(data=>searchByFullName(data))
};

// display by name
const searchByFullName = (countries)=>{
    const countryDiv = document.getElementById("country-card");
    countryDiv.innerHTML='';

    const detailsDiv = document.getElementById("country-details-card");
    detailsDiv.innerHTML='';

    countries.forEach(country => {
        // console.log(country);

        const newDiv = document.createElement("div");
        newDiv.innerHTML=`
            <div class="card w-50 mx-auto mb-3">
                <div class="h-75">
                    <img src="${country.flags.png}" class="card-img-top h-100" alt="...">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${country.name.common}</h3>

                    <p class="card-text fw-bold">Country in ${country.continents[0]}</p>

                    <p class="card-text"><span class="fw-bold">Capital : </span>${country.capital[0]}</p>

                    <p class="card-text"><span class="fw-bold">Area:</span> ${country.area} km²</p>

                    <p class="card-text"><span class="fw-bold">Population:</span> ${country.population}</p>

                    <p class="card-text"><span class="fw-bold">Nationality:</span> ${country.demonyms.eng.f}</p>

                    <p class="card-text"><span class="fw-bold">Time Zone:</span> ${country.timezones[0]}</p>
                </div>
            </div>
            <button onclick="loadAllCountries()" class="btn btn-dark mb-3">Go Back</button>
        `;
        detailsDiv.appendChild(newDiv);
    });
};

// search by capital
const handleCapitalSearch = () =>{
    const searchField = document.getElementById("search-box");
    searchValue=searchField.value;
    searchField.value = '';

    fetch(`https://restcountries.com/v3.1/capital/${searchValue}
    `)
    .then(res=>res.json())
    .then(data=>searchByCapital(data))
};

// display by capital
const searchByCapital = (countries) =>{
    const countryDiv = document.getElementById("country-card");
    countryDiv.innerHTML='';

    const detailsDiv = document.getElementById("country-details-card");
    detailsDiv.innerHTML='';

    countries.forEach(country => {
        console.log(country);
        const newDiv = document.createElement("div");
        newDiv.innerHTML=`
            <div class="card w-50 mx-auto mb-3">
                <div class="h-75">
                    <img src="${country.flags.png}" class="card-img-top h-100" alt="...">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${country.name.common}</h3>

                    <p class="card-text fw-bold">Country in ${country.continents[0]}</p>

                    <p class="card-text"><span class="fw-bold">Capital : </span>${country.capital[0]}</p>

                    <p class="card-text"><span class="fw-bold">Area:</span> ${country.area} km²</p>

                    <p class="card-text"><span class="fw-bold">Population:</span> ${country.population}</p>

                    <p class="card-text"><span class="fw-bold">Nationality:</span> ${country.demonyms.eng.f}</p>

                    <p class="card-text"><span class="fw-bold">Time Zone:</span> ${country.timezones[0]}</p>
                </div>
            </div>
            <button onclick="loadAllCountries()" class="btn btn-dark mb-3">Go Back</button>
        `;
        detailsDiv.appendChild(newDiv);
    });
};

// search by currency
const handleCurrencySearch = () =>{
    const searchField = document.getElementById("search-box");
    searchValue=searchField.value;
    searchField.value = '';

    fetch(`https://restcountries.com/v3.1/currency/${searchValue}
    `)
    .then(res=>res.json())
    .then(data=>searchByCurrency(data))
};

// display result by currency
const searchByCurrency = (countries) =>{
    const countryDiv = document.getElementById("country-card");
    countryDiv.innerHTML='';

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
    const searchField = document.getElementById("search-box");
    searchValue=searchField.value;
    searchField.value = '';

    fetch(`https://restcountries.com/v3.1/region/${searchValue}
    `)
    .then(res=>res.json())
    .then(data=>searchByContinent(data))
};

// display result by continent
const searchByContinent = (countries) =>{
    const countryDiv = document.getElementById("country-card");
    countryDiv.innerHTML='';

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
    const searchField = document.getElementById("search-box");
    searchValue=searchField.value;
    searchField.value = '';

    fetch(`https://restcountries.com/v2/regionalbloc/${searchValue}
    `)
    .then(res=>res.json())
    .then(data=>searchByOrganization(data))
};

// display result organization
const searchByOrganization = (countries) =>{
    const countryDiv = document.getElementById("country-card");
    countryDiv.innerHTML='';

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