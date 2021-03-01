import React from 'react'
import ErrorBoundary from './ErrorBoundary';
import Hero from './Hero'

const Contact = () => {

    return (
      <div>
        <main style={mainStyle}>
          <ErrorBoundary>
            <Hero heroName="Superman" />
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroName="Batman" />
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroName="Joker" />
          </ErrorBoundary>
        </main>
      </div>
    );
}

export default Contact

const mainStyle={
    background: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
}