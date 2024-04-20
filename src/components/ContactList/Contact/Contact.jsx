const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <form>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </form>
  );
};

export default Contact;
