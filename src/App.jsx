import { QueryClient, QueryClientProvider } from 'react-query';
import MainPage from 'containers';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
