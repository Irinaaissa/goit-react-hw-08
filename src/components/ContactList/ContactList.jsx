

import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import {  selectFilteredContacts } from '../../redux/contacts/slice';
// import { selectNameFilter } from '../../redux/filtersSlice';
// 
export default function ContactList() {
  // const allContacts = useSelector(selectContacts);
  // const search = useSelector(selectNameFilter);

  // const contacts =
    // search.trim() === ''
      // ? allContacts.slice()
      // : allContacts.filter(contact =>
          // contact.name.toLowerCase().includes(search.toLowerCase())
        // );
        const contacts = useSelector(selectFilteredContacts)

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} item={contact} />
      ))}
    </ul>
  );
}