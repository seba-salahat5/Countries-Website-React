import * as React from 'react';
import { Box, Grid } from '@mui/material';
import CountryCardComponent from './CardComponent';
import useMediaQuery from '@mui/material/useMediaQuery';
import GermanyFlag from '../assets/de.svg';
import AmericaFlag from '../assets/us.svg';
import BrazilFlag from '../assets/br.svg';
import IcelandFlag from '../assets/is.svg';
import AfghanistanFlag from '../assets/af.svg';
import AlandFlag from '../assets/ax.svg';
import AlbaniaFlag from '../assets/al.svg';
import AlgeriaFlag from '../assets/dz.svg';

const countries = [
  {
    id: 0,
    name: "Germany",
    population: "81,770,900",
    region: "Europe",
    capital: "Berlin",
    flag: GermanyFlag
  },
  {
    id: 1,
    name: "United States of America",
    population: "323,947,000",
    region: "Americas",
    capital: "Washington, D.C",
    flag: AmericaFlag
  },
  {
    id: 2,
    name: "Brazil",
    population: "206,135,893",
    region: "Americas",
    capital: "Brasilia",
    flag: BrazilFlag
  },
  {
    id: 3,
    name: "Iceland",
    population: "334,300",
    region: "Europe",
    capital: "Reykjavik",
    flag: IcelandFlag
  },
  {
    id: 4,
    name: "Afghanistan",
    population: "27,657,145",
    region: "Asia",
    capital: "Kabul",
    flag: AfghanistanFlag
  },
  {
    id: 5,
    name: "Aland Islands",
    population: "28,875",
    region: "Europe",
    capital: "Mariehamn",
    flag: AlandFlag
  },
  {
    id: 6,
    name: "Albania",
    population: "2,886,026",
    region: "Europe",
    capital: "Tirana",
    flag: AlbaniaFlag
  },
  {
    id: 7,
    name: "Algeria",
    population: "40,400,000",
    region: "Africa",
    capital: "Algiers",
    flag: AlgeriaFlag
  },
]

function GridColumn() {
  return (
    <React.Fragment>
      {countries.map(country => <Grid item xs={12} sm={6} md={4} lg={3} key={country.id}>
        <CountryCardComponent
          flag={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital} />
      </Grid>)}
    </React.Fragment>
  );
}

export default function CardsContainer() {
  const isXLarge = useMediaQuery('(min-width:1750px)');
  return (
    <Box>
      <Grid container spacing={isXLarge ? 10 : 6}>
        <Grid container item spacing={isXLarge ? 10 : 6}>
          <GridColumn />
        </Grid>
      </Grid>
    </Box>
  );
}