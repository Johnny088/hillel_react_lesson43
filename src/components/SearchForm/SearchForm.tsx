import { useId } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Form, Input } from './SearchList.styled';
interface Props {
  searchQuery: (item: string) => void;
}
export const SearchForm = ({ searchQuery }: Props) => {
  const debounced = useDebouncedCallback(value => {
    if (value.trim() !== '') {
      searchQuery(value);
    }
  }, 500);

  const id = useId();
  return (
    <Form>
      <label htmlFor={`search-${id}`}>Search</label>
      <Input
        id={`search-${id}`}
        name="search"
        type="text"
        defaultValue={''}
        onChange={e => {
          debounced(e.target.value);
        }}
      />
    </Form>
  );
};
