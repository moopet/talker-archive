import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';

const ResourceList = (props) => {
  const { resources } = props;
  let resourceListItems = <EmptyListItem />;

  if (resources.length) {
    resourceListItems = resources.map((resource, index) => {
      return (
        <ListItem disableGutters key={`resource-${index}`}>
          <ListItemText secondary={resource.type}>
            <Link href={resource.url}>{resource.name}</Link>
          </ListItemText>
        </ListItem>
      );
    });
  }

  return (
    <List subheader={props?.title || "Other resources"}>
      <Divider />
      {resourceListItems}
    </List>
  );
};

export default ResourceList;
