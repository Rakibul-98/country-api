// error handling
const handleError = (type) =>{
    const errorDiv = document.getElementById("error-message");
    toggleBackBtn("block");
    toggleErrorMessage("block");
    toggleSpinner("none");
    if (type == 404) {
        errorDiv.innerHTML=`
        <img class="img-fluid" src="images/error-img.png" alt="">
        <p class="h1"><span class="text-danger">Something went wrong!!!</span> <br> Please try again...</p>
        `;
    }
    else if (type == "empty") {
        errorDiv.innerHTML=`
        <img class="img-fluid" src="images/error-img.png" alt="">
        <p class="h1"><span class="text-danger">Search field can not be empty!!!</span> <br> Please enter right search value...</p>
        `;
    }
}

// error message toggle
const toggleErrorMessage = (optn) =>{
    document.getElementById("error-message").style.display=optn;
}

// loading spinner
const toggleSpinner = (optn) =>{
    document.getElementById("spinner").style.display=optn;
}

// remove previous search results
const removeResults = (div)=>{
    const countryDiv = document.getElementById(div);
    countryDiv.innerHTML='';
}

// back button hide
const toggleBackBtn = (action)=>{
    document.getElementById("back-btn").style.display=action;
}

// get search value and remove text
const getSearchValue = ()=>{
    const searchField = document.getElementById("search-box");
    searchValue=searchField.value;
    searchField.value = '';
}

// display single country
const displaySingleCountry = (country) => {
    const detailsDiv = document.getElementById("country-details-card");

    const newDiv = document.createElement("div");
        newDiv.innerHTML=`
            <div class="card w-50 mx-auto mb-3">
                <div>
                    <img src="${country.flags.png}" class="card-img-top" alt="...">
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
            <button onclick="loadAllCountry()" class="btn btn-dark mb-3">← Go Back</button>
        `;
        detailsDiv.appendChild(newDiv);
        toggleSpinner("none");
}

// display multiple country
const displayMultipleCountry = (country) => {
    const countryDiv = document.getElementById("country-card");
    
    const newDiv = document.createElement("div");
    newDiv.classList.add("col-xl-3");
    newDiv.classList.add("col-md-4");
    newDiv.classList.add("col-sm-6");
    newDiv.classList.add("my-3");
    newDiv.innerHTML=`
        <div class="card h-100 mb-3">
            <div class="h-75">
                <img src="${country.flags.png}" class="card-img-top h-100" alt="...">
            </div>
            <div class="card-body">
                <h3 class="card-title">${country.name.common ? country.name.common : country.name}</h3>

                <p class="card-text fw-bold">Country in ${country.region ? country.region : country.continents[0]}</p>

                <p class="card-text"><span class="fw-bold">Capital : </span>${country.capital}</p>

                <p class="card-text"><span class="fw-bold">Area:</span> ${country.area} km²</p>

                <p class="card-text"><span class="fw-bold">Population:</span> ${country.population}</p>

                <p class="card-text"><span class="fw-bold">Nationality:</span> ${country.demonyms ? country.demonyms.eng.f : country.demonym}</p>

                <p class="card-text"><span class="fw-bold">Time Zone:</span> ${country.timezones[0]}</p>
            </div>
        </div>
    `;
    countryDiv.appendChild(newDiv);
    toggleSpinner("none");
}

// load all countries
const loadAllCountry = () =>{
    toggleSpinner("block");
    toggleErrorMessage("none");
    toggleBackBtn("none");
    removeResults("country-details-card");
    removeResults("country-card");

    fetch("https://restcountries.com/v2/all")
    .then(res=>res.json())
    .then(data=>displayAllCountry(data))
    .catch(error=>handleError(404))
};
loadAllCountry();

// Displaying all countries
const displayAllCountry = (countries)=>{
    const countryDiv = document.getElementById("country-card");
    removeResults("country-card");
    toggleBackBtn("none");

    countries.forEach(country => {
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
                    <p class="card-text"><span class="fw-bold">Nationality:</span> ${country.demonym}</p>
                    <p class="card-text"><span class="fw-bold">Language:</span> ${country.languages[0].name}</p>
                    <button onclick="loadCountryDetails(${country.callingCodes[0]})" type="button" class="btn btn-primary">See more info</button>
                </div>
            </div>
        `;
        countryDiv.appendChild(newDiv);
        toggleSpinner("none");
    });
};

// load country details
const loadCountryDetails = (code)=>{
    toggleSpinner("block");
    removeResults("country-card");
    fetch(`https://restcountries.com/v2/callingcode/${code}
    `)
    .then(res=>res.json())
    .then(data=>displayCountryDetails(data[0]))
    .catch(error=>handleError(404))
}

// display country details
const displayCountryDetails = (country) =>{
    const detailsDiv = document.getElementById("country-details-card");
    removeResults("country-card");
    removeResults("country-details-card");

    const newDiv = document.createElement("div");
        newDiv.innerHTML=`
            <div class="card w-50 mx-auto my-5">
                <div>
                    <img src="${country.flag}" class="card-img-top" alt="...">
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
            <button onclick="loadAllCountry()" class="btn btn-dark mb-3">← Go Back</button>
        `;
    detailsDiv.appendChild(newDiv);
    toggleSpinner("none");
}

// search by name
const handleNameSearch = () =>{
    toggleBackBtn("none");
    toggleErrorMessage("none");
    toggleSpinner("block");
    removeResults("country-card");
    removeResults("country-details-card");
    getSearchValue();
    const value = searchValue;
    if (value == '') {
        handleError("empty");
    }
    else{
        fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
        .then(res=>res.json())
        .then(data=>displayByFullName(data))
        .catch(error=>handleError(404))
    }

    // fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    // .then(res=>res.json())
    // .then(data=>displayByFullName(data))
    // .catch(error=>handleError(404))
};

// display by name
const displayByFullName = (countries)=>{
    removeResults("country-card");
    removeResults("country-details-card");
    toggleBackBtn("none");

    countries.forEach(country => {
        displaySingleCountry(country);
    });
};

// search by capital
const handleCapitalSearch = () =>{
    getSearchValue();
    toggleBackBtn("none");
    toggleErrorMessage("none");
    toggleSpinner("block");
    removeResults("country-card");
    removeResults("country-details-card");
    const value = searchValue;
    if (value == '') {
        handleError("empty");
    }
    else{
        fetch(`https://restcountries.com/v3.1/capital/${searchValue}`)
        .then(res=>res.json())
        .then(data=>displayByCapital(data))
        .catch(error=>handleError(404))
    }
};

// display by capital
const displayByCapital = (countries) =>{
    removeResults("country-card");
    removeResults("country-details-card");
    toggleBackBtn("none");

    countries.forEach(country => {
        displaySingleCountry(country);
    });
};

// search by currency
const handleCurrencySearch = () =>{
    getSearchValue();
    toggleBackBtn("none");
    toggleSpinner("block");
    toggleErrorMessage("none");
    removeResults("country-card");
    removeResults("country-details-card");
    const value = searchValue;
    if (value == '') {
        handleError("empty");
    }
    else{
        fetch(`https://restcountries.com/v3.1/currency/${searchValue}`)
        .then(res=>res.json())
        .then(data=>displayByCurrency(data))
        .catch(error=>handleError(404))
    }
};

// display result by currency
const displayByCurrency = (countries) =>{
    removeResults("country-details-card");
    removeResults("country-card");
    toggleBackBtn("block");

    countries.forEach(country => {
        displayMultipleCountry(country);
    });
};

// search by continent
const handleContinentSearch = () =>{
    getSearchValue();
    toggleBackBtn("none");
    toggleSpinner("block");
    toggleErrorMessage("none");
    removeResults("country-card");
    removeResults("country-details-card");
    const value = searchValue;
    if (value == '') {
        handleError("empty");
    }
    else{
        fetch(`https://restcountries.com/v3.1/region/${searchValue}`)
        .then(res=>res.json())
        .then(data=>displayByContinent(data))
        .catch(error=>handleError(404))
    }
};

// display by continent
const displayByContinent = (countries) =>{
    // const countryDiv = document.getElementById("country-card");
    removeResults("country-details-card");
    removeResults("country-card");
    toggleBackBtn("block");

    countries.forEach(country => {
        displayMultipleCountry(country);
    });
};

// search by organization
const handleOrganizationSearch = () =>{
    getSearchValue();
    toggleBackBtn("none");
    toggleSpinner("block");
    toggleErrorMessage("none");
    removeResults("country-card");
    removeResults("country-details-card");
    const value = searchValue;
    if (value == '') {
        handleError("empty");
    }
    else{
        fetch(`https://restcountries.com/v2/regionalbloc/${searchValue}`)
        .then(res=>res.json())
        .then(data=>displayByOrganization(data))
        .catch(error=>handleError(404))
    }
};

// display by organization
const displayByOrganization = (countries) =>{

    removeResults("country-details-card");
    removeResults("country-card");
    toggleBackBtn("block");
    
    countries.forEach(country => {
        displayMultipleCountry(country);
    });
};