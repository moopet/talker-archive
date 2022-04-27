import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';

const ContactList = ({contacts}) => {
  let contactListItems = <EmptyListItem />;

  if (contacts.length) {
    contactListItems = contacts.map((contact, index) => {
      return (
        <ListItem key={`contact-${index}`}>
          <ListItemText>
            <Link href={`mailto://${contact}`}>{contact}</Link>
          </ListItemText>
        </ListItem>
      );
    });
  }

  return (
    <List>
      <ListItemText>
        Contacts
      </ListItemText>

      <Divider />

      {contactListItems}

    </List>
  );
};

export default ContactList;


