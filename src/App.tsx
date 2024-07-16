import React from 'react';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import PageContainer from './components/PageContainer';

function App() {
  return (
    <>
      <PageContainer>
        <PageHeader />
        <PageFooter />
      </PageContainer>
    </>
  );
}

export default App;
