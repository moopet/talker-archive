import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';

interface Resource {
  name: string,
  description?: string,
  url: string,
  'type': string
}

interface ResourceListProps {
  title?: string,
  resources: Resource[]
}

const ResourceList = ({title = "Other resources", resources}: ResourceListProps) => {
  let resourceListItems = [<EmptyListItem key="resource-none" />];

  if (resources.length) {
    resourceListItems = resources.map((resource, index) => {
      return (
        <ListItem disableGutters key={`resource-${index}`}>
          <ListItemText secondary={resource.description ?? resource.type}>
            <Link href={resource.url}>{resource.name}</Link>
          </ListItemText>
        </ListItem>
      );
    });
  }

  return (
    <List subheader={title}>
      <Divider />
      {resourceListItems}
    </List>
  );
};

export default ResourceList;
