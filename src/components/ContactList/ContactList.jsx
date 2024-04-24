import Contact from './Contact/Contact';

const ContactList = ({ userContact, deleteContact }) => {
  return (
    <ul>
      {userContact.map(contact => {
        return (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              deleteContact={() => deleteContact(contact.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
