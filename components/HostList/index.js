import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';
import CableIcon from '@mui/icons-material/Cable';

const HostList = ({hosts}) => {
  let hostListItems = <EmptyListItem />;

  if (hosts.length) {
    hostListItems = hosts.map((host, index) => {
      return (
        <ListItem key={`host-${index}`}>
          <ListItemAvatar>
            <Avatar>
              <CableIcon />
            </Avatar>
          </ListItemAvatar>

          <ListItemText>
            <Link href={host}>{host}</Link>
          </ListItemText>
        </ListItem>
      );
    });
  }

  return (
    <List>
      <ListItemText>
        Previous known hosts
      </ListItemText>

      <Divider />

      {hostListItems}

    </List>
  );
};

export default HostList;
