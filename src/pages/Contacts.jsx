import { useEffect } from 'react'

// import ContactForm from '../components/ContactForm/ContactForm'
import ContactList from '../components/ContactList/ContactList'
import SearchBox from '../components/SearchBox/SearchBox'
import { useDispatch ,useSelector} from 'react-redux'
import { fetchContacts } from '../redux/contacts/operations'
import Loader from '../components/Loader/Loader'
import Error from '../components/Error/Error'
import { selectError, selectLoading } from '../redux/contacts/selectors'
import NameContact from '../components/NameComtact/NameContact'



function Contacts() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
const dispatch= useDispatch();
useEffect(()=>{
  dispatch(fetchContacts())
},[dispatch]);
  return (
    <>
    <div>
      <NameContact/>
      {/* <ContactForm /> */}
      {loading && <Loader>Loading message</Loader>}
      {error && <Error>Error message</Error>}
      <SearchBox />
      <ContactList />
    </div>
    </>
  )
}

export default Contacts