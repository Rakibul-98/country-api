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
        const name = country.name;
        const capital= country.capital;
        const nationality = country.demonym;
        const flag = country.flag;
        const population = country.population;
        const region = country.region;
        const language = country.languages[0].name;

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
                    <h3 class="card-title">${name}</h3>
                    <p class="card-text"><span class="fw-bold">Capital:</span> ${capital}</p>
                    <p class="card-text"><span class="fw-bold">Nationality:</span> ${nationality}</p>
                    <p class="card-text"><span class="fw-bold">Language:</span> ${language}</p>
                    <button type="button" class="btn btn-primary">See more info</button>
                </div>
            </div>
        `;
        countryDiv.appendChild(newDiv);
    });
};

// search by name
const handleNameSearch = () =>{
    const searchValue = document.getElementById("search-box").value;
    fetch(`https://restcountries.com/v3.1/name/${searchValue}
    `)
    .then(res=>res.json())
    .then(data=>searchByName(data))
};

const searchByName = (countries)=>{
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
    });
};

// search by capital
const handleCapitalSearch = () =>{
    const searchValue = document.getElementById("search-box").value;
    fetch(`https://restcountries.com/v2/capital/${searchValue}
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

// search by continent
const handleContinentSearch = () =>{
    const searchValue = document.getElementById("search-box").value;
    fetch(`https://restcountries.com/v2/continent/${searchValue}
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