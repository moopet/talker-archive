import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import TalkerGrid from '../TalkerGrid';

const TalkerList = (({talkers}) => {
  const [view, setView] = React.useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  }

  return (
    <Container>
      <ToggleButtonGroup exclusive onChange={handleChange}>
        <ToggleButton value="list" aria-label="list">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="grid" aria-label="grid">
          <ViewModuleIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <Stack spacing={3}>
        <Grid container spacing={4}>
          <Grid item lg={3}>
            <Autocomplete
              options={talkers.map(talker => talker.name)}
              renderInput={(params) => <TextField {...params} label="Filter" />}
            />
          </Grid>
        </Grid>

        <TalkerGrid talkers={talkers} />
      </Stack>
    </Container>
  );
});

export default TalkerList;

