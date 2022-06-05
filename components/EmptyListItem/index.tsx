import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const EmptyListItem = () => {
  return (
    <ListItem disableGutters>
      <ListItemText>
        <Typography color="text.secondary">
          Nothing here...
        </Typography>
      </ListItemText>
    </ListItem>
  );
}

export default EmptyListItem;
