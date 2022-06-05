import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';

interface HostListProps {
  title?: string,
  hosts: string[]
}

const HostList = ({title = "Hosts", hosts}: HostListProps) => {
  let hostListItems = [<EmptyListItem key="hosts-none" />];

  if (hosts.length) {
    hostListItems = hosts.map((host, index) => {
      const link = host.indexOf(':') !== -1 ? <Link href={`telnet:${host}`}>{host}</Link> : host;

      return (
        <ListItem disableGutters key={`host-${index}`}>
          <ListItemText>
            {link}
          </ListItemText>
        </ListItem>
      );
    });
  }

  return (
    <List subheader={title}>
      <Divider />
      {hostListItems}
    </List>
  );
};

export default HostList;
