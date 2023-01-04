import { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import Transactions from "./pages/Transactions";
import { persistor, store } from "./redux/store";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Transactions />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
