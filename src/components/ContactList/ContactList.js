import PropTypes from 'prop-types';
import { ListWrap, ListItem, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ListWrap>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <span className="nameContacts">{name.toLowerCase()}</span>:{' '}
          <span>{number}</span>
          <Button
            onClick={() => {
              onClick(id);
            }}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </ListWrap>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onClick: PropTypes.func,
};
