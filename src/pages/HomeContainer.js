import React, { useEffect, useState, useMemo  } from 'react';
import { Box, Stack, Grid } from '@mui/material';
import SearchInputComponent from '../Components/SearchInputComponent';
import RegionsDropDown from '../Components/DropdownComponent';
import CardsGridComponent from '../Components/CardsGridComponent';
import FavouratesListComponent from '../Components/FavouratesListComponent';
import styled from 'styled-components';
import { onFilterChange } from '../EventHandlers/EventHandlers';

const StyledMainLine = styled(Stack)`
display:flex;
justify-content: space-between;
height:50px;
@media (max-width: 900px) {
  height:150px;
}
`;

const StyledStack = styled(Stack)`
margin-top: 50px;
padding-left: 0rem;
padding-right: 0rem;  
@media (max-width: 599px) {
    padding-left: 3rem;
    padding-right: 3rem; 
};
`;

const StyledBox = styled(Box)`
height: 100%;
padding-left: 4.5rem;
padding-right: 4.5rem;
margin-top: 130px;
`;

export default function HomeContainer() {
    const [countries, setCountries] = useState([]);
    const [selectedRegion, setRegion] = useState("");

    const filteredCountries = useMemo(() => onFilterChange(selectedRegion, countries), [selectedRegion, countries.length])
    
    const fetchCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCountries(data)
            })
    };

    useEffect(() => {
        if(countries.length === 0)fetchCountries();
    });
    return (
        <React.Fragment>
            <StyledBox alignItems="center">
                <StyledMainLine direction={{ sm: 'column', md: 'row' }} spacing={'50px'}>
                    <SearchInputComponent onSearchEvent=
                        {
                            (searchTerm) => {
                                let url = searchTerm === '' ? `https://restcountries.com/v3.1/all` : `https://restcountries.com/v3.1/name/${searchTerm}`;
                                fetch(url)
                                    .then(response => {
                                        return response.json();
                                    })
                                    .catch(error => console.log(error))
                                    .then(data => {
                                        if(!data)setCountries(null)
                                        else setCountries(data)
                                        
                                    })
                            }
                        }
                    />
                    <RegionsDropDown onFilter=
                        {
                            (region) => {
                                setRegion(region);
                            }
                        }
                    />
                </StyledMainLine>
                <StyledStack direction={'row'}>
                    <Grid container spacing={{ md: 6, xl: 8 }}>
                        <Grid item md={3}>
                            <FavouratesListComponent></FavouratesListComponent>
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <CardsGridComponent countries={filteredCountries} selectedRegion={selectedRegion}></CardsGridComponent>
                        </Grid>
                    </Grid>
                </StyledStack>
            </StyledBox>
        </React.Fragment>
    );
}