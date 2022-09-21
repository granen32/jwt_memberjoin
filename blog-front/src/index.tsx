import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/index";
import { Provider as StoreProvider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <GlobalStyles />
      <App />
    </StoreProvider>
  </React.StrictMode>
);
