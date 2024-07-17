import React from 'react';
import MainPage from './components/MainPage';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import PageContainer from './components/PageContainer';

function App() {
  return (
    <>
      <PageContainer>
        <PageHeader />
        <MainPage />
        <PageFooter />
      </PageContainer>
    </>
  );
}

export default App;
