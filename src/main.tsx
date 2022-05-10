import { createRoot } from "react-dom/client";
import App from './App'
import { AppProviders } from './lib/context/app-provider'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <AppProviders>
    <App />
  </AppProviders>,
)
