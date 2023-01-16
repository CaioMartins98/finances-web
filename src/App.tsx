import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import Transactions from "./pages/Transactions";
import { persistor, store } from "./redux/store";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <Toaster position="top-right" gutter={10} reverseOrder={false} />
          <GlobalStyle />
          <Transactions />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
