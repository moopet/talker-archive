import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';

const WesbiteList = (props) => {
  const { websites } = props;
  let websiteListItems = <EmptyListItem />;

  if (websites.length) {
    websiteListItems = websites.map((website, index) => {
      return (
        <ListItem disableGutters key={`website-${index}`}>
          <ListItemText>
            <Link href={website}>{website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</Link>
          </ListItemText>
        </ListItem>
      );
    });
  }

  return (
    <List subheader={props?.title || "Websites"}>
      <Divider />
      {websiteListItems}
    </List>
  );
};

export default WesbiteList;
