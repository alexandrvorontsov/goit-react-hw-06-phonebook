import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Phonebook, MessageDelete, MessageCreate } from './Contact.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFilter,
  setIsCreate,
  setIsDelete,
  createContact,
  deleteContact,
} from 'redux/contactListReducer';

export default function Contact() {
  const contacts = useSelector(state => state.contactList.contactsData);
  const contactFilter = useSelector(state => state.contactList.filterData);
  const isDelete = useSelector(state => state.contactList.isDelete);
  const isCreate = useSelector(state => state.contactList.isCreate);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(setFilter(value));
  };

  const addContact = value => {
    const { name } = value;
    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(createContact(value));

    dispatch(setIsCreate(true));
    setTimeout(() => {
      dispatch(setIsCreate(false));
    }, 1000);
  };

  const handleFilter = () => {
    const normalizedFilter = contactFilter.toLowerCase();
    return contacts.filter(prevContacts =>
      prevContacts.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDelete = elementToRemove => {
    dispatch(deleteContact(elementToRemove));

    dispatch(setIsDelete(true));
    setTimeout(() => {
      dispatch(setIsDelete(false));
    }, 1000);
  };

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Filter</h2>
      <Filter filter={contactFilter} onChange={handleChange} />
      <h2>Contacts</h2>
      <ContactList getContacts={handleFilter()} deleteContact={handleDelete} />
      {isDelete && <MessageDelete>Contact delete successfullly!</MessageDelete>}
      {isCreate && <MessageCreate>Contact create successfullly!</MessageCreate>}
    </Phonebook>
  );
}
