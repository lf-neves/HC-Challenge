import ReactDOM from 'react-dom';
import App from './App';
import { AppProviders } from './lib/context/app-provider';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  rootElement
);
