import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import BeersTable from './Components/BeersTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <BeersTable />
    </Provider>
  );
}

export default App;
