import React, { useState } from 'react';
import TextRule from './components/ruleEngine/rules/textRule';

function App() {
  const [selectedTenant, setSelectedTenant] = useState(null);

  const handleTenantSelect = (event) => {
    const tenantId = event.target.value;
    setSelectedTenant({ id: tenantId });
  };

  return (
    <div>
      <h1>Select a Tenant</h1>
      <select onChange={handleTenantSelect}>
        <option value="">Select a Tenant</option>
        <option value="tenant-1">Tenant 1</option>
        <option value="tenant-2">Tenant 2</option>
        <option value="tenant-3">Tenant 3</option>
      </select>

      {selectedTenant && <TextRule selectedTenant={selectedTenant} />}
    </div>
  );
}

export default App;
