import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { useNavigate, useLocation } from 'react-router-dom';

export const DETAILS_THEME = createTheme({
    palette: {
        light: {
            main: '#111517',
        },
    },
    typography: {
        "fontFamily": `'Nunito Sans', sans-serif`,
        h2: {
            "fontSize": '2rem',
            "fontWeight": '800',
        },

        h3: {
            "fontSize": '0.8rem',
            "fontWeight": '700',
        },
        h4: {
            "fontSize": '0.8rem',
            "fontWeight": '500',
        },
        button: {
            "fontSize": '0.7rem',
            "fontWeight": '600',
        }
    }
});

const BackButton = styled(Button)({
    boxShadow: '3px 2px 8px 3px rgba(0,0,0,0.1)',
    marginBottom: '50px',
    paddingLeft: '30px',
    paddingRight: '30px',
    backgroundColor: "white"
});

const StyledImageBox = styled(Box)({
    width: '100%',
    height: '400px',
    objectFit: 'cover'
});

const StyledBox = styled(Box)({
    marginTop: '130px',
    paddingLeft: '4.0rem',
    paddingRight: '4.0rem',
});

const BordersButton = styled(Button)({
    boxShadow: '3px 2px 8px 3px rgba(0,0,0,0.1)',
    marginLeft: '5px',
    marginRight: '5px',
    paddingLeft: '20px',
    paddingRight: '20px'
});

const StyledGrid = styled(Grid)({
    marginTop: '50px',
});

const StyledName = styled(Typography)({
    marginBottom: '20px',
});

const StyledTitle = styled(Typography)({
    marginTop: '10px',
    marginBottom: '10px',
});

const StyledInfo = styled(Typography)({
    marginLeft: '5px',
    marginRight: '5px',
});

const StyledBordersTitle = styled(Typography)({
    marginTop: '50px',
    marginBottom: '50px',
});

export default function DetailsContainer() {
    const location = useLocation();
    const countryCode = location.state;

    const [countryInfo, setCountry] = useState([]);
    const [countryBorders, setBorders] = useState([]);

    const fetchCountry = () => {
        fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCountry(data);
                fetchBorders(data[0].borders)
            })
    };

    const fetchBorders = (borders) => {
        let bordersList = [];
        if (borders) {
            const promises = [];
            for (let i = 0; i < borders.length; i++) {
                const promise = fetch(`https://restcountries.com/v3.1/alpha/${borders[i]}`)
                    .then(response => response.json());
                promises.push(promise);
            }

            Promise.all(promises).then(
                results => {
                    results.forEach(border => bordersList.push(border[0].name.common));
                }
            );
            setBorders(bordersList);
        }
    }

    useEffect(() => {
        if (countryInfo.length === 0) {
            fetchCountry();
        }
    });

    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/react');
    }

    if (countryInfo[0]) {
        return (
            <StyledBox>
                <BackButton variant="text" color="light" onClick={handleClick}>
                    <KeyboardBackspaceRoundedIcon />
                    Back
                </BackButton>
                <Grid container spacing={10}>
                    <Grid item sm={12} md={6} lg={6}>
                        <StyledImageBox component="img" alt={countryInfo[0].name.common} src={countryInfo[0].flags.svg} />
                    </Grid>
                    <StyledGrid item sm={12} md={6} lg={6}>
                        <ThemeProvider theme={DETAILS_THEME}>
                            <StyledName variant="h2" component="div">{countryInfo[0].name.common}</StyledName>
                            <Grid container spacing={1}>
                                <Grid item sm={12} md={6} lg={6}>
                                    <StyledTitle variant="h3" component="div">
                                        Native Name:
                                        <StyledInfo variant="h4" component="span">{Object.entries(countryInfo[0].name.nativeName)[0][1].common}</StyledInfo>
                                    </StyledTitle>

                                    <StyledTitle variant="h3" component="div">
                                        Population:
                                        <StyledInfo variant="h4" component="span">{countryInfo[0].population}</StyledInfo>
                                    </StyledTitle>

                                    <StyledTitle variant="h3" component="div">
                                        Region:
                                        <StyledInfo variant="h4" component="span">{countryInfo[0].region}</StyledInfo>
                                    </StyledTitle>

                                    <StyledTitle variant="h3" component="div">
                                        Sub Region:
                                        <StyledInfo variant="h4" component="span">{countryInfo[0].subregion}</StyledInfo>
                                    </StyledTitle>

                                    <StyledTitle variant="h3" component="div">
                                        Capital:
                                        <StyledInfo variant="h4" component="span">{countryInfo[0].capital}</StyledInfo>
                                    </StyledTitle>
                                </Grid>
                                <Grid item sm={12} md={6} lg={6}>
                                    <StyledTitle variant="h3" component="div">
                                        Top Level Domain:
                                        <StyledInfo variant="h4" component="span">{countryInfo[0].tld}</StyledInfo>
                                    </StyledTitle>

                                    <StyledTitle variant="h3" component="div">
                                        Currencies:
                                        <StyledInfo variant="h4" component="span">{Object.entries(countryInfo[0].currencies)[0][1].name}</StyledInfo>
                                    </StyledTitle>

                                    <StyledTitle variant="h3" component="div">
                                        Languages:
                                        <StyledInfo variant="h4" component="span">{Object.values(countryInfo[0].languages).join(', ')}</StyledInfo>
                                    </StyledTitle>
                                </Grid>
                            </Grid>
                            <StyledBordersTitle variant="h3" component="div">
                                Border Countries:
                                <StyledInfo variant="h4" component="span">
                                    {countryBorders.map((border, index) => {
                                        return <BordersButton key={index} variant="text" color="light">{border}</BordersButton>
                                    })}
                                </StyledInfo>
                            </StyledBordersTitle>
                        </ThemeProvider>
                    </StyledGrid>
                </Grid>
            </StyledBox>
        );
    }
    else return (<StyledBox />);
}