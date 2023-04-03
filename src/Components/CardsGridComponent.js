import * as React from 'react';
import { Box, Grid } from '@mui/material';
import CountryCardComponent from './CountryCardComponent';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function CardsGridComponent({countries, favourates, onFavourateChange}) {
  const isXLarge = useMediaQuery('(min-width:1750px)');
    if(countries.length === 0)
    {
      return (<h5>Result Not Found</h5>);
    }
    return (
    <Box>
      <Grid container spacing={isXLarge ? 10 : 6}>
        <Grid container item spacing={isXLarge ? 10 : 6}>
          <React.Fragment>
            {countries.map(country => <Grid item xs={12} sm={6} md={4} lg={3} key={country.cca2}>
              <CountryCardComponent country={country} favourates={favourates} onFavourateChange={onFavourateChange} />
            </Grid>)}
          </React.Fragment>
        </Grid>
      </Grid>
    </Box>
  );
}