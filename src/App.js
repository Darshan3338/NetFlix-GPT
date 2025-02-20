import React from 'react';
import BodyCompo from './Components/BodyCompo';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
      <BodyCompo/>
      </Provider>
    </div>
  );
}

export default App;
