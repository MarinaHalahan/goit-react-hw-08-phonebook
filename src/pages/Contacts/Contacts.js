import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Title } from '../../components/Title/Title';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
import { selectLoading, selectError } from '../../redux/selectors';
import { RotatingLines } from 'react-loader-spinner';
import Loader from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      {isLoading && (
        <Loader>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="50"
            visible={true}
          />
        </Loader>
      )}
      {error && <p>{error}</p>}
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
