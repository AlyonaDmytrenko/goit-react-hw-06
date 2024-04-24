import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
// import contact from './contact.json';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
// import { addContact, deleteContact } from './redux/contactsSlice';
// import { changeFilter } from './redux/filtersSlice';

function App() {
  const dispatch = useDispatch();

  const userContact = useSelector(state => {
    console.log('state:', state);
    return state.contact.userContact;
  });

  const filter = useSelector(state => {
    return state.contact.filter;
  });

  useEffect(() => {
    localStorage.setItem('userContact', JSON.stringify(userContact));
  }, [userContact]);

  const addContact = formData => {
    const finalUserContact = {
      ...formData,
      id: nanoid(),
    };

    dispatch(addContact(finalUserContact));
  };

  const deleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const changeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  // const filteredContact = userContact.filter(
  //   contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     contact.number.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} changeFilter={changeFilter} />
      <ContactList
        // userContact={filteredContact}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
