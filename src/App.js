import React from 'react';
import Header from './components/Header/Header';
import routes from './routes';
import './styles/app-style.scss';

function App() {
  return (
    <div className="app">
        <Header />
        {routes}
    </div>
  );
}

export default App;
