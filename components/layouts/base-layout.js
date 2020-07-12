import React from 'react';
import Header from './header';
import { Container } from 'react-bootstrap';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />

      <div className="mt-4">
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BaseLayout;
