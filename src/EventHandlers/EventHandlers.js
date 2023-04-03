
export function onFilterChange(filter, countries, favouriteList){
    let filteredCountries=[];

    if(!filter)return countries;
    if(countries){
        filter === "Favourites"
        ? filteredCountries = countries.filter(country => favouriteList.find(favCountry => favCountry.cca2 === country.cca2))
        : filteredCountries = countries.filter(country => country.region === filter || filter === "No Filter");
    }
    return filteredCountries;
}
