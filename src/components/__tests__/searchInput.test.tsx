/**
 * @jest-environment jsdom
 */
import { SearchForm, SearchInput } from '../core/SearchInput';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('can search a value', async () => {
  let value = '';
  const mockOnSubmit = (data: SearchForm) => {
    value = data.searchString;
  };

  render(<SearchInput onSubmit={mockOnSubmit} />);

  const input = screen.getByRole('textbox');
  const searchButton = screen.getByRole('button', { name: /search database/i });

  const testString = 'test string';
  await userEvent.type(input, testString);
  userEvent.click(searchButton);

  await waitFor(() => {
    expect(value).toEqual(testString);
  });
});
