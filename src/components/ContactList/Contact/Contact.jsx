const Contact = ({ name, number, deleteContact }) => {
  return (
    <form>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={deleteContact}>
        Delete
      </button>
    </form>
  );
};

export default Contact;
