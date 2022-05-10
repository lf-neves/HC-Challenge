import ReactDOM from 'react-dom'
import App from './App'
import { AppProviders } from './lib/context/app-provider'

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
)
