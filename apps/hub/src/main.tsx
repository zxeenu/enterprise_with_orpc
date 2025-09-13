import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Fragment, PropsWithChildren, StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';

const queryClient = new QueryClient();

export function Providers({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Fragment>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </StrictMode>
);
