import s from '../ContactsForms/ContactsForm.module.scss';

import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onRemoveContact }) => {
  return (
    <li key={id} className={s.contact__item}>
      {name}: {number}
      <button className={s.button__submit} onClick={() => onRemoveContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactListItem;
