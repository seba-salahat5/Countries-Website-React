import * as React from 'react';
import { OutlinedInput, MenuItem, Select, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';

const regions = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Favourites',
];

const StyledSelect = styled(Select)({
    width: 220,
    height: 50,
    backgroundColor: 'white',
    color: '#111517',
    fontWeight: 600,
    boxShadow: '3px 2px 8px -1px rgba(0,0,0,0.1)',
    borderRadius: 'px'
});
export default function DropdownComponent() {
    const [Selectedregion, setSelectedRegion] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedRegion(
            value,
        );
    };

    return (
        <FormControl variant="filled">
            <StyledSelect
                displayEmpty
                value={Selectedregion}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        return 'Filter By:';
                    }
                    return selected;
                }}>
                <MenuItem disabled value="">
                    <em>Filter By:</em>
                </MenuItem>
                {regions.map((region) => (
                    <MenuItem key={region} value={region}>
                        {region}
                    </MenuItem>
                ))}
            </StyledSelect>
        </FormControl>
    );
}