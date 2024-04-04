import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter  } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
// import { number } from 'yup';

export default function SearchBox() {
  const nameFilter = useSelector(selectNameFilter);
  // const numberFilter = useSelector(selectNumberFilter);
  const dispatch = useDispatch();
  const searchId = useId();
  function handleChange(e) {
    if (e.target.name === "search") {
      dispatch(changeFilter(e.target.value));
    }
  }
  // function handleChange(e) {
  //  dispatch(changeFilter(e.target.value));
  // }

  return (
    <div >
      <label
      className={css.label}
       htmlFor={searchId}>
       <span className={css.text}> Find contacts by name </span> 
        </label>
        <input
        className={css.field}
        type="text"
        name="search"
        value={nameFilter}
        id={searchId}
        onChange={handleChange}
        placeholder="Search by name"
      />
      
      
      
      
      
      
      
      
    </div>
  );
}