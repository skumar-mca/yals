import React from 'react';
import { HashRouter } from 'react-router-dom';
import './app.scss';
import useDeviceType from './custom-hooks/use-device-type';
import AppRouter from './routes/routes';

const App = () => {
  const deviceType = useDeviceType();
  return (
    <HashRouter>
      <div className={`app-body device-type-${deviceType}`}>
        <AppRouter />
      </div>
    </HashRouter>
  );
};

export default App;