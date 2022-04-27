import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const EmptyListItem = () => {
  return (
    <ListItem disableGutters>
      <ListItemText sx={{ color: '#777' }}>
        Nothing here...
      </ListItemText>
    </ListItem>
  );
}

export default EmptyListItem;
