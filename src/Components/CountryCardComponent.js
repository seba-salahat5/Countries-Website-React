import * as React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { THEME } from '../App';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Link } from 'react-router-dom';


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
export default function CountryCardComponent({name, flag, population, region, capital}) {
    let starFillFlag = name === "Germany";
    return (
        <StyledCard>
            <CardActionArea component={Link} to="/details">
                <CardMedia
                    component="img"
                    alt={name}
                    height="140"
                    image={flag}
                />
                <CardContent>
                    <ThemeProvider theme={THEME}>
                        <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                        <Typography gutterBottom variant="h4" component="div">
                            Population:
                            <Typography gutterBottom variant="h3" component="span">{population}</Typography>
                        </Typography>
                        <Typography gutterBottom variant="h4" component="div">
                            Region:
                            <Typography gutterBottom variant="h3" component="span">{region}</Typography>
                        </Typography>
                        <Typography gutterBottom variant="h4" component="div">
                            Capital:
                            <Typography gutterBottom variant="h3" component="span">{capital}</Typography>
                        </Typography>
                    </ThemeProvider>
                </CardContent>
                <CardActions>
                    <FavourateIcon starFillFlag = {starFillFlag}/>
                </CardActions>
            </CardActionArea>
        </StyledCard>
    );
}

function FavourateIcon(props) {
    if (props.starFillFlag) {
        return (
            <StyledIconButton aria-label="favourate">
                <StarRoundedIcon />
            </StyledIconButton>
        );
    }
    return (
        <StyledIconButton aria-label="favourate">
            <StarOutlineRoundedIcon />
        </StyledIconButton>
    );
}