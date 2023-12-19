"use client";
import { IPropsNode } from "@/models/@type-props";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const TanstackProvider: React.FC<IPropsNode> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
