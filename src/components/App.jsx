import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.find(contact => {
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

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => {
        return contact.id !== contactId;
      }),
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <>
        <Title title="Phonebook" />
        <ContactForm onSubmit={this.addContact} />

        <Title title="Contacts" />
        <Filter filter={filter} changeFilter={this.changeFilter} />

        <ContactList contacts={filterContacts} onClick={this.deleteContact} />
      </>
    );
  }
}
