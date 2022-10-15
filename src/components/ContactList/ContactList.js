import PropTypes from 'prop-types';
import { ListWrap, ListItem, Button } from './ContactList.styled';

import { selectFilterContacts } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilterContacts);
  console.log(filterContacts);

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
