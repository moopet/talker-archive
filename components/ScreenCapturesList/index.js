import Divider from '@mui/material/Divider';
import Image from 'next/image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';

const ScreenCapturesList = (props) => {
  const { screencaps } = props;
  let screencapListItems = <EmptyListItem />;

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
    <List subheader={props?.title || "Other screen captures"}>
      <Divider />
      {screencapListItems}
    </List>
  );
};

export default ScreenCapturesList;

