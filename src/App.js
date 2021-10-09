import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import FetchComponent from './components/FetchComponent';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div class="container mx-auto font-body my-4">
                <FetchComponent />
            </div>
        </QueryClientProvider>
    );
}

export default App;
