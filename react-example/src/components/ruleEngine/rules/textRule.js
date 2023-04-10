const textByTenant = {
  'tenant-1': 'Welcome to Tenant 1!',
  'tenant-2': 'Welcome to Tenant 2!',
  'tenant-3': 'Welcome to Tenant 3!',
};

const TextRule = ({ selectedTenant }) => {
  const text = textByTenant[selectedTenant.id] || 'Welcome!';
  return <div>{text}</div>;
};

export default TextRule;
