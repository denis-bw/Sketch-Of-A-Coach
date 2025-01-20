import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store } from './redux/store.js';
import { useSelector } from 'react-redux';
import { selectTheme } from './redux/theme/themeSlice.js';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';

function AppWrapper() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
        <App />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Provider store={store}>
      
        <BrowserRouter basename="/coaching-draft">
          <AppWrapper />
        </BrowserRouter>  
      
    </Provider>
  </React.StrictMode>,
);
