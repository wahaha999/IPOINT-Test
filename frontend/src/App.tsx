import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Loading from './components/pages/Loading';

const ContactUs = lazy(() => import('./components/pages/contact-us/ContactUs'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AppLayout>
          <Routes>
            <Route path='/' element={<ContactUs />} />
          </Routes>
        </AppLayout>
      </Suspense>
    </Router>
  );
}

export default App;
