import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';

const HostList = (props) => {
  const { hosts } = props;
  let hostListItems = <EmptyListItem />;

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
    <List subheader={props?.title || "Hosts"}>
      <Divider />
      {hostListItems}
    </List>
  );
};

export default HostList;
