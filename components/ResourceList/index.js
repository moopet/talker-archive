import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';
import * as Icons from '@mui/icons-material';

const ResourceList = ({resources}) => {
  let resourceListItems = <EmptyListItem />;

  if (resources.length) {
    resourceListItems = resources.map((resource, index) => {
      let avatar = <Avatar />;

      if (resource?.icon && Icons.hasOwnProperty(resource.icon)) {
        const IconComponent = Icons[resource.icon];

        avatar = <Avatar><IconComponent /></Avatar>;
      }

      return (
        <ListItem key={`resource-${index}`}>
          <ListItemAvatar>
            {avatar}
          </ListItemAvatar>

          <ListItemText secondary={resource.type}>
            <Link href={resource.url}>{resource.name}</Link>
          </ListItemText>
        </ListItem>
      );
    });
  }

  return (
    <List>
      <ListItemText>
        Other resources
      </ListItemText>

      <Divider />

      {resourceListItems}

    </List>
  );
};

export default ResourceList;

