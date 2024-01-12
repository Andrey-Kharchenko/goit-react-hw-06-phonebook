import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.lable} htmlFor="name">
        Name
      </label>
      <input className={css.input} type="text" name="name" required />

      <label className={css.lable} htmlFor="number">
        Number
      </label>
      <input className={css.input} type="tel" name="number" required />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
