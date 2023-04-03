import * as React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { THEME } from '../App';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Link } from 'react-router-dom';

import { ItemTypes } from '../Constants';
import { useDrag } from 'react-dnd';


const StyledCard = styled(Card)({
    maxWidth: 300,
    borderRadius: '6px',
    boxShadow: '1px 2px 8px 1px rgba(0,0,0,0.1)',
});

const StyledIconButton = styled(IconButton)({
    display: 'none',
    '@media (max-width:889px)': {
        display: 'block',
    },
    color: '#ffc400'
});
export default function CountryCardComponent({ country, favourates, onFavourateChange }) {
    let starFillFlag = favourates.some((favCountry) => favCountry.cca2 === country.cca2);
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.CARD,
        item: { draggedCountry: country },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }));
    const opacity = isDragging ? 0.5 : 1;
    const handleClick = (event) => {
        if(!starFillFlag){
            onFavourateChange([...favourates, country]); 
        }
        else{
            onFavourateChange(favourates.filter(favCountry => favCountry.cca2 !== country.cca2)) 
        }

    };

    return (
        <StyledCard ref={drag} sx={{ opacity: opacity }}>
            <CardActionArea component={Link} to="/details">
                <CardMedia
                    component="img"
                    alt={country.name.common}
                    height="140"
                    image={country.flags.svg}
                />
                <CardContent>
                    <ThemeProvider theme={THEME}>
                        <Typography gutterBottom variant="h5" component="div">{country.name.common}</Typography>
                        <Typography gutterBottom variant="h4" component="div">
                            Population:
                            <Typography gutterBottom variant="h3" component="span">{country.population}</Typography>
                        </Typography>
                        <Typography gutterBottom variant="h4" component="div">
                            Region:
                            <Typography gutterBottom variant="h3" component="span">{country.region}</Typography>
                        </Typography>
                        <Typography gutterBottom variant="h4" component="div">
                            Capital:
                            <Typography gutterBottom variant="h3" component="span">{country.capital}</Typography>
                        </Typography>
                    </ThemeProvider>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <StyledIconButton aria-label="favourate" onClick={handleClick}>
                    {starFillFlag ? <StarRoundedIcon /> : <StarOutlineRoundedIcon />}
                </StyledIconButton>
            </CardActions>
        </StyledCard>
    );
}
