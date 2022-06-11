import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';

type HostListProps = {
  title?: string,
  hosts: Host[]
}

const HostList = ({title = "Hosts", hosts}: HostListProps) => {
  let hostListItems = [<EmptyListItem key="host-none" />];

  if (hosts.length) {
    hostListItems = hosts.map((host, index) => {
      let text: string = `${host.hostname}`;
      let url: string = `http://${host.hostname}`;
      let description: string | null = `(port unknown)`;

      if (typeof host.port !== 'undefined') {
        text = `${host.hostname}:${host.port}`;
        url = `telnet:${text}`;
        description = null;
      }

      return (
        <ListItem disableGutters key={`host-${index}`}>
          <ListItemText secondary={description}>
            <Link href={url}>{text}</Link>
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
