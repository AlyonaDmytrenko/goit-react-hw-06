import { useSelector } from 'react-redux';
import Contact from './Contact/Contact';

const ContactList = () => {
  const userContact = useSelector(state => {
    return state.contacts.items;
  });

  const filter = useSelector(state => {
    return state.filters.name;
  });

  const filteredContact = userContact.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filteredContact.map(contact => {
        return (
          <li key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
