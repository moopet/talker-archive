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
        <ListItem key={`screencap-${index}`}>
          <Image width={400} height={208} src={`/screencaps/${screencap}`} alt="" />
        </ListItem>
      );
    });
  }

  return (
    <List>
      <ListItemText>
        {props?.title || "Other screen captures"}
      </ListItemText>

      <Divider />

      {screencapListItems}

    </List>
  );
};

export default ScreenCapturesList;

