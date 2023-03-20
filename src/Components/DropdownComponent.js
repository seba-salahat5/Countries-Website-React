import * as React from 'react';
import { OutlinedInput, MenuItem, Select } from '@mui/material';

const regions = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Favourites',
];
export default function RegionsDropDown() {
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
        <Select
            sx={{ width: 220, bgcolor: '#ffffff', boxShadow: 2, height: 50 }}
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
        </Select>
    );
}