import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PhotoIcon from '@mui/icons-material/Photo';
import TalkerCard from '../TalkerCard';

const TalkerGrid = ({ talkers }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(talkers);
  const [filters, setFilters] = useState([]);

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
        .filter(talker => (talker?.screencaps?.length || filters.indexOf('screencap') === -1))
    );
  });

  const handleSearch = (event) => {

    setSearchTerm(event.target.value.trim().toLowerCase());
  };

  const handleFilters = (event, newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <TextField variant="outlined" placeholder="Filter..." onChange={handleSearch} />

      <ToggleButtonGroup
        value={filters}
        onChange={handleFilters}
        aria-label="result filters"
      >
        <ToggleButton value="screencap" aria-label="only show talkers with screen captures">
          <PhotoIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <Grid container spacing={4}>{talkerGridItems}</Grid>
    </>
  );
};

export default TalkerGrid;

