import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';
import HomeIcon from '@mui/icons-material/Home';

const WesbiteList = (props) => {
  const { websites } = props;
  let websiteListItems = <EmptyListItem />;

  if (websites.length) {
    websiteListItems = websites.map((website, index) => {
      return (
        <ListItem key={`website-${index}`}>
          <ListItemText>
            <Link href={website}>{website}</Link>
          </ListItemText>
        </ListItem>
      );
    });
  }

  return (
    <List>
      <ListItemText>
        {props?.title || "Websites"}
      </ListItemText>

      <Divider />

      {websiteListItems}

    </List>
  );
};

export default WesbiteList;
