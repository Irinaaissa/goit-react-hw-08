import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter,  } from '../../redux/filters/selectors';
import { selectNameFilter, selectNumberFilter } from '../../redux/filters/slice';
// import { number } from 'yup';

export default function SearchBox() {
  const nameFilter = useSelector(selectNameFilter);
  const numberFilter = useSelector(selectNumberFilter);
  
  const dispatch = useDispatch();
  const searchId = useId();

  function handleChange(e) {
    if (e.target.name === "search") {
      dispatch(changeFilter(e.target.value));
    }
  }

  return (
    <div className={css.wraper}>
      <label
      className={css.label}
       htmlFor={searchId}>
        Find contacts by name
        </label>
        <input
        className={css.field}
        type="text"
        name="search"
        value={[nameFilter, numberFilter].join(" ")} 
        id={searchId}
        onChange={handleChange}
      />
    </div>
  );
}