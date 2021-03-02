import React from 'react'
import ErrorBoundary from './ErrorBoundary';
import Message from './Message';

const About = () => {
    return (
      <>
        <div style={aboutStyle}>
          <h1>About Page</h1>
          <ErrorBoundary>
            <Message heroName="batman" />
          </ErrorBoundary>
        </div>
      </>
    );
}

export default About

const aboutStyle = {
  height: "90vh",
  width: "100%",
  display: "flex",
  flexDirection: 'column',
  justifyContent: "center",
  alignItems: "center",
};