export function onFilterChange(filter, countries, favouriteList) {
    let filteredCountries = [];

    if (!filter) return countries;
    if (countries) {
        filter === "Favourites"
            ? filteredCountries = countries.filter(country => favouriteList.find(favCountry => favCountry.cca2 === country.cca2))
            : filteredCountries = countries.filter(country => country.region === filter || filter === "No Filter");
    }
    return filteredCountries;
}

export async function onSearchEvent(searchTerm, callBack){
    let url = searchTerm === '' ? `https://restcountries.com/v3.1/all` : `https://restcountries.com/v3.1/name/${searchTerm}`;
    return await fetch(url)
        .then(response => {
            switch (response.status) {
                case 404:
                    callBack(false);
                    return [];
                case 200:
                    return response.json();
                default:
                    return null;
            }
        })
        .catch(error => console.log(error))
        .then(data => {
            return data;
        });
}