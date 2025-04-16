import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contactsSlice';

const Contact = ({ name, number }) => {
  const dispatch = useDispatch();

  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <form>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </form>
  );
};

export default Contact;
