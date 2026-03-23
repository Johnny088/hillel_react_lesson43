import { useId } from 'react';
import css from './searchForm.module.css';
interface Props {
  searchQuery: (item: string) => void;
}
export const SearchForm = ({ searchQuery }: Props) => {
  const id = useId();
  const formHandler = (formData: FormData) => {
    const newQuery = formData.get('search') as string;
    if (newQuery.trim() !== '') {
      searchQuery(newQuery);
    }
  };
  return (
    <form action={formHandler} className={css.form}>
      <label htmlFor={`search-${id}`}>Search</label>
      <input
        className={css.searchInput}
        id={`search-${id}`}
        name="search"
        type="text"
      />
      <button className={css.searchBtn}>Search</button>
    </form>
  );
};
