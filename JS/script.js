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