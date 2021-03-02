
import React, { Component, lazy, Suspense} from 'react';
//import Layout from './components/Layout';

const Layout = lazy(() => import('./components/Layout'))

export default class App extends Component {
  

  render() {
    
    return (
      <Suspense fallback={ <h2>Loading...</h2> }>
      <Layout/>
      </Suspense>
    );
  }
}


