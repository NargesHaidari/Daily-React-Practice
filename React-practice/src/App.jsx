
import Parent from './components/Parent.jsx';
import { AppDataProvider } from './NewContext.jsx';

export default function App() {
  return (
    <AppDataProvider>
      <div>
        <h1>Welcome to our website</h1>
        <Parent />
      </div>
    </AppDataProvider>
  );
}
