import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';

interface Resource {
  name?: string,
  'type': string,
  url: string,
  description?: string,
  icon?: string
}

interface ResourceListProps {
  title?: string,
  resources: Resource[]
}

const ResourceList = ({title = "Other resources", resources}: ResourceListProps) => {
  let resourceListItems = [<EmptyListItem key="resource-none" />];

  const sortedResources: Resource[] = resources.sort((a: Resource, b: Resource): number => {
    if (typeof a.name !== "undefined" && typeof b.name !== "undefined") {
      return a.name.localeCompare(b.name);
    }

    if (typeof a.name === "undefined" && typeof b.name === "undefined") {
      return 0;
    }

    if (typeof b.name === "undefined") {
      return 1;
    }

    return -1;
  });

  if (resources.length) {
    resourceListItems = sortedResources.map((resource, index) => {
      const url: string = resource.type === 'email' ? `mailto:${resource.url}` : resource.url;
      let name: string = resource.name ?? resource.url;
      let description: string | null = resource.description ?? resource.type;

      if (['email', 'ewtoo', 'website'].includes(description)) {
        description = null;
      }

      if (description === 'wayback') {
        description = '(wayback machine copy)';
        name = name.replace(/.+http?/, 'http');
      }

      return (
        <ListItem disableGutters key={`resource-${resource.type}-${index}`}>
          <ListItemText secondary={description}>
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
