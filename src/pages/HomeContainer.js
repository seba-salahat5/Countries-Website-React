import React, { useEffect, useState, useContext, useMemo} from 'react';
import { Box, Stack, Grid } from '@mui/material';
import SearchInputComponent from '../Components/SearchInputComponent';
import RegionsDropDown from '../Components/DropdownComponent';
import CardsGridComponent from '../Components/CardsGridComponent';
import FavouratesListComponent from '../Components/FavouratesListComponent';
import { onFilterChange, onSearchEvent } from '../EventHandlers';
import { styled } from '@mui/material/styles';
import { THEME } from '../pages/PageWraper';
import { DarkModeContext } from '../DarkMode/DarkModeContext';

export default function HomeContainer() {
    const Context = useContext(DarkModeContext);
    const [countries, setCountries] = useState([]);
    const [selectedRegion, setRegion] = useState("");
    const [searchValue, setSearchValue] = useState(' ');

    const favourates = JSON.parse(localStorage.getItem('favouriteList')) != null ? JSON.parse(localStorage.getItem('favouriteList')) : [];
    const [favouriteList, setFavouriteList] = useState(favourates);

    const filteredCountries = useMemo(() => onFilterChange(selectedRegion, countries, favouriteList), [selectedRegion, countries, favouriteList]);

    const StyledMainLine = styled(Stack)({
        display: 'flex',
        justifyContent: 'space-between',
        height: '50px',
        '@media (max-width: 900px)': {
            height: '150px',
        }
    });
    
    const StyledStack = styled(Stack)({
        paddingTop: '50px',
        paddingLeft: '0rem',
        paddingRight: '0rem',
        '@media (max-width: 599px)': {
            paddingLeft: '3rem',
            paddingRight: '3rem',
        }
    });
    
    const StyledBox = styled(Box)({
        height: '100%',
        paddingLeft: '4.5rem',
        paddingRight: '4.5rem',
        paddingTop: '130px',
        paddingBottom: '15px',
        color: Context.darkMode ?THEME.palette.primary.contrastText : THEME.palette.primary.main,
    });

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
        fetchCountries();
    },[]);

    useEffect(() => {
        localStorage.setItem('favouriteList', JSON.stringify(favouriteList));
    }, [favouriteList]);

    return (
        <React.Fragment>
            <StyledBox alignItems="center">
                <StyledMainLine direction={{ sm: 'column', md: 'row' }} spacing={'50px'}>
                    <SearchInputComponent searchValue = {searchValue} onSearchEvent=
                        {
                            async (searchTerm) => {
                                setSearchValue(searchTerm);
                                setCountries(await onSearchEvent(searchTerm));
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