import * as React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { useNavigate } from 'react-router-dom';

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
})
export default function DetailsContainer() {
    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/react');
    }
    return (
        <StyledBox>
            <BackButton variant="text" color="light" onClick={handleClick}>
                <KeyboardBackspaceRoundedIcon />
                Back
            </BackButton>
            <Grid container spacing={10}>
                <Grid item sm={12} md={6} lg={6}>
                    <StyledImageBox component="img" alt="Belgium" src="https://flagcdn.com/be.svg" />
                </Grid>
                <StyledGrid item sm={12} md={6} lg={6}>
                    <ThemeProvider theme={DETAILS_THEME}>
                        <StyledName variant="h2" component="div">Belgium</StyledName>
                        <Grid container spacing={1}>
                            <Grid item sm={12} md={6} lg={6}>
                                <StyledTitle variant="h3" component="div">
                                    Native Name:
                                    <StyledInfo variant="h4" component="span">Belgien</StyledInfo>
                                </StyledTitle>

                                <StyledTitle variant="h3" component="div">
                                    Population:
                                    <StyledInfo variant="h4" component="span">11,555,997</StyledInfo>
                                </StyledTitle>

                                <StyledTitle variant="h3" component="div">
                                    Region:
                                    <StyledInfo variant="h4" component="span">Europe</StyledInfo>
                                </StyledTitle>

                                <StyledTitle variant="h3" component="div">
                                    Sub Region:
                                    <StyledInfo variant="h4" component="span">Western Europe</StyledInfo>
                                </StyledTitle>

                                <StyledTitle variant="h3" component="div">
                                    Capital:
                                    <StyledInfo variant="h4" component="span">Brussels</StyledInfo>
                                </StyledTitle>
                            </Grid>
                            <Grid item sm={12} md={6} lg={6}>
                                <StyledTitle variant="h3" component="div">
                                    Top Level Domain:
                                    <StyledInfo variant="h4" component="span">.be</StyledInfo>
                                </StyledTitle>

                                <StyledTitle variant="h3" component="div">
                                    Currencies:
                                    <StyledInfo variant="h4" component="span">Euro</StyledInfo>
                                </StyledTitle>

                                <StyledTitle variant="h3" component="div">
                                    Languages:
                                    <StyledInfo variant="h4" component="span">German, French, Dutch</StyledInfo>
                                </StyledTitle>
                            </Grid>
                        </Grid>
                        <StyledBordersTitle variant="h3" component="div">
                            Border Countries:
                            <StyledInfo variant="h4" component="span">
                                <BordersButton variant="text" color="light">France</BordersButton>
                                <BordersButton variant="text" color="light">Germany</BordersButton>
                                <BordersButton variant="text" color="light">Netherlands</BordersButton>
                            </StyledInfo>
                        </StyledBordersTitle>
                    </ThemeProvider>
                </StyledGrid>
            </Grid>
        </StyledBox>
    );
}