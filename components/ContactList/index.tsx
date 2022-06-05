import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmptyListItem from '../EmptyListItem';

interface ContactListProps {
  title?: string,
  contacts: string[]
}

const ContactList = ({ title = "Contacts", contacts }: ContactListProps) => {
  let contactListItems = [<EmptyListItem key="contact-none" />];

  if (contacts.length) {
    contactListItems = contacts.map((contact, index) => {
      return (
        <ListItem disableGutters key={`contact-${index}`}>
          <ListItemText>
            <Link href={`mailto://${contact}`}>{contact}</Link>
          </ListItemText>
        </ListItem>
      );
    });
  }

  return (
    <List subheader={title}>
      <Divider />
      {contactListItems}
    </List>
  );
};

export default ContactList;


