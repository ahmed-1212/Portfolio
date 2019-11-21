import React from 'react';
import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home/Home';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact component={Home} />
      </Layout>  
    </div>
  );
}

export default App;
