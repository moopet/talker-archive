import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';

const HostList = ({hosts}) => {
  let hostListItems = <EmptyListItem />;

  if (hosts.length > 1) {
    hostListItems = hosts.map((host, index) => {
      return (
        <ListItem key={`host-${index}`}>
          <Link href={host}>{host}</Link>
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
