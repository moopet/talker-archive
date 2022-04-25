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
      const link = host.indexOf(':') !== -1 ? <Link href={`telnet:${host}`}>{host}</Link> : host;

      return (
        <ListItem key={`host-${index}`}>
          <ListItemAvatar>
            <Avatar>
              <CableIcon />
            </Avatar>
          </ListItemAvatar>

          <ListItemText>
            {link}
          </ListItemText>
        </ListItem>
      );
    });
  }

  return (
    <List>
      <ListItemText>
        Hosts
      </ListItemText>

      <Divider />

      {hostListItems}

    </List>
  );
};

export default HostList;
