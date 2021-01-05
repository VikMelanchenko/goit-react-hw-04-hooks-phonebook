import { useState } from 'react';

import ContactsForms from './components/ContactsForms/ContactsForm';

import ContactList from './components/ContactList/ContactList';

import Filter from './components/Filter/Filter';

import shortid from 'shortid';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  // form submit
  const formSubmitHandler = (data) => {
    console.log(data);
  };

  // add new contact
  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    // check unique contact name
    if (contacts.find((contact) => contact.name === name)) {
      return toast.error(`${name} is already in contacts`);
    }

    setContacts((prevState) => [contact, ...prevState]);
  };

  // remove contact
  const removeContact = (id) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  };

  // filter contacts
  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForms onSubmit={formSubmitHandler} addContact={addContact} />
      <ToastContainer position="top-center" autoClose={2000} />
      <h1>Contacts</h1>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onRemoveContact={removeContact}
      />
    </>
  );
}
