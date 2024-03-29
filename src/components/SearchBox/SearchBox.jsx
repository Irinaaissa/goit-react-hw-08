import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter,  } from '../../redux/filters/selectors';
import { selectNameFilter } from '../../redux/filters/slice';

export default function SearchBox() {
  const search = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const searchId = useId();

  function handleChange(e) {
    dispatch(changeFilter(e.target.value));
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
        value={search}
        id={searchId}
        onChange={handleChange}
      />
    </div>
  );
}