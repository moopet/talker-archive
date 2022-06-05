import { useEffect, useState, SyntheticEvent} from "react";
import AppBar from '@mui/material/AppBar';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';

import TalkerCard from '../TalkerCard';

interface Talker {
  name: string,
  screencaps?: string[]
}

interface TalkerGridProps {
  talkers: Talker[]
}

const TalkerGrid = ({talkers}: TalkerGridProps) => {
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

  const handleSearch = (event: SyntheticEvent) => {
    setSearchTerm((event.target as HTMLInputElement).value.trim().toLowerCase());
  };

  const handleFilters = (event: SyntheticEvent) => {
    const { value, checked } = event.target as HTMLInputElement;

    setFilters(oldFilters => ({...oldFilters, [value]: checked}));
  };

  return (
    <>
      <AppBar position="relative">
        <Toolbar sx={{display: "flex", justifyContent: "space-between", marginTop: 1, marginBottom: 1}}>
          <FormControl>
            <Input
              id="filter-talker-names"
              placeholder="Filter by talker name..."
              onChange={handleSearch}
              startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
            />
          </FormControl>

          <FormControlLabel
            label="hide talkers without screenshots"
            labelPlacement="start"
            value="screencap"
            control={<Switch defaultChecked onChange={handleFilters} />}
          />
        </Toolbar>
      </AppBar>

      <Grid py={4} container spacing={4}>{talkerGridItems}</Grid>
    </>
  );
};

export default TalkerGrid;
