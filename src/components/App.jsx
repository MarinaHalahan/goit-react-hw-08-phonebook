import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (
      contacts.find(contact => {
        return contact.name === name;
      })
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(10),
      name,
      number,
    };

    setContacts(state => {
      return [contact, ...state];
    });
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => {
        return contact.id !== contactId;
      })
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  console.log(contacts);
  const normalizedFilter = filter.toLowerCase();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Title title="Phonebook" />
      <ContactForm onSubmit={addContact} />

      <Title title="Contacts" />
      <Filter filter={filter} changeFilter={changeFilter} />

      <ContactList contacts={filterContacts} onClick={deleteContact} />
    </>
  );
};
