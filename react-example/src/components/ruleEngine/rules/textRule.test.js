import React from 'react';
import { render } from '@testing-library/react';
import TextRule from './textRule';

describe('TextRule component', () => {
  it('should render the correct text for tenant 1', () => {
    const selectedTenant = { id: 'tenant-1' };
    const { getByText } = render(<TextRule selectedTenant={selectedTenant} />);
    expect(getByText('Welcome to Tenant 1!')).toBeInTheDocument();
  });

  it('should render the correct text for tenant 2', () => {
    const selectedTenant = { id: 'tenant-2' };
    const { getByText } = render(<TextRule selectedTenant={selectedTenant} />);
    expect(getByText('Welcome to Tenant 2!')).toBeInTheDocument();
  });

  it('should render the correct text for tenant 3', () => {
    const selectedTenant = { id: 'tenant-3' };
    const { getByText } = render(<TextRule selectedTenant={selectedTenant} />);
    expect(getByText('Welcome to Tenant 3!')).toBeInTheDocument();
  });

  it('should render the default text for unknown tenant', () => {
    const selectedTenant = { id: 'unknown' };
    const { getByText } = render(<TextRule selectedTenant={selectedTenant} />);
    expect(getByText('Welcome!')).toBeInTheDocument();
  });
});
