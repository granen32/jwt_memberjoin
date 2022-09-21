import React from "react";
import ReactDOM from "react-dom/client";
import { store, persistor } from "./store/index";
import { Provider as StoreProvider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <App />
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>
);
