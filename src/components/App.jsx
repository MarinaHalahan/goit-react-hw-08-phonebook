import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  return (
    <>
      <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </>
  );
};
