import { useState } from 'react';
import s from './searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const handelSubmit = event => {
    event.preventDefault();
    if (imageName.trim() === '') {
      return;
    }
    onSubmit(imageName);
    setImageName('');
  };

  const handelNameChange = event => {
    setImageName(event.currentTarget.value.toLowerCase());
  };

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={handelSubmit}>
        <button type="submit" className={s.searchFormButton}>
          <span className={s.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={imageName}
          onChange={handelNameChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
