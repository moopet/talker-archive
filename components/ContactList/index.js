import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';

const ContactList = ({contacts}) => {
  let contactListItems = <EmptyListItem />;

  if (contacts.length) {
    contactListItems = contacts.map((contact, index) => {
      return (
        <ListItem key={`contact-${index}`}>
          <Link href={`mailto://${email}`}>{email}</Link>
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


