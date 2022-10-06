import PropTypes from 'prop-types';
import { ListWrap, ListItem, Button } from './ContactList.styled';

import { getContacts, getFilter } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/contactsSlicer';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ListWrap>
      {filterContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <span className="nameContacts">{name.toLowerCase()}</span>:{' '}
          <span>{number}</span>
          <Button onClick={() => dispatch(deleteContacts(id))}>Delete</Button>
        </ListItem>
      ))}
    </ListWrap>
  );
};

ContactList.propTypes = {
  onClick: PropTypes.func,
};
