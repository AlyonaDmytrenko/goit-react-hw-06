import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import contact from './contact.json';
import { nanoid } from 'nanoid';

function App() {
  const [userContact, setContact] = useState(() => {
    const stringifiedContact = localStorage.getItem('userContact');
    if (!stringifiedContact) return contact;

    const parsedUserContact = JSON.parse(stringifiedContact);
    return parsedUserContact;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('userContact', JSON.stringify(userContact));
  }, [userContact]);

  const onAddContact = formData => {
    const finalUserContact = {
      ...formData,
      id: nanoid(),
    };
    setContact(prevState => [...prevState, finalUserContact]);
  };

  const onDeleteContact = contactId => {
    setContact(prevContact =>
      prevContact.filter(contact => contact.id !== contactId)
    );
  };

  const onChangeFilter = event => {
    setFilter(event.target.value);
  };

  const filteredContact = userContact.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} onChangeFilter={onChangeFilter} />
      <ContactList
        userContact={filteredContact}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
