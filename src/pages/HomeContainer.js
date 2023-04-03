import React, { useEffect, useState, useMemo } from 'react';
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
    const [countriesFetchFlag, setFetchFlag] = useState(true);

    const favourates = JSON.parse(localStorage.getItem('favouriteList')) != null ? JSON.parse(localStorage.getItem('favouriteList')) : [];
    const [favouriteList, setFavouriteList] = useState(favourates);

    const filteredCountries = useMemo(() => onFilterChange(selectedRegion, countries, favouriteList), [selectedRegion, countries.length, favouriteList.length])

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
        if (countriesFetchFlag && countries.length === 0) fetchCountries();
    });

    useEffect(() => {
        localStorage.setItem('favouriteList', JSON.stringify(favouriteList));
    }, [favouriteList]);

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
                                        switch (response.status) {
                                            case 404:
                                                setFetchFlag(false)
                                                return [];
                                            case 200:
                                                return response.json();
                                            default:
                                                return null;
                                        }
                                    })
                                    .catch(error => console.log(error))
                                    .then(data => {
                                        setCountries(data)
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
                            <FavouratesListComponent favourites={favouriteList}
                                onFavourateChange=
                                {
                                    (Favourites) => {
                                        setFavouriteList(Favourites);
                                    }
                                }
                                />
                        </Grid>
                        <Grid item sm={12} md={9}>
                            <CardsGridComponent countries={filteredCountries} favourates={favouriteList}
                                onFavourateChange={
                                    (Favourites) => {
                                        setFavouriteList(Favourites);
                                    }
                                } />
                        </Grid>
                    </Grid>
                </StyledStack>
            </StyledBox>
        </React.Fragment>
    );
}