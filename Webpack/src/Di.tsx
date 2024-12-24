import React from 'react';
import { ServiceProvider, useService } from './context/ServiceContext';
import { MyService } from './services/MyService';

const MyComponent = () => {
  const service = useService();
  React.useEffect(() => {
    if (service) service.sayHello();
  }, [service]);

  return <div>Check the console for a message from MyService.</div>;
};

const Di = () => {
  const myService = new MyService('https://api.vivabm.com');

  return (
    <ServiceProvider service={myService}>
      <MyComponent />
    </ServiceProvider>
  );
};

export default Di;
