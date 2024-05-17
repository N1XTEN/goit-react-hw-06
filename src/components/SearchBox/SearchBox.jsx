import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

import styles from "./SearchBox.module.css"

const SearchBox = () => {
    const dispatch = useDispatch();
    const nameFilter = useSelector(selectNameFilter);

    const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

    return (
        <>
            <p>Find contacts by name</p>
            <input
                type="text"
                placeholder="Search contacts..."
                value={nameFilter}
                onChange={handleChange}
                className={styles.input}
            />
        </>
  );
};

export default SearchBox;