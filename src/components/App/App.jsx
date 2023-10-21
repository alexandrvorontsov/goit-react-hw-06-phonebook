import React, { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Phonebook, MessageDelete, MessageCreate } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFilter,
  setIsCreate,
  setIsDelete,
  createContact,
  deleteContact,
} from 'redux/contactListReducer';

export default function App() {
  // const LS_KEY = 'contacts';
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  // const [isDelete, setIsDelete] = useState(false);
  // const [isCreate, setIsCreate] = useState(false);

  const contacts = useSelector(state => state.contactList.contactsData);
  const filter = useSelector(state => state.contactList.filterData);
  const isDelete = useSelector(state => state.contactList.isDelete);
  const isCreate = useSelector(state => state.contactList.isCreate);
  const dispatch = useDispatch();

  useEffect(() => {
    // const localTodo = localStorage.getItem(LS_KEY || []);
    // if (localTodo) setContacts(JSON.parse(localTodo));
  }, []);

  useEffect(() => {
    // contacts && localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(setFilter(value));
    // setFilter(value);
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
    // setContacts(prevTodoList => {
    //   return [...prevTodoList, value];
    // });
    // setIsCreate(true);
    dispatch(setIsCreate(true));
    setTimeout(() => {
      dispatch(setIsCreate(false));
      // setIsCreate(false);
    }, 1000);
  };

  const handleFilter = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(prevContacts =>
      prevContacts.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDelete = elementToRemove => {
    dispatch(deleteContact(elementToRemove));
    // setContacts(prevContacts =>
    //   prevContacts.filter(contact => contact.id !== elementToRemove)
    // );
    // setIsDelete(true);
    dispatch(setIsDelete(true));
    setTimeout(() => {
      // setIsDelete(false);
      dispatch(setIsDelete(false));
    }, 1000);
  };

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Filter</h2>
      <Filter filter={filter} onChange={handleChange} />
      <h2>Contacts</h2>
      <ContactList getContacts={handleFilter()} deleteContact={handleDelete} />
      {isDelete && <MessageDelete>Contact delete successfullly!</MessageDelete>}
      {isCreate && <MessageCreate>Contact create successfullly!</MessageCreate>}
    </Phonebook>
  );
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import React, { useEffect, useState } from 'react';
// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/ContactList';
// import Filter from '../Filter/Filter';
// import { Phonebook, MessageDelete, MessageCreate } from './App.styled';

// export default function App() {
//   const LS_KEY = 'contacts';
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');
//   const [isDelete, setIsDelete] = useState(false);
//   const [isCreate, setIsCreate] = useState(false);

//   useEffect(() => {
//     const localTodo = localStorage.getItem(LS_KEY || []);
//     if (localTodo) setContacts(JSON.parse(localTodo));
//   }, []);

//   useEffect(() => {
//     contacts && localStorage.setItem(LS_KEY, JSON.stringify(contacts));
//   }, [contacts]);

//   const handleChange = evt => {
//     const { value } = evt.currentTarget;
//     setFilter(value);
//   };

//   const addContact = value => {
//     const { name } = value;
//     const isContactExist = contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (isContactExist) {
//       return alert(`${name} is already in contacts`);
//     }

//     setContacts(prevTodoList => {
//       return [...prevTodoList, value];
//     });
//     setIsCreate(true);
//     setTimeout(() => {
//       setIsCreate(false);
//     }, 1000);
//   };

//   const handleFilter = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(prevContacts =>
//       prevContacts.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const handleDelete = elementToRemove => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== elementToRemove)
//     );
//     setIsDelete(true);
//     setTimeout(() => {
//       setIsDelete(false);
//     }, 1000);
//   };

//   return (
//     <Phonebook>
//       <h1>Phonebook</h1>
//       <ContactForm addContact={addContact} />
//       <h2>Filter</h2>
//       <Filter filter={filter} onChange={handleChange} />
//       <h2>Contacts</h2>
//       <ContactList getContacts={handleFilter()} deleteContact={handleDelete} />
//       {isDelete && <MessageDelete>Contact delete successfullly!</MessageDelete>}
//       {isCreate && <MessageCreate>Contact create successfullly!</MessageCreate>}
//     </Phonebook>
//   );
// }
