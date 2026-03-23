import { useId } from 'react';
import css from './searchForm.module.css';
import { useDebouncedCallback } from 'use-debounce';
import { useState } from 'react';
interface Props {
  searchQuery: (item: string) => void;
}
export const SearchForm = ({ searchQuery }: Props) => {
  const [value, setValue] = useState('');
  const debounced = useDebouncedCallback(value => {
    setValue(value);
    searchQuery(value);
  }, 500);

  const id = useId();
  return (
    <form className={css.form}>
      <label htmlFor={`search-${id}`}>Search</label>
      <input
        className={css.searchInput}
        id={`search-${id}`}
        name="search"
        type="text"
        defaultValue={value}
        onChange={e => {
          debounced(e.target.value);
        }}
      />
    </form>
  );
};
