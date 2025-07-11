import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const LayoutHeaderOnly = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutHeaderOnly;
