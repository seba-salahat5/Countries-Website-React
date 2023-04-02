
export function onFilterChange(filter, countries){
    let filteredCountries=[];

    if(!filter)return countries;
    if(countries){
        filteredCountries = countries.filter(country => country.region === filter || filter === "No Filter");
    }
    return filteredCountries;
}
