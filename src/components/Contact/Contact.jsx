import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import styles from "./Contact.module.css"
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";


const Contact = ({ contact }) => {
     const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
    return (
        <div className={styles.item}>
            <div>
                <p><FaUser size="11px" /> {contact.name}</p>
                <p><FaPhoneAlt size="11px" /> {contact.phoneNumber}</p>
            </div>
            <button className={styles.btn} onClick={handleDelete}>Delete</button>
        </div>
    )

};

export default Contact;