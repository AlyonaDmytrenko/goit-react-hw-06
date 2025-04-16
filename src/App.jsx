// import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

// import contact from './contact.json';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from './redux/contactsSlice';

function App() {
  const dispatch = useDispatch();

  const onAddContact = formData => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };
    dispatch(addContact(finalContact));
  };

  const changeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={onAddContact} />
      <SearchBox changeFilter={changeFilter} />
      <ContactList />
    </div>
  );
}

export default App;
