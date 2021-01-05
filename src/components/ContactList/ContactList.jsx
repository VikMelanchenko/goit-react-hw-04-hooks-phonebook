import s from '../ContactsForms/ContactsForm.module.scss';
import ContactListItem from '../ContactListItem/ContactListItem';

// список добавленных контактов и удаление
const ContactList = ({ contacts, onRemoveContact }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={s.contact__list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onRemoveContact={onRemoveContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
