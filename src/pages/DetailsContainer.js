import React, { useEffect, useState, useContext } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { useNavigate, useLocation } from 'react-router-dom';
import { DarkModeContext } from '../DarkMode/DarkModeContext';

export const DETAILS_THEME = createTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#111517',
            dark: '#202c37',
            contrastText: '#ffffff'
        },
        secondary: {
            light: '#ffffff',
            main: '#111517',
            dark: '#2b3945',
            contrastText: '#ffffff',
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

export default function DetailsContainer() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const countryCode = params.get("countryCode");

    const [countryInfo, setCountry] = useState([]);
    const [borders, setBorders] = useState([]);
    const Context = useContext(DarkModeContext);
    const color = Context.darkMode ? DETAILS_THEME.palette.primary.dark : DETAILS_THEME.palette.primary.light;
    document.documentElement.style.setProperty('--bodyColor', color);

    const BackButton = styled(Button)({
        boxShadow: '3px 2px 8px 3px rgba(0,0,0,0.1)',
        marginBottom: '50px',
        paddingLeft: '30px',
        paddingRight: '30px',
        color: Context.darkMode ? DETAILS_THEME.palette.secondary.contrastText : DETAILS_THEME.palette.secondary.main,
        backgroundColor: Context.darkMode ? DETAILS_THEME.palette.secondary.dark : DETAILS_THEME.palette.secondary.light,
    });

    const StyledImageBox = styled(Box)({
        width: '100%',
        height: '400px',
        objectFit: 'cover'
    });

    const StyledBox = styled(Box)({
        paddingTop: '130px',
        paddingLeft: '4.0rem',
        paddingRight: '4.0rem',
        paddingBottom: '15px',
        color: Context.darkMode ? DETAILS_THEME.palette.secondary.contrastText : DETAILS_THEME.palette.secondary.main,
    });

    const BordersButton = styled(Button)({
        boxShadow: '3px 2px 8px 3px rgba(0,0,0,0.1)',
        marginLeft: '5px',
        marginRight: '5px',
        paddingLeft: '20px',
        paddingRight: '20px',
        color: Context.darkMode ? DETAILS_THEME.palette.secondary.contrastText : DETAILS_THEME.palette.secondary.main,
        backgroundColor: Context.darkMode ? DETAILS_THEME.palette.secondary.dark : DETAILS_THEME.palette.secondary.light,
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

    const fetchCountry = () => {
        fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
            .then(response => {
                return response.json()
            })
            .then(async data => {
                setCountry(data);
            })
    };

    const fetchBorders = (borders) => {
        if (borders) {
            const promises = [];
            for (let i = 0; i < borders.length; i++) {
                const promise = fetch(`https://restcountries.com/v3.1/alpha/${borders[i]}`)
                    .then(response => response.json());
                promises.push(promise);
            }
            Promise.all(promises)
                .then(response => {
                    return response;
                })
                .then(async data => {
                    setBorders(data);
                })
        }
    }

    useEffect(() => {
        fetchCountry();     
    },[]);

    useEffect(()=>{
        if(countryInfo[0]){
            fetchBorders(countryInfo[0].borders);
        }
    },[countryInfo])

    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/home');
    }

    if (countryInfo[0]) {
        return (
            <StyledBox>
                <BackButton variant="text" onClick={handleClick}>
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
                                    {borders.map((border) => {
                                        return <BordersButton key={border[0].cca2} variant="text">{border[0].name.common}</BordersButton>
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