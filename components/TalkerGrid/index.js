import Grid from '@mui/material/Grid';
import TalkerCard from '../TalkerCard';

const TalkerGrid = ({ talkers }) => {
  const talkerGridItems = talkers.map((talker, index) => {
    return (
      <Grid item key={`talker-card-${index}`} xs={12} sm={6} md={4} lg={3}>
        <TalkerCard talker={talker} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={4}>{talkerGridItems}</Grid>
  );
};

export default TalkerGrid;

