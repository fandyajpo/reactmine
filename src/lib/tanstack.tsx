import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const TanstackProvider = (props: Props) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default TanstackProvider;
