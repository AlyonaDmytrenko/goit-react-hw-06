import Contact from './Contact/Contact';

const ContactList = ({ userContact, onDeleteContact }) => {
  return (
    <ul>
      {userContact.map(contact => {
        return (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              onDeleteContact={() => onDeleteContact(contact.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
