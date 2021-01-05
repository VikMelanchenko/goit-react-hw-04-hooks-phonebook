import useLocalStorage from '../../hooks/useLocalStorage';

import s from './ContactsForm.module.scss';

export default function ContactsForms({ addContact }) {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form__item} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={s.input__item}
          type="text"
          name="name"
          value={name}
          placeholder="enter contact name"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Pnone number
        <input
          className={s.input__item}
          type="tel"
          name="number"
          value={number}
          placeholder="enter phone number"
          onChange={handleChange}
        ></input>
      </label>
      <button className={s.button__submit} type="submit">
        Add contact
      </button>
    </form>
  );
}

// // добавление значения в input
// onHandleChange = ({ target }) => {
//   const { name, value } = target;
//   this.setState({ [name]: value });
// };

// // сабмит формы
// handleSubmit = (e) => {
//   // страница не перезагружается
//   e.preventDefault();

//   const { name, number } = this.state;
//   const { addContact } = this.props;

//   addContact({ name, number });

//   console.log(this.state);

//   this.reset();
// };

// // очистка input
// reset = () => {
//   this.setState({ name: '', number: '' });
// };
