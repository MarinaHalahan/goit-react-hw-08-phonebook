import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactList } from './ContactList/ContactList';

import { Title } from './Title/Title';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  // addContact = (name, number) => {
  //   const contact = {
  //     id: nanoid(10),
  //     name,
  //     number,
  //   };
  //   this.setState(prevState => ({
  //     contacts: [contact, ...prevState.contacts],
  //   }));
  //   console.log(this.state.contacts);
  // };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // this.addContact(this.name, this.number);
    const contact = {
      id: nanoid(10),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    console.log(this.state.contacts);
    console.log(e.currentTarget);
    this.reset();
  };

  render() {
    return (
      <>
        <Title title="Phonebook"></Title>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="1">Name</label>
          <input
            id="1"
            type="text"
            value={this.state.name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe,
        dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de
        Castelmore d'Artagnan"
            onChange={this.handleChange}
            required
          ></input>
          <label htmlFor="2">Number</label>
          <input
            id="2"
            type="tel"
            value={this.state.number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            required
          ></input>
          <button type="Submit">Add contact</button>
        </form>
        <Title title="Contacts"></Title>
        <ContactList contacts={this.state.contacts}></ContactList>
      </>
    );
  }
}
