import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './ContactForm.module.css';

const ContactsForm = () => {
  const [form, setForm] = useState({ name: '', phoneNumber: '' });
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => setForm({ ...form, [name]: value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phoneNumber } = form;
    if (!name.trim() || !phoneNumber.trim()) {
      toast.error("Name and phone number are required."); 
      return;
    }
    dispatch(addContact({ name, phoneNumber }));
    setForm({ name: '', phoneNumber: '' });
  };

  return (
    <div>
      <ToastContainer /> 
      <form onSubmit={handleSubmit} className={css.form}>
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          placeholder="Name" 
          className={css.input} 
        />
        <input 
          type="text" 
          name="phoneNumber" 
          value={form.phoneNumber} 
          onChange={handleChange} 
          placeholder="Phone Number" 
          className={css.input} 
        />
        <button type="submit" className={css.btn}>Add Contact</button>
      </form>
    </div>
  );
};

export default ContactsForm;
