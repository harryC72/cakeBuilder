import React from 'react';
import Layout from './components/Layout';
import CakeBuilder from './containers/CakeBuilder'

function App() {
  return (
    <div>
      <Layout>
        <CakeBuilder />
      </Layout>
    </div>
  );
}

export default App;
