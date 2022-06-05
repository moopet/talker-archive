import Divider from '@mui/material/Divider';
import Image from 'next/image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';

interface ScreenCapturesListProps {
  title?: string,
  screencaps: string[]
}

const ScreenCapturesList = ({title = "Other screen captures", screencaps}: ScreenCapturesListProps) => {
  let screencapListItems = [<EmptyListItem key="screencap-none" />];

  if (screencaps.length > 1) {
    screencapListItems = screencaps.slice(1).map((screencap, index) => {
      return (
        <ListItem disableGutters key={`screencap-${index}`}>
          <Image
            src={`/screencaps/${screencap}`}
            alt=""
            width={640}
            height={400}
          />
        </ListItem>
      );
    });
  }

  return (
    <List subheader={title}>
      <Divider />
      {screencapListItems}
    </List>
  );
};

export default ScreenCapturesList;
