
import React, { Component, lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

//import Layout from './components/Layout';

const Layout = lazy(() => import(/*webpackChunkName: "Layout"*/'./components/Layout'));

export default class App extends Component {
  

  render() {
    
    return (
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout />
        </Suspense>
      </ErrorBoundary>
    );
  }
}


