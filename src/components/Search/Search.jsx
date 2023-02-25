//styles
import styles from './Search.module.scss';

import { useState } from "react";

const Search = ({callBack = Function.prototype }) => {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if(e.key === 'Enter') {
        handleSubmit()
    }
  }

  const handleInput = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    callBack(value)
  }

  return (
    <div className={styles.row}>
      <div className={styles.row__item}>
        <input
          placeholder="Search"
          id="search-field"
          type="search"
          className={styles.row__input}
          onKeyDown={handleKey}
          onChange={handleInput}
          value={value}
        />
        <button className={styles.row__btn} onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
};

export { Search };
