import { useId } from 'react';

import { useDebouncedCallback } from 'use-debounce';
import { useState } from 'react';
import { Form, Input } from './SearchList.styled';
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
    <Form>
      <label htmlFor={`search-${id}`}>Search</label>
      <Input
        id={`search-${id}`}
        name="search"
        type="text"
        defaultValue={value}
        onChange={e => {
          debounced(e.target.value);
        }}
      />
    </Form>
  );
};
