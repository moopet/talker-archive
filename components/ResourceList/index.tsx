import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';

interface Resource {
  name?: string,
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
    const sortedResources = resources.sort((a, b) => {
      const aHasName = typeof a.name !== "undefined";
      const bHasName = typeof b.name !== "undefined";

      if (aHasName && !bHasName) {
        return 1;
      }

      if (bHasName && !aHasName) {
        return -1;
      }

      if (!aHasName && !aHasName) {
        return 0;
      }

      return a.name.localeCompare(b.name);
    });

    resourceListItems = sortedResources.map((resource, index) => {
      const name = resource.name ?? resource.url;
      const url = resource.type === 'email' ? `mailto:${resource.url}` : resource.url;

      return (
        <ListItem disableGutters key={`resource-${resource.type}-${index}`}>
          <ListItemText secondary={resource.description ?? resource.type}>
            <Link href={url}>{name}</Link>
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
