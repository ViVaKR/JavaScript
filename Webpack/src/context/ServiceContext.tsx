import React, { createContext, useContext, ReactNode } from 'react';
import { MyService } from '../services/MyService';

interface ServiceProviderProps {
  children: ReactNode;
  service: MyService;
}

const ServiceContext = createContext<MyService | null>(null);

export const useService = (): MyService | null => {
  return useContext(ServiceContext);
};

export const ServiceProvider: React.FC<ServiceProviderProps> = ({
  children,
  service,
}) => {
  return (
    <ServiceContext.Provider value={service}>
      {children}
    </ServiceContext.Provider>
  );
};
