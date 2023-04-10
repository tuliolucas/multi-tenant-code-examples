import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders select a tenant and text rule when a tenant is selected', () => {
  const { getByText, getByRole } = render(<App />);

  // Check that the initial state of the app shows only the select element
  const selectElement = getByRole('combobox');
  expect(selectElement).toBeInTheDocument();

  // Select a tenant and check that the TextRule component is rendered
  fireEvent.change(selectElement, { target: { value: 'tenant-1' } });
  const textRule = getByText('Tenant 1');
  expect(textRule).toBeInTheDocument();
});

test('does not render text rule when no tenant is selected', () => {
  const { queryByText, getByRole } = render(<App />);

  // Check that the initial state of the app shows only the select element
  const selectElement = getByRole('combobox');
  expect(selectElement).toBeInTheDocument();

  // Check that no TextRule component is rendered when no tenant is selected
  expect(queryByText(/Text Rule/i)).toBeNull();
});


