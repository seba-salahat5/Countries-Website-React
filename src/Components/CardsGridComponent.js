import * as React from 'react';
import { Box, Grid } from '@mui/material';
import CountryCardComponent from './CardComponent';
import GermanyFlag from '../assets/de.svg';
import AmericaFlag from '../assets/us.svg';
import BrazilFlag from '../assets/br.svg';
import IcelandFlag from '../assets/is.svg';
import AfghanistanFlag from '../assets/af.svg';
import AlandFlag from '../assets/ax.svg';
import AlbaniaFlag from '../assets/al.svg';
import AlgeriaFlag from '../assets/dz.svg';

function GridColumn() {
  return (
    <React.Fragment>
      <Grid item sm={6} md={4} lg={3}>
        <CountryCardComponent flag={GermanyFlag} name="Germany" population="81,770,900" region="Europe" capital="Berlin" />
      </Grid>
      <Grid item sm={6} md={4} lg={3}>
        <CountryCardComponent flag={AmericaFlag} name="United States of America" population="323,947,000" region="Americas" capital="Washington, D.C" />
      </Grid>
      <Grid item sm={6} md={4} lg={3}>
        <CountryCardComponent flag={BrazilFlag} name="Brazil" population="206,135,893" region="Americas" capital="Brasilia" />
      </Grid>
      <Grid item sm={6} md={4} lg={3}>
        <CountryCardComponent flag={IcelandFlag} name="Iceland" population="334,300" region="Europe" capital="Reykjavik" />
      </Grid>
      <Grid item sm={6} md={4} lg={3}>
        <CountryCardComponent flag={AfghanistanFlag} name="Afghanistan" population="27,657,145" region="Asia" capital="Kabul" />
      </Grid>
      <Grid item sm={6} md={4} lg={3}>
        <CountryCardComponent flag={AlandFlag} name="Aland Islands" population="28,875" region="Europe" capital="Mariehamn" />
      </Grid>
      <Grid item sm={6} md={4} lg={3}>
        <CountryCardComponent flag={AlbaniaFlag} name="Albania" population="2,886,026" region="Europe" capital="Tirana" />
      </Grid>
      <Grid item sm={6} md={4} lg={3}>
        <CountryCardComponent flag={AlgeriaFlag} name="Algeria" population="40,400,000" region="Africa" capital="Algiers" />
      </Grid>
    </React.Fragment>
  );
}

export default function CardsContainer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={6} justifyContent="space-between" alignItems="center">
        <Grid container item spacing={6}>
          <GridColumn />
        </Grid>
      </Grid>
    </Box>
  );
}