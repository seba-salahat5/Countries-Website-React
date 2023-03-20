import * as React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

export default function DetailsContainer() {
    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/react');
    }
    return (
        <Box sx={{ mt: '130px', px: '4.0rem' }}>
            <Button variant="text" sx={{ boxShadow: 3, mb: '50px', px: '30px' }} color="light" onClick={handleClick}>
                <KeyboardBackspaceRoundedIcon />
                Back
            </Button>
            <Grid container spacing={10}>
                <Grid item sm={12} md={6} lg={6}>
                    <Box component="img" sx={{width: '100%',height: '400px', objectFit: 'cover'}}
                        alt="Brazil"
                        src="https://flagcdn.com/be.svg" />
                </Grid>
                <Grid item sm={12} md={6} lg={6} sx={{ mt: '50px' }}>
                    <ThemeProvider theme={DETAILS_THEME}>
                        <Typography variant="h2" component="div" sx={{ mb: '20px' }}>Belgium</Typography>
                        <Grid container spacing={1}>
                            <Grid item sm={12} md={6} lg={6}>
                                <Typography variant="h3" component="div" sx={{ my: '10px' }}>
                                    Native Name:
                                    <Typography variant="h4" component="span" sx={{ mx: '5px' }}>Belgien</Typography>
                                </Typography>

                                <Typography variant="h3" component="div" sx={{ my: '10px' }}>
                                    Population:
                                    <Typography variant="h4" component="span" sx={{ mx: '5px' }}>11,555,997</Typography>
                                </Typography>

                                <Typography variant="h3" component="div" sx={{ my: '10px' }}>
                                    Region:
                                    <Typography variant="h4" component="span" sx={{ mx: '5px' }}>Europe</Typography>
                                </Typography>

                                <Typography variant="h3" component="div" sx={{ my: '10px' }}>
                                    Sub Region:
                                    <Typography variant="h4" component="span" sx={{ mx: '5px' }}>Western Europe</Typography>
                                </Typography>

                                <Typography variant="h3" component="div" sx={{ my: '10px' }}>
                                    Capital:
                                    <Typography variant="h4" component="span" sx={{ mx: '5px' }}>Brussels</Typography>
                                </Typography>
                            </Grid>
                            <Grid item sm={12} md={6} lg={6}>
                                <Typography variant="h3" component="div" sx={{ my: '10px' }}>
                                    Top Level Domain:
                                    <Typography variant="h4" component="span" sx={{ mx: '5px' }}>.be</Typography>
                                </Typography>

                                <Typography variant="h3" component="div" sx={{ my: '10px' }}>
                                    Currencies:
                                    <Typography variant="h4" component="span" sx={{ mx: '5px' }}>Euro</Typography>
                                </Typography>

                                <Typography variant="h3" component="div" sx={{ my: '10px' }}>
                                    Languages:
                                    <Typography variant="h4" component="span" sx={{ mx: '5px' }}>German, French, Dutch</Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography variant="h3" component="div" sx={{ my: '50px' }}>
                            Border Countries:
                            <Typography variant="h4" component="span" sx={{ mx: '5px' }}>
                                <Button variant="text" sx={{ boxShadow: 3, mx: '5px', px: '20px' }} color="light">France</Button>
                                <Button variant="text" sx={{ boxShadow: 3, mx: '5px', px: '20px' }} color="light">Germany</Button>
                                <Button variant="text" sx={{ boxShadow: 3, mx: '5px', px: '20px' }} color="light">Netherlands</Button>
                            </Typography>
                        </Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </Box>
    );
}