import { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';

import TalkerCard from '../TalkerCard';

const TalkerGrid = ({ talkers }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(talkers);
  const [filters, setFilters] = useState({
    screencap: true
  });

  const talkerGridItems = filteredItems.map((talker, index) => {
    return (
      <Grid item key={`talker-card-${index}`} xs={12} sm={6} md={4} lg={3}>
        <TalkerCard talker={talker} />
      </Grid>
    );
  });

  useEffect(() => {
    setFilteredItems(
      talkers
        .filter(talker => talker.name.toLowerCase().indexOf(searchTerm) !== -1)
        .filter(talker => talker?.screencaps?.length || !filters.screencap)
    );
  }, [searchTerm, filters, talkers]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.trim().toLowerCase());
  };

  const handleFilters = (event) => {
    const { value, checked } = event.target;

    setFilters(oldFilters => ({...oldFilters, [value]: checked}));
  };

  return (
    <>
      <AppBar position="relative">
        <Toolbar sx={{display: "flex", justifyContent: "space-between", marginTop: 1, marginBottom: 1}}>
          <FormControlLabel
            control={<TextField variant="outlined" placeholder="Filter..." onChange={handleSearch} />}
            label={<SearchIcon sx={{ marginRight: 2 }}/>}
            labelPlacement="start"
          />

          <FormControlLabel
            control={<Switch defaultChecked onChange={handleFilters} />}
            label="hide talkers without screenshots"
            labelPlacement="start"
            value="screencap"
          />
        </Toolbar>
      </AppBar>

      <Grid py={4} container spacing={4}>{talkerGridItems}</Grid>
    </>
  );
};

export default TalkerGrid;

