import { ListWrap, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ListWrap>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <span className='nameContacts'>{name.toLowerCase()}</span>: <span>{number}</span>
        </ListItem>
      ))}
    </ListWrap>
  );
};
